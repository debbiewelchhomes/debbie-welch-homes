# Debbie Welch Homes: website maintenance

This guide describes the current repository, not a new content-management system. Debbie can request a focused update in Lovable or ask a developer to make it in the files below. Review the private preview before any separately authorized publication. Never paste credentials into chat or GitHub.

## What this maintenance pass completed

- The repeated buyer-guide and live market-report URLs now have one home: `src/config/resourceLinks.ts`. Navigation, the Resource Library, Buying, and Everett/Mukilteo use the same existing destinations. Link wording, new-tab behavior, and safety attributes are unchanged.
- A small destination test lives at `src/config/resourceLinks.test.js` and runs with the already available Bun tool, without adding dependencies.
- No market numbers, dates, claims, images, FAQs, partner records, forms, or metadata were updated. No new public placeholders were added.
- Past Sales remains a private, unlinked draft in `src/pages/PastSales.tsx`. It is absent from the router, public menus, and sitemap generation. The retained `pageSEO.pastSales` entry in `src/data/seoData.ts` alone does not create a public page.

## Where information currently lives

### October 27, 2026 follow-up

- The homepage's existing four service choices now follow the opening photo. No pathway cards or destinations were added.
- Each service card and homepage About column reveals independently as it enters the screen. Vertical fades avoid the tablet overflow previously caused by horizontal entrance transforms. Photos are unchanged.
- Areas and Resources menu triggers now have the same minimum touch-target size as the Services trigger.
- Personalized-report offers now ask visitors to include their area/property type in the message; the same contact destination and form are retained.
- Everett's population card now labels 113,567 as a July 1, 2025 estimate and cites Census QuickFacts. The research also found that value in public Census-derived Vintage 2025 datasets; direct Census retrieval in this sandbox was blocked, so independent source retrieval remains a limitation.
- Everett's event-center forecast now reflects the City's [project timeline](https://www.everettwa.gov/3289/Project-timeline): construction expected in late 2026, not early fall. It remains a forecast, not a claim that construction started. The existing city-project link is unchanged.
- Article display dates and publication days are unchanged. `src/lib/blogDate.ts` supplies valid ISO calendar dates to the existing article schema and time element; `src/lib/blogDate.test.js` covers date preservation and invalid input.

**Unresolved, not silently updated:** The original Lake Stevens $680-715K / ~$695K and Everett ~$565K market sources and measurement periods remain unconfirmed. The exact 3,100-sailor count was not corroborated by current Navy information. The one-business-day response commitment and personalized-report fulfillment require Debbie's operational confirmation. Historical 2025 article dates alone do not justify rewriting their advice. No email was submitted and no backend configuration was changed.

#### Follow-up verification and changed files

- **High priority fixed:** The service choices appear earlier exactly once. Each card now appears when it enters the phone viewport instead of depending on an offscreen section heading.
- **Medium priority fixed:** Homepage About entrance motion no longer adds eight pixels of tablet overflow. No text, portrait, dimensions or crop were changed.
- **Small corrections completed:** Menu target sizing, report-request wording, dated population attribution, event-center forecast and valid machine-readable blog dates.
- **Tests:** `bun test src/config/resourceLinks.test.js src/lib/blogDate.test.js`: 5 passed, 0 failed. An initial attempt to use Node's test runner was inappropriate for the existing Bun tests; rerunning with Bun passed without changing those tests.
- **Browser:** Homepage, Everett/Mukilteo, Resources and Blog checked at 390, 768, 1100 and 1440 pixels, including reduced-motion mode. All 16 final page/width checks had no horizontal overflow. Service-to-Buying journeys passed at all four widths; desktop Areas keyboard selection opened Everett/Mukilteo. Reviewed screenshots show visible phone service cards and readable Everett facts. No browser runtime errors or inquiry-function requests were observed.
- **Article check:** The military relocation article still displays December 15, 2025; its `datetime` and Article `datePublished` now both read `2025-12-15`. Past Sales resolves to the not-found page.
- **Validation limitation:** Automatic preview diagnostics reported `build OK`. Separate TypeScript and production/prerender commands were not run under the current environment's validation restrictions. Existing `dist` artifacts from 07:16 UTC predate these edits and are not fresh production evidence. External GitHub-main synchronization and task-specific credit usage were not independently verified. No publication, deployment, backend changes, purchases or dependencies were added.
- **Files:** `src/pages/Index.tsx`, `src/components/ServicesSection.tsx`, `src/components/AboutSection.tsx`, `src/components/Navigation.tsx`, `src/components/FreeResourceSection.tsx`, `src/pages/Resources.tsx`, `src/pages/areas/EverettMukilteo.tsx`, `src/components/BlogPostTemplate.tsx`, `src/lib/blogDate.ts`, `src/lib/blogDate.test.js`, `AGENTS.md`, `roadmap.md`, and this guide.

| Information | Current home | Maintenance note |
| --- | --- | --- |
| Lake Stevens housing figures | `src/pages/areas/LakeStevens.tsx`, pros/cons and Quick Facts | Existing copy says typical prices of $680-715K based on an August 2026 snapshot. Quick Facts separately shows ~$695K as median home price. No named source or source URL accompanies those numbers. Do not treat the two measures as interchangeable. |
| Everett housing figure | `src/pages/areas/EverettMukilteo.tsx`, Quick Facts | Existing median is ~$565K; the nearby note says last reviewed August 2026. It links to live reports, but that does not establish the source or measurement period of the historical number. |
| Other area facts and dated local projects | `src/pages/areas/*.tsx` | Keep population, schools, parks, military, and project information distinct from housing snapshots. Everett's outdoor event-center paragraph has a July 2026 city-report reference and a city project link. |
| Live market reports | `src/config/resourceLinks.ts`, `marketReports` | Used by Resources, Navigation, and Everett/Mukilteo. The homepage `src/components/FreeResourceSection.tsx` instead sends personalized-report requests to `/contact`. These are deliberately different actions. |
| Buyer guide | `src/config/resourceLinks.ts`, `buyerGuide` | Used by Resources and Buying. |
| Other Resource Library guides | `src/pages/Resources.tsx`, `guideLinks` | Seller Playbook and home-preparation Flodesk resources remain distinct, page-local links. |
| Selling-page guide | `src/pages/Selling.tsx`, guide section | Existing Heyzine flip-book URL is not the Resource Library's Flodesk Seller Playbook. Do not merge them. |
| Downsizing and relocation guides | `src/pages/Downsizing.tsx`, `src/pages/Relocation.tsx` | Existing guide-request buttons go to `/contact`; no confirmed download URLs are provided here. |
| Trusted partners and inspectors | `src/pages/TrustedPartners.tsx`, `partners` and `inspectors` arrays | Three partner records and three inspection options. John Sobieski's entry intentionally renders as text because no URL is supplied. Preserve the visitor-choice disclaimer. |
| General FAQs | `src/pages/FAQ.tsx`, `faqs` array | The same local array supplies visible native disclosures and local FAQ structured data. |
| Service FAQs | `src/pages/Buying.tsx`, `Selling.tsx`, `Downsizing.tsx`, `Relocation.tsx` | Each has its own `faqs` array and uses the existing Accordion controls and `buildFaqSchema` from `src/data/seoData.ts`. Similar topics do not mean identical answers. |
| Blog articles | `src/data/blogPosts.ts` | `mainBlogPosts`, `searchInsightsPosts`, `allBlogPosts`, `publicBlogPosts`, `seoTitles`, and `getPostBySlug` maintain content and selection. Publication dates are not market measurement dates. |
| Blog presentation/search | `src/pages/Blog.tsx`, `src/components/BlogSection.tsx`, `src/pages/BlogPost.tsx`, `src/components/BlogPostTemplate.tsx` | Existing templates and search already reuse article data. No new template is needed. |
| Appointment and contact CTAs | `src/components/Navigation.tsx`, `HeroSection.tsx`, service and area pages, `Footer.tsx` | Appointment links currently use `https://cal.com/debbie.welch.homes`; internal help links use `/contact`. Keep wording and link behavior specific to each placement. |
| Filtered home searches | `src/pages/areas/*.tsx`, Navigation, Listings | Keep each existing URL, filters, query parameters, tracking, and new-tab behavior intact. Do not replace area searches with a generic report URL. |

### Why there is no new market-snapshot module

The two existing area snapshots have different numbers, measures, and contexts. There is no identical repeated dated/source-backed record to centralize safely. Partners appear on one page, and service FAQ answers are page-specific. Keeping these local avoids a new abstraction with no maintenance benefit.

## Quarterly market review, without guessing

### October 27, 2026: Realtor.com update, verified by Sam/ChatGPT

| City | Published figure | Reporting period | Exact source | Verified |
| --- | --- | --- | --- | --- |
| Lake Stevens | $675,000 citywide median **sold** price | September 2026 (Key indicators) | https://www.realtor.com/local/market/washington/snohomish-county/lake-stevens | October 27, 2026, by Sam/ChatGPT using web retrieval from the publisher pages |
| Everett | $600,000 citywide median **sold** price | September 2026 (Key indicators) | https://www.realtor.com/local/market/washington/snohomish-county/everett | October 27, 2026, by Sam/ChatGPT using web retrieval from the publisher pages |

Both figures were verified by Sam/ChatGPT on October 27, 2026 using the publisher pages. Lovable's own browser was blocked (HTTP 429 / regional-unavailability page), so no independent retrieval from this environment confirmed the tables. Both Quick Facts cards on the Lake Stevens and Everett/Mukilteo pages now show the figure, metric, citywide geography, period and a Realtor.com source link. The unsourced Lake Stevens "$680-715K" range was replaced with neutral prose and no number. No comparison or trend with earlier figures is stated, because the earlier methodologies are unconfirmed. Other facts on those pages were not changed.

Review these dated snapshots **quarterly**, verifying the original publisher's reporting period, metric, geography and value each time. Record the source URL and actual verification date separately from the reporting period. Keep the last verified reporting period visible until a replacement is verified; never roll dates forward automatically. A blocked source leaves the update pending, not verified.

1. Ask Debbie to supply the approved report or original source for the specific community and property types. Record the exact reporting period, metric definition, geography, value, publisher, source URL, and review date.
2. Keep an internal record of the report or citation before editing. A review date is different from the period the data measures. Median sale price, typical asking-price range, average price, and estimate are different metrics.
3. Search the repository for the existing amount and date. For Lake Stevens, review both the $680-715K paragraph and the ~$695K Quick Facts value. For Everett, review the ~$565K card and its August 2026 note together.
4. Only replace a value when its measure and period have been confirmed. Add approved source attribution beside the figure when the owner authorizes a content update. Do not invent a source for existing numbers, automatically change dates, or call an old snapshot current.
5. Check relevant articles for related historical discussion, but do not silently rewrite their publication dates. Search metadata separately if a future content change affects factual summaries.
6. Where no confirmed number exists, leave the page's current qualitative guidance intact. No empty snapshot cards, fake figures, or public placeholders are needed.

**Still needed:** Debbie's original sources and metric definitions for the Lake Stevens and Everett numbers. This pass did not verify them externally or refresh them.

## Updating guides, partners, FAQs, and articles

- **Shared links:** change only the appropriate value in `src/config/resourceLinks.ts`. Update its destination test when Debbie explicitly approves a replacement. Visit every placement in the preview afterward.
- **Unique guides:** edit the matching page-local URL listed above, not an unrelated seller resource. Confirm the destination with Debbie before replacing a `/contact` request with a download.
- **Partners:** get the person's approval, correct business name, description, and confirmed public URL. Preserve existing category/ordering and choice language. A missing link should remain plain text rather than become a dead button.
- **FAQs:** edit the question/answer pair in the relevant page's array. Keep visible answers and structured data aligned through their existing array-driven rendering. Do not merge near-matching questions whose answers differ. Reuse current Accordion/native disclosure behavior.
- **Areas:** update the matching file under `src/pages/areas/`. Verify schools by address, jurisdiction, commute caveats, and county distinctions before approving changed claims. Preserve local search filters.
- **Blog:** edit the existing record in `src/data/blogPosts.ts`. Preserve `id` and `slug` for an existing article. The template understands paragraphs separated by blank lines, `**bold**`, whole-paragraph bold headings, and `- ` bullet lists; it is not a general Markdown or HTML renderer. Confirm `seoTitle`/`seoTitles`, `metaDescription`, `date`, `image`, and `imageAlt` together.
- **Copy:** keep the established warm, practical voice. No em dashes in client-facing text. Capitalize Veteran and Veterans.

## Images and photo metadata

- Existing imported images live under `src/assets/`; public portraits use `public/images/`; blog images use `public/blog/`. Files in `public/` are referenced from the root, such as `/blog/example.webp`.
- Use only approved authentic or already-approved imagery. Do not alter Debbie's appearance or lettering in signs. Keep stable names and inspect desktop and phone crops before replacing an image.
- Alt text should accurately describe what is visible. Some background photos instead use `role="img"` with an `aria-label`; maintain those descriptions. Width/height and aspect ratios help prevent layout shifts.
- Review rights, consent, and original file metadata before adding photos. Remove private GPS/location or client-identifying EXIF metadata from future public uploads when appropriate. This pass did not inspect or strip existing image metadata.
- `BlogPostTemplate.tsx` sends article image and alt information to `SEO.tsx`; do not confuse a visible photo description with a search title. Social-image URLs depend on the configured canonical site URL.

## Testing and maintaining changes

### Owner checklist

Review the private preview on desktop and phone. Open each affected menu and button, check that guide links still open safely in another tab, expand FAQs using keyboard and touch, and compare the wording, figures, dates, photos, and page titles. Check that `/past-sales` remains unavailable. Do not submit test inquiries without separately authorizing a real email.

### Developer checklist

No dependency/service installation is needed for this maintenance pass. Use the installed project tools and existing scripts in a development or CI environment:

```sh
bun test src/config/resourceLinks.test.js
bun run lint
bunx tsc --noEmit -p tsconfig.app.json
bunx tsc --noEmit -p tsconfig.node.json
bun run build
```

The build script in `package.json` runs the `prebuild` SEO generator, Vite client build, Vite server-entry build, and `scripts/prerender.mjs`. Successful generation should report 53 URLs/pages for the currently inspected content; recalculate if an authorized article is added later. Inspect generated output rather than relying only on a preview:

- `dist/index.html` and representative `dist/<route>/index.html` contain rendered main content, correct title, canonical, description, social tags, and structured data.
- `dist/server/entry-server.js`, `dist/sitemap.xml`, and `dist/robots.txt` exist.
- All sitemap routes have corresponding rendered HTML; `dist/past-sales/index.html` is absent on a clean build.
- Open a built representative page with JavaScript disabled to confirm readable prerendered content, then enabled to check hydration and interactions.
- Compare before/after text, links including `target`/`rel`, metadata, and form markup. Run checks at the affected phone and desktop widths. A browser test against Vite's development server does not prove production prerendering.

The Lovable preview harness automatically validates edits. Its `/tmp/observability/build-errors.log` is temporary environment evidence, not a repository file or a substitute for independently inspecting production HTML. This maintenance session checks that diagnostic separately and reports production artifacts as unverified when unavailable.

## Backend, configuration, and secrets

The email integration was inspected only to document it; no backend or form changes were made.

- Shared inquiry submission and contact constants: `src/lib/inquiry.ts`.
- Visitor direct-email/phone fallback: `src/components/InquiryFallback.tsx`.
- Forms: Contact and the four service-page files. Keep their existing payloads, labels, validation, and loading/error states intact.
- Email function: `supabase/functions/send-contact-email/index.ts`. Real visitor submissions use Resend, with the recipient fixed to `debbie@debbiewelchhomes.com`. Leads are not written to a database by this function. It has validation, HTML escaping, an origin allowlist, a honeypot, and an in-memory IP limit that resets when the function restarts.
- The bot honeypot branch returns success without sending email. Provider acceptance for normal submissions is not proof of inbox delivery. This pass did not send a test email or verify provider settings.
- Manage private values in Lovable **Project Settings → Secrets**. The email code reads `RESEND_API_KEY` and optional `RESEND_FROM`; never commit their values or share them in documentation.
- Inspect function status/logs in Lovable Cloud's backend view. Sender-domain verification and provider delivery settings are managed in Resend by the account owner. Do not change them during routine content maintenance.
- Generated client/configuration files under `src/integrations/supabase/`, `.env`, and `supabase/config.toml` are managed integration configuration. Do not hand-edit them or copy credentials into instructions.

## What still needs verification for independent hosting

These are recommendations and unresolved checks, not completed setup or permission to deploy:

1. Confirm the actual GitHub repository/main synchronization and reproducible build environment. A local commit SHA alone does not prove the external repository is synced.
2. Run the full production build, inspect all prerender output, and verify static-host serving, deep links, redirects, asset paths, caching, and 404 behavior. Keep the current React/SSR/prerender setup.
3. Coordinate canonical settings: `src/config/site.ts` provides `DEFAULT_SITE_URL` with optional `VITE_SITE_URL`; `SEO.tsx` and `seoData.ts` use it. The SEO generator also reads that setting, but `scripts/prerender.mjs` currently hardcodes `https://debbiewelchhomes.com` and matches sitemap URLs for that host. Independent hosting on another origin requires a separately approved review, not a settings change in this pass.
4. The generator uses `SITE_LAST_MODIFIED` or a default of `2026-08-17` for sitemap lastmod. That is not a market reporting date. Set it only through an approved release process; do not falsely imply all articles were newly reviewed.
5. Verify that the existing email function is reachable from the independently hosted origin and that allowed origins, sender verification, provider acceptance, inbox delivery, fallback links, and limits work. Do not change secrets or function configuration as part of content edits.
6. Confirm font loading, image permissions/privacy, social metadata, Search Console verification, and existing external-link/tracking behavior on the actual host. Local source inspection cannot establish external account settings.

Do not publish, change domains/DNS, or reconnect integrations merely to complete this checklist. Those require separate authorization.