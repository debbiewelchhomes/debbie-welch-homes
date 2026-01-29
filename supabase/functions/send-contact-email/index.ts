import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  lookingFor: string;
  message: string;
}

// HTML escape function to prevent XSS/injection in emails
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const formData: ContactFormData = await req.json();
    
    // Validate required fields
    if (!formData.firstName || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email format
    if (!isValidEmail(formData.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate field lengths to prevent abuse
    if (formData.firstName.length > 100 || 
        (formData.lastName && formData.lastName.length > 100) ||
        (formData.phone && formData.phone.length > 30) ||
        formData.message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Field length exceeds maximum allowed" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Escape all user inputs for HTML
    const safeFirstName = escapeHtml(formData.firstName.trim());
    const safeLastName = formData.lastName ? escapeHtml(formData.lastName.trim()) : "";
    const safeEmail = escapeHtml(formData.email.trim());
    const safePhone = formData.phone ? escapeHtml(formData.phone.trim()) : "";
    const safeMessage = escapeHtml(formData.message.trim());

    // Format the looking for field
    const lookingForMap: Record<string, string> = {
      buying: "Buying",
      selling: "Selling",
      relocating: "Relocating",
      downsizing: "Downsizing",
      exploring: "Just Exploring",
    };
    const lookingForText = formData.lookingFor 
      ? lookingForMap[formData.lookingFor] || escapeHtml(formData.lookingFor)
      : "Not specified";

    // Build the email HTML with sanitized inputs
    const emailHtml = `
      <h2>New Website Contact</h2>
      <p>You have received a new inquiry from your website contact form:</p>
      
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safeFirstName} ${safeLastName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safePhone || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Looking For</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${lookingForText}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safeMessage.replace(/\n/g, "<br>")}</td>
        </tr>
      </table>
      
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        This message was sent from the Debbie Welch Homes website contact form.
      </p>
    `;

    console.log("Sending contact email to debbie@debbiewelchhomes.com");
    
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Debbie Welch Homes <noreply@debbiewelchhomes.com>",
        to: ["debbie@debbiewelchhomes.com"],
        subject: "New Website Contact",
        html: emailHtml,
        reply_to: formData.email,
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error("Resend API error:", result);
      return new Response(
        JSON.stringify({ success: false, error: result.message || "Failed to send email" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Email sent successfully:", result);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
