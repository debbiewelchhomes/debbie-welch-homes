# Website consistency corrections

## Review results

Reviewed all 53 public pages on desktop, laptop and phone (159 page-and-screen checks). No page overflow, broken loaded images or JavaScript runtime errors appeared. All 34 distinct linked internal paths match existing public pages. Services, Areas, Resources and phone navigation worked in the tested journeys; the guides link reaches its section. The five existing resource/date checks passed.

### Confirmed issues and visitor impact

1. **Contact looks different from the rest of the site.** Its Black Stones accent is smaller and blue-gray instead of the standard black script treatment. Its title, borders and other details use older fixed colors. Visitors see a different visual system when they reach the inquiry page.
2. **Equivalent primary actions use different colors.** Contact's Submit button and Listings' Search Current Homes button are dark navy; booking and service request buttons are blue-gray. Some shared button hover rules also differ from the overrides used on pages. This weakens consistency in the actions visitors should recognize.
3. **The Listings page still presents a coming-soon Past Sales message.** `/past-sales` remains correctly unavailable, but `/listings` is public and describes a forthcoming sales portfolio. This makes the site feel unfinished and conflicts with keeping Past Sales out of public view.
4. **Script heading presentation differs.** Homepage hero/services/About use the script and serif lines together as their heading, while Working Relationship and Market Report leave the script outside the heading and style their supporting text differently. The trailing three periods still appear spaced apart in Black Stones. This makes otherwise similar homepage sections look uneven.

### Already consistent: preserve

- Montserrat body/button text, Cormorant Garamond display headings and Black Stones accents across page mains. The Contact exception is sizing/color, **not** a different loaded font.
- Shared navigation across pages; desktop menu triggers work on their labels and arrows.
- Warm frosted panels over content-heavy background photos. Area photos use a separate localized dark treatment behind white lettering. These are intentionally different readability treatments, not an error requiring full-photo dark overlays.
- Existing photos, Debbie's appearance, eXp branding, area search filters, booking/guide destinations, SEO/SSR architecture and forms.

## Proposed changes, in order

1. **Unify existing shared typography and button styles.** Consolidate the overlapping script rules into one bounded responsive scale with black text, retaining readable white area-photo titles. Standardize primary action and hover colors to the existing blue-gray treatment; keep outlined secondary actions distinct. Replace older fixed Contact colors with the existing shared tokens and preserve all wording and form behavior. Check Contact, homepage, service pages and long area names on desktop/laptop/phone, including pointer hover and keyboard focus.
2. **Match homepage heading presentation.** Bring Working Relationship and Market Report into the existing script-title/serif-support presentation without changing their wording. Tighten only the trailing dots, not letter spacing. Confirm no clipping, awkward overlaps or excessively tall headings on phones and that headings remain accessible.
3. **Remove the public Past Sales teaser from Listings.** Keep `/listings` working and use its existing current-home search and contact actions as the useful content. Preserve the hidden Past Sales files/data and do not add public links to them. This step requires approval to replace the coming-soon copy; retain current page metadata and destinations.
4. **Recheck each step before proceeding.** Repeat the 53-page visual and internal-link sweep, test shared dropdowns, mobile menu, booking/guide links, hover/focus and existing tests. Inspect automatic preview validation. No publication or real inquiry submissions.

## External-link verification limits

Checked 30 distinct external links. Thirteen responded successfully, including Debbie's booking page, buyer/seller guides and several partner pages. Seventeen checks were blocked by anti-bot/access restrictions, including eXp home searches, reports and calculator; these are **unverified, not confirmed dead links**. A browser check also met eXp's verification screen. Preserve those exact destinations and unique area filters unless Debbie supplies or approves a verified replacement. Email/phone handoff and actual form delivery were not exercised.

## Separate maintenance findings, not included in visual changes

- The prerender script only recognizes sitemap URLs under a fixed hostname, while sitemap generation supports a configurable hostname. This would omit prerendered pages if the hostname configuration changes; the current sitemap matches, so no current page failure was established. Leave the architecture untouched in this pass.
- Available security results are dated August 2026 and contain no recent deep scan. Run a fresh scan from the Security tab for a current assessment; this review does not establish that the site is secure.
- Earlier unresolved market sources and fulfillment promises still need their original sources or Debbie's confirmation. No factual updates or invented figures are proposed.

## Technical boundaries

Use the existing global stylesheet, shared Button and current page components. No rewrite, dependency updates, new services, backend/account/secret changes, domain/DNS changes or publishing. Refresh outdated font-scope documentation only as part of an approved typography change.