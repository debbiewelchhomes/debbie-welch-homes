# Phone visitor journey audit (375x812): findings and proposed fixes

Read-only audit of the current saved version `36bb0a3cf6e8f37aa8098462b672413f2e625782`, run against the local preview (http://localhost:8080). I didn't submit any forms or send any email. Temporary screenshots are in /tmp only. External sites were not opened (I only recorded their link targets).

## What I tested in the browser

| Journey | Steps clicked | Result |
|---|---|---|
| Home -> Downsizing -> guide | "Senior Housing" card link -> `/services/downsizing` -> "Ask Me for the Downsizing Guide" | Opens `/contact`. Back returns to `/services/downsizing`. |
| Home -> Relocation -> guide | "Military & Veterans" card link -> `/services/relocation` -> "Ask Me for the Relocation Guide" | Opens `/contact`. Back returns to `/services/relocation`, but at the top of the page instead of where you were. |
| Home -> Selling -> evaluation | "Explore Selling" -> `/services/selling` | The page has a form with a "Request My Home Evaluation" button (not submitted). "Get the Seller Guide" opens heyzine.com in a new tab. I didn't open that site. |
| Phone menu | Opened it with the menu button | 24 destinations, all with correct link targets. The menu scrolls on its own (content 1460px tall, window 714px), and the close button works. |
| Side-scrolling | Measured page width on Home, Downsizing, Relocation, Selling, Contact and Resources | All are exactly 375px wide, so there's no sideways scrolling. The only thing sitting off-screen is the hidden anti-bot field, which is intentional. |
| Required fields | Checked with the browser's built-in validation only (no sending) | Downsizing and Relocation: name and email. Selling: name, email and property address. Contact: first name, email and "How can I help?". Phone is optional everywhere. |
| Page errors | Every page above | None |

## Findings, most important first

1. **The two guide buttons don't explain what happens next (tested).** "Ask Me for the Downsizing Guide" and "Ask Me for the Relocation Guide" open the general Contact page, with nothing that says which guide was asked for. Each of those pages already has its own form a little further down, so the visitor gets sent away from the closest form.
2. **The floating mail button covers text (tested, screenshot).** The round mail bubble in the bottom-right corner (85x85) covers the end of the "Serving ... Bothell, Mill Creek, and Mukilteo" line on the homepage. It also covers the copyright line in the footer and the bottom menu items while the menu is open. This bubble comes from a separate chat service (Jivo). It is not the Messenger link described in the project notes.
3. **Contact is missing from the phone menu (tested).** The menu ends with Blog, About and "Book a Free Consult", which goes to cal.com in a new tab. There is no Contact item, so the menu offers no on-site way to send a message. Contact is only reachable from buttons inside pages and the footer.
4. **The Selling evaluation button wraps (tested, screenshot).** "Request My Home Evaluation" breaks onto two lines and makes an 80px-tall button. It's readable, but bulky.
5. **Inconsistent page titles after clicking (tested, needs a second look).** Right after clicking a guide button, the address showed `/contact` but the page heading still showed the service page's title for a moment. Most likely the check just ran too early. I'd re-check this before changing anything.
6. **The FAQ question buttons pass the size check (tested).** They are 55–101px tall, which is enough for a finger. The email and phone links inside forms are 18px tall, which is small but normal for links inside a sentence.

Not checked: the heyzine, Flodesk, eXp, cal.com and Jivo screens themselves, and what actually happens after sending a form.

## Proposed fixes (only if Debbie approves)

- Point both guide buttons to the form on their own page, using a page anchor such as `#guide-request`, and add the guide's name to the message field. No changes to the forms themselves.
- Move the mail bubble up, or add space at the bottom of the page on phones so it never covers text. That part is visual only. Confirm with Debbie whether the Jivo chat should stay at all.
- Add "Contact" to the phone menu next to "Book a Free Consult".
- On phones only, shorten the button label to "Request My Evaluation", or let the button fit its text more tightly.

## Technical notes

- Guide buttons: `src/pages/Downsizing.tsx:376` and `src/pages/Relocation.tsx:371`
- Chat bubble: `src/components/ChatButton.tsx` (Jivo)
- Phone menu: the shared Navigation component
- Verify with a Playwright run at 375x812 that never submits a form.
