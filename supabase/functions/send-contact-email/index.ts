import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  "https://debbie-welch-homes.lovable.app",
  "https://debbiewelchhomes.com",
  "https://www.debbiewelchhomes.com",
];

const TO_EMAIL = "debbie@debbiewelchhomes.com";
// Sending identity. Overridable with a secret while the primary domain is
// pending verification with the email provider.
const FROM_EMAIL = Deno.env.get("RESEND_FROM") ??
  "Debbie Welch Homes <noreply@debbiewelchhomes.com>";

// Rate limiting: track requests per IP (resets on cold start, but still helps)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getCorsHeaders(origin: string | null): Record<string, string> {
  const isAllowed = origin && (
    ALLOWED_ORIGINS.includes(origin) ||
    origin.includes("lovable.app") ||
    origin.includes("lovableproject.com")
  );

  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

interface InquiryBody {
  formName?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string; // Honeypot field - should be empty
  fields?: Record<string, unknown>;
  // Legacy contact-form shape
  firstName?: string;
  lastName?: string;
  lookingFor?: string;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

const MAX_LABEL = 80;
const MAX_VALUE = 5000;

function normalizeFields(input: Record<string, unknown> | undefined): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  if (!input || typeof input !== "object") return out;
  for (const [rawLabel, rawValue] of Object.entries(input)) {
    if (out.length >= 25) break;
    if (rawValue === null || rawValue === undefined) continue;
    const value = typeof rawValue === "string" ? rawValue : JSON.stringify(rawValue);
    const trimmed = value.trim();
    if (!trimmed) continue;
    out.push([rawLabel.slice(0, MAX_LABEL), trimmed.slice(0, MAX_VALUE)]);
  }
  return out;
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    if (!checkRateLimit(clientIp)) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ success: false, error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ success: false, error: "Email service not configured" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const body: InquiryBody = await req.json();

    // Honeypot check - if the hidden "website" field is filled, it's a bot
    if (body.website && body.website.trim() !== "") {
      console.warn(`Honeypot triggered from IP: ${clientIp}`);
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const formName = (body.formName || "Website Contact").toString().slice(0, 120).trim();

    // Support both the shared inquiry payload and the legacy contact shape.
    const name = (body.name || [body.firstName, body.lastName].filter(Boolean).join(" ") || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();

    const fields = normalizeFields(body.fields);
    if (body.lookingFor) fields.unshift(["Looking For", String(body.lookingFor)]);
    if (body.message) fields.push(["Message", String(body.message)]);

    if (!name || !email || fields.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    if (name.length > 200 || phone.length > 30) {
      return new Response(
        JSON.stringify({ success: false, error: "Field length exceeds maximum allowed" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const rows = [
      ["Form", formName],
      ["Name", name],
      ["Email", email],
      ["Phone", phone || "Not provided"],
      ...fields,
    ]
      .map(([label, value]) => {
        const safeValue = escapeHtml(value).replace(/\n/g, "<br>");
        return `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">${
          escapeHtml(label)
        }</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safeValue}</td>
        </tr>`;
      })
      .join("");

    const emailHtml = `
      <h2>New inquiry: ${escapeHtml(formName)}</h2>
      <p>A visitor submitted the "${escapeHtml(formName)}" form on your website:</p>

      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        ${rows}
      </table>

      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        Sent from the Debbie Welch Homes website.
      </p>
    `;

    console.log(`Sending "${formName}" inquiry from IP: ${clientIp}`);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: `New website inquiry: ${formName}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", result);
      return new Response(
        JSON.stringify({ success: false, error: result.message || "Failed to send email" }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    console.log("Email accepted by provider:", result?.id ?? result);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error sending inquiry email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
};

serve(handler);
