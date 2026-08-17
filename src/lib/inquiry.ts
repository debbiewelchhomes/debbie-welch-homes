import { supabase } from "@/integrations/supabase/client";

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
 * Sends a website inquiry through the send-contact-email edge function.
 * Returns ok only when the email provider accepted the message.
 */
export async function sendInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  const fields: Record<string, string> = {};
  for (const [label, value] of Object.entries(payload.fields ?? {})) {
    const trimmed = typeof value === "string" ? value.trim() : "";
    if (trimmed) fields[label] = trimmed;
  }

  try {
    const { data, error } = await supabase.functions.invoke("send-contact-email", {
      body: {
        formName: payload.formName,
        name: payload.name?.trim() ?? "",
        email: payload.email.trim(),
        phone: payload.phone?.trim() ?? "",
        website: payload.website ?? "",
        fields,
      },
    });

    if (error) {
      console.error("Inquiry send failed:", error);
      return { ok: false, error: GENERIC_ERROR };
    }

    if (!data || data.success !== true) {
      console.error("Inquiry send rejected:", data);
      return { ok: false, error: GENERIC_ERROR };
    }

    return { ok: true };
  } catch (err) {
    console.error("Inquiry send threw:", err);
    return { ok: false, error: GENERIC_ERROR };
  }
}
