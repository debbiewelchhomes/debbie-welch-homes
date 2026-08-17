import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/inquiry";

interface InquiryFallbackProps {
  className?: string;
}

/**
 * Honest fallback shown with every inquiry form so visitors always have a
 * direct way to reach Debbie, even if the form itself cannot send.
 */
const InquiryFallback = ({ className = "" }: InquiryFallbackProps) => (
  <p className={`font-body text-sm text-muted-foreground ${className}`}>
    Prefer to reach me directly? Email{" "}
    <a href={CONTACT_EMAIL_HREF} className="underline hover:text-secondary">
      {CONTACT_EMAIL}
    </a>{" "}
    or call{" "}
    <a href={CONTACT_PHONE_HREF} className="underline hover:text-secondary">
      {CONTACT_PHONE}
    </a>
    .
  </p>
);

export default InquiryFallback;
