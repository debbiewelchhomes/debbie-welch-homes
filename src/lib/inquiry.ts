export const CONTACT_EMAIL = "debbie@debbiewelchhomes.com";
export const CONTACT_PHONE = "360-631-8148";
export const CONTACT_PHONE_HREF = "tel:360-631-8148";
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;

export interface InquiryPayload {
  /** Human readable name of the form the visitor used. */
  formName: string;
  name?: string;
  email: string;
  phone?: string;
  /** Honeypot value. Must stay empty for real visitors. */
  website?: string;
  /** Any additional labelled fields the visitor filled in. */
  fields?: Record<string, string | undefined | null>;
}

export interface InquiryResult {
  ok: boolean;
  error?: string;
}

const GENERIC_ERROR =
  "I could not send that message right now. Please email me at " +
  CONTACT_EMAIL +
  " or call " +
  CONTACT_PHONE +
  ".";

/**
 * Save an inquiry to Netlify Forms. A successful response means Netlify
 * accepted the submission; notification delivery is configured separately.
 */
export async function sendInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  const details = Object.entries(payload.fields ?? {})
    .map(([label, value]) => [label, typeof value === "string" ? value.trim() : ""] as const)
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n\n");

  const body = new URLSearchParams({
    "form-name": "website-inquiry",
    name: payload.name?.trim() ?? "",
    email: payload.email.trim(),
    phone: payload.phone?.trim() ?? "",
    "inquiry-type": payload.formName,
    message: details,
    "bot-field": payload.website ?? "",
  });

  try {
    const response = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!response.ok) {
      console.error("Inquiry submission failed:", response.status);
      return { ok: false, error: GENERIC_ERROR };
    }
    return { ok: true };
  } catch (err) {
    console.error("Inquiry submission failed:", err);
    return { ok: false, error: GENERIC_ERROR };
  }
}
