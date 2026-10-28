# Approved editorial pass: October 28, 2026

## Result and scope

Applied the exact approved longer homepage hero biography. Reviewed Home, About, Buying, Selling, Downsizing, Relocation and all eight area guides against the current source and the existing October 27 review. Retained recent heading, photo, icon, button and section-order refinements. Reduced repeated reassurance, comparison-heavy positioning, and blanket service promises without altering client quotations.

No publication, deployment, migration, DNS, account, integration, form, photo, CSS/design, route, market figure, privacy-policy or public-visibility changes. Past Sales remains unavailable. New reading links reuse the existing article template and typography; unlisted articles get no new related-reading section.

## Exact files

- `AGENTS.md`
- `docs/website-maintenance.md`
- `roadmap.md`
- `src/components/AboutSection.tsx`
- `src/components/BlogPostTemplate.tsx`
- `src/components/BrandPromiseSection.tsx`
- `src/components/HeroSection.tsx`
- `src/components/ServicesSection.tsx`
- `src/data/blogPosts.ts`
- `src/data/visibleBlogReading.test.js`
- `src/data/visibleBlogReading.ts`
- `src/pages/About.tsx`
- `src/pages/Buying.tsx`
- `src/pages/Downsizing.tsx`
- `src/pages/Relocation.tsx`
- `src/pages/Selling.tsx`
- `src/pages/areas/Arlington.tsx`
- `src/pages/areas/BothellMillCreek.tsx`
- `src/pages/areas/EverettMukilteo.tsx`
- `src/pages/areas/LakeStevens.tsx`
- `src/pages/areas/Marysville.tsx`
- `src/pages/areas/Snohomish.tsx`
- `src/pages/areas/SnohomishCounty.tsx`
- `src/pages/areas/StanwoodCamano.tsx`
- `docs/editorial-pass-2026-10-28.md` (this report).

## Before / after examples

| Page | Before | After |
| --- | --- | --- |
| Home | “You get honest guidance, a clear, organized plan…” | Exact approved biography below. |
| Home About | “I slow things down… the fine print…” | “I like helping people work through the details: what a home will cost, how the timing could work, and which questions need answers before a decision.” |
| Home working relationship | “What Working With Me Actually Looks Like” | “What You Can Expect” |
| Home cards | “Clarity Over Pressure”; “Honest, Steady Communication” | “Answers to Your Questions”; “Communication Along the Way” |
| About | “Thirty Years Reading the Fine Print” | “What Healthcare Taught Me” |
| About | “That clause on page 4… That's the one I flag.” | “I bring those habits to real estate, reviewing documents and helping you identify questions that need a closer look.” |
| Buying | “I'm Not in a Hurry. You Shouldn't Be Either.” | “Answers to Your Questions” |
| Selling | “No last-minute surprises.” | “We work through updates and changes as they arise.” |
| Downsizing | “The practical part… is actually the easier part.” | “For some people, sorting belongings is the hardest part. For others, it is the finances, the logistics, or deciding where to go next. We start with what feels difficult for you…” |
| Downsizing | “That's not a formal service with a fee attached. It's just what I do…” | “These are examples from past moves, not guaranteed included services. We agree on responsibilities and any outside costs for your situation.” |
| Relocation | “Military PCS & Relocation to Snohomish County” | “Military PCS & Relocation to or from Snohomish County” |
| Marysville | “still genuinely affordable for the right buyer” | “with established neighborhoods, newer homes, and local parks. Prices vary by home, location, and market conditions.” |
| Lake Stevens | “More house for the money.” | “Housing choices and lot sizes.” |
| Everett/Mukilteo | “Quieter, more affordable, historic.” | “Historic homes and a riverfront setting.” |
| Stanwood/Camano | County line “changes… school districts” | County jurisdiction and exact-address school checks distinguished; county lines do not establish school boundaries. |

**Exact hero text:**

> I grew up in Marysville, lived and raised my family in Lake Stevens, and now call Everett home. After more than 45 years in Snohomish County, I know how much the right home and location can matter to everyday life. I’m here to help you understand your options and make a plan that works for you.

Area section headings now emphasize their individual content, including “Downtown, Smokey Point & Rural Edges,” “Two Communities, Different Property Details,” “Historic Character & Property Questions,” and “Mainland and Island Living.” Named parks, trails, local biography and useful parcel-specific guidance remain. No unsupported school-quality ranking was added.

## Illustrated blog scope

All 12 pictured public posts were reviewed. Content edits were confined to these seven; titles, metadata, dates, images, IDs, slugs and URLs stayed unchanged:

- `pcs-military-relocation-naval-station-everett`: **How Do I Plan a PCS Move to or from Naval Station Everett?**
- `downsizing-sell-buy-snohomish-county`: **How Do I Coordinate Selling and Buying During a Downsizing Move?**
- `first-time-home-buying-calm-guide`: **What Should First-Time Buyers Expect in Snohomish County?**
- `first-time-buyer-competitive-offer-protections`: **How Can a First-Time Buyer Compete Without Giving Up Every Protection?**
- `sell-first-or-buy-first`: **Should I Sell First or Buy First in Snohomish County?**
- `downsizing-guide`: **A Practical Guide to Downsizing Your Home Without Losing Your Mind**
- `relocating-guide`: **Relocating to Snohomish County: What I Tell My Military & Out-of-Area Buyers**

**Exact article substitutions:**

- `main-1`: “Carrying two housing payments would create too much pressure.” → “Carrying two housing payments may not fit your budget.”
- `main-1`: “Start with the date by which you actually need to be settled.” → “Start with your target move-in date.”
- `main-2`: “A calmer order of operations” → “A step-by-step order of operations”
- `main-2`: “Early planning creates room for thoughtful decisions and prevents every weekend from becoming an emergency sorting session.” → “Early planning leaves room to sort gradually and adjust the schedule as you go.”
- `main-3`: “A commute should be considered at the times you will actually travel.” → “Consider a commute at the times you expect to travel.”
- `r01`: “Buying immediately may make sense when the household expects to remain in the area long enough, understands the monthly cost, and can make a careful decision without rushing. Renting first can provide time to learn the area and reduce pressure, but it may involve an additional move and possible lease constraints.” → “Buying immediately may make sense when the household expects to remain in the area long enough, understands the monthly cost, and has time to evaluate the home. Renting first can provide time to learn the area, but it may involve an additional move and possible lease constraints.”
- `r02`: “A calmer plan starts by identifying which part of the move has the least flexibility.” → “Start by identifying which part of the move has the least flexibility.”
- `r02`: “the kind of home that would actually improve daily life.” → “the kind of home that would improve daily life.”
- `r02`: “Create a backup plan you could actually use” → “Create a backup plan you could use”
- `r03`: “Clear numbers, careful property research, and an offer you understand are more valuable than trying to move faster than everyone else.” → “Use clear numbers, careful property research, and an offer you understand to decide whether a home fits your plans.”
- `bc09`: “Decide the maximum purchase price and monthly payment while you are calm.” → “Decide the maximum purchase price and monthly payment before you enter a multiple-offer situation.”
- `bc09`: “Do not represent financing as stronger than it actually is.” → “Describe financing accurately, including any remaining approval conditions.”
- `bc09`: “A competitive offer should still be survivable” → “A competitive offer should still fit your limits”

The other five pictured articles needed no body edits. Six pictured articles have selected related reading, with eight links total. The mapping filters both source and destination against the pictured public list; it never applies to hidden articles. No Markdown-link parser was introduced and existing article rendering is unchanged.

## New contextual links

| Source page | Existing illustrated destination |
| --- | --- |
| Buying | `/blog/first-time-home-buying-calm-guide` |
| Selling | `/blog/sell-first-or-buy-first` |
| Downsizing | `/blog/downsizing-guide` |
| Relocation | `/blog/relocating-guide` |
| Marysville | `/blog/first-time-home-buyers-marysville-wa` |
| Lake Stevens | `/blog/downsizing-sell-buy-snohomish-county` |
| Everett/Mukilteo | `/blog/va-home-buyers-naval-station-everett` |
| Snohomish County | `/blog/relocating-guide` |

## Checks and preservation evidence

- 11 existing/new Bun tests passed, zero failed; new tests enforce pictured-only related reading and no links on the 18 hidden articles.
- Full object comparison against the pre-edit baseline: all 18 unlisted articles identical, including body and metadata. All 30 article fields except eligible body content identical. Public article selection/order and membership unchanged.
- All four service-page forms, inquiry submission handlers and testimonial arrays are identical to the starting revision. No inquiries or emails submitted.
- Both approved market values and Realtor.com source URLs unchanged. SEO configuration, route definitions, robots and sitemap files untouched.
- 54 live browser checks: 27 approved pages at desktop 1280×1800 and phone 375×812, with page heading, title, description, canonical and no horizontal overflow. Exact hero text confirmed in rendered UI.
- Clicked all eight service/area article links and all eight related-article links to their rendered destination headings. Confirmed no related navigation on a representative unlisted article and `/past-sales` renders 404.
- No browser runtime errors. Hero, About photo/text alignment and related-reading screenshots reviewed; existing photo-height matching remains intact.
- Automatic preview diagnostics: latest checked entry reports `build OK`. Separate production/prerender builds and typechecks were not run because the environment handles them automatically; this is not an independent production-hosting certification.
- `git diff --check` passed.

## Remaining questions and reminder-only future work

No approved editorial task remains blocked. Unverified factual claims were not invented or silently refreshed: Navy headcount, Providence's 2025 expansion, Ivar's location-specific history, some park/population counts and guide contents still warrant source/owner review before launch. Preserve figures pending that separate verification. Credential/provider status and guide fulfillment remain unverified; no new service or financial promises were added. The one-business-day commitment is owner-confirmed and unchanged. Other existing roadmap items remain separate, including possible new homepage pathway cards; no cards added in this pass.

The maintenance guide now records: after Debbie approves the finished site, separately review/update the existing eXp/BoldTrail companion; plan an independently hosted custom-domain move only with consent. Preserve mail DNS, redirects, canonical/robots/sitemap/site URL/OpenGraph/schema and Search Console. Nothing in that reminder authorizes migration.

## Saved revision and credits

- Starting revision: `9f9436d3af8ea2496b32e9ff570dd471f8a61e9e`.
- Saved application revision at validation: `303e6699bb1044f4e99504b234fb1bf5364913e7`. Repository revisions are managed automatically; no manual Git commit or push performed. External GitHub synchronization is not independently verified.
- Credit tool reports 184 credits used in the current billing period, Sep 29–Oct 29, 2026. This is aggregate usage, not the credit cost of this request; task-specific cost cannot be verified from that result. No paid services, purchases or dependencies added.

## Complete source diff

The following diff preserves exact before/after text for every changed visitor-facing file, rather than relying solely on examples.

```diff
diff --git a/src/components/AboutSection.tsx b/src/components/AboutSection.tsx
index 260291b..b06e7e2 100644
--- a/src/components/AboutSection.tsx
+++ b/src/components/AboutSection.tsx
@@ -30,13 +30,13 @@ const AboutSection = () => {
             />
             <div className="lg:text-justify lg:[hyphens:auto]">
               <p className="copy text-foreground mb-4">
-                I grew up in Marysville, raised my family in Lake Stevens, and now live in North Everett. I have spent more than 45 years watching Snohomish County change, and I bring that local perspective to every move.
+                I'm a Snohomish County real estate broker, a lifelong floor-plan enthusiast, and currently in the middle of a live-in renovation in North Everett.
               </p>
               <p className="copy text-foreground mb-4">
-                Real estate does not have to feel pushy, confusing, or rushed. A lot of people come to me expecting the process to feel overwhelming. It can be, if no one takes the time to explain what is actually happening.
+                I like helping people work through the details: what a home will cost, how the timing could work, and which questions need answers before a decision.
               </p>
               <p className="copy text-foreground mb-4">
-                That is the part I care about most. I slow things down just enough for you to understand the numbers, the tradeoffs, and the fine print. The details buried in the middle of a document are usually the ones that matter most. I explain them in plain language and keep the process organized, so you can make a decision you fully understand.
+                My 30 years in healthcare, including coding, auditing, and education, taught me to read carefully and explain complex information. Those habits are part of how I work today.
               </p>
               <p className="copy text-foreground mb-6">
                 I help buyers and sellers across the county, including first-time buyers, with a particular focus on senior transitions and downsizing, military PCS moves and Veterans, and people relocating to or from Snohomish County.
diff --git a/src/components/BlogPostTemplate.tsx b/src/components/BlogPostTemplate.tsx
index 37b9ac7..8c0e18d 100644
--- a/src/components/BlogPostTemplate.tsx
+++ b/src/components/BlogPostTemplate.tsx
@@ -7,6 +7,7 @@ import { ArrowLeft } from "lucide-react";
 import { BlogPost } from "@/data/blogPosts";
 import { absoluteUrl } from "@/config/site";
 import { blogPublicationDate } from "@/lib/blogDate";
+import { getVisibleRelatedPosts } from "@/data/visibleBlogReading";
 
 interface BlogPostTemplateProps {
   post: BlogPost;
@@ -14,6 +15,7 @@ interface BlogPostTemplateProps {
 
 const BlogPostTemplate = ({ post }: BlogPostTemplateProps) => {
   const publicationDate = blogPublicationDate(post.date);
+  const relatedPosts = getVisibleRelatedPosts(post.slug);
 
   // Convert markdown-style bold to HTML
   const formatContent = (content: string) => {
@@ -125,6 +127,20 @@ const BlogPostTemplate = ({ post }: BlogPostTemplateProps) => {
             </div>
 
             {/* Back to Blog */}
+            {relatedPosts.length > 0 && (
+              <nav aria-label="Related articles" className="mt-8">
+                <h2 className="font-heading h-card text-primary mb-4">Related Reading</h2>
+                <ul className="space-y-3">
+                  {relatedPosts.map((related) => (
+                    <li key={related.slug}>
+                      <Link to={`/blog/${related.slug}`} className="text-secondary underline underline-offset-4 hover:text-primary">
+                        {related.title}
+                      </Link>
+                    </li>
+                  ))}
+                </ul>
+              </nav>
+            )}
             <div className="mt-12 pt-8 border-t border-border">
               <Button
                 variant="outline"
diff --git a/src/components/BrandPromiseSection.tsx b/src/components/BrandPromiseSection.tsx
index f6e88a8..45ca7ac 100644
--- a/src/components/BrandPromiseSection.tsx
+++ b/src/components/BrandPromiseSection.tsx
@@ -9,27 +9,27 @@ const BrandPromiseSection = () => {
   const promises = [
     {
       icon: Shield,
-      title: "Clarity Over Pressure",
+      title: "Answers to Your Questions",
       description:
-        "I explain the reasoning, tradeoffs, and fine print in plain language so you can make decisions with confidence.",
+        "We talk through costs, choices, and contract terms in plain language.",
     },
     {
       icon: ListChecks,
       title: "Clear, Organized Process",
       description:
-        "Clear timelines, practical checklists, and defined next steps keep the process moving without unnecessary surprises.",
+        "Timelines and checklists help us keep track of deadlines and next steps.",
     },
     {
       icon: MapPin,
       title: "Local Insight",
       description:
-        "More than 45 years in Snohomish County gives me context that an online report cannot provide.",
+        "My local experience helps put commute routes, services, and housing choices in context.",
     },
     {
       icon: MessageCircle,
-      title: "Honest, Steady Communication",
+      title: "Communication Along the Way",
       description:
-        "You will know what is happening, what comes next, and what I honestly recommend for your situation.",
+        "We discuss updates, questions, and changes as your move takes shape.",
     },
   ];
 
@@ -45,7 +45,7 @@ const BrandPromiseSection = () => {
         >
           <h2 className="font-heading text-primary">
             <span className="eyebrow">Our working relationship...</span>
-            <span className="h-section mx-auto block max-w-2xl text-secondary">What Working With Me Actually Looks Like</span>
+            <span className="h-section mx-auto block max-w-2xl text-secondary">What You Can Expect</span>
           </h2>
         </motion.div>
 
diff --git a/src/components/HeroSection.tsx b/src/components/HeroSection.tsx
index 0160bf8..e7c8a57 100644
--- a/src/components/HeroSection.tsx
+++ b/src/components/HeroSection.tsx
@@ -36,8 +36,7 @@ const HeroSection = () => {
 
 
             <p className="copy-lead mx-auto mb-6 max-w-[54ch] text-primary/90">
-              I grew up here, I have owned homes here, and I have spent 45+ years watching this
-              area grow and change. You get honest guidance, a clear, organized plan, and someone who puts your best interests first.
+              I grew up in Marysville, lived and raised my family in Lake Stevens, and now call Everett home. After more than 45 years in Snohomish County, I know how much the right home and location can matter to everyday life. I’m here to help you understand your options and make a plan that works for you.
             </p>
 
             <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
diff --git a/src/components/ServicesSection.tsx b/src/components/ServicesSection.tsx
index bd74dc9..d68a014 100644
--- a/src/components/ServicesSection.tsx
+++ b/src/components/ServicesSection.tsx
@@ -44,7 +44,7 @@ const services: Service[] = [
     title: "Military & Veterans",
     titleSub: "PCS & Relocation",
     description:
-      "Moving for orders, work, or family, to or from Snohomish County? I coordinate around your report date or move date, share honest neighborhood insight, and keep things moving when you cannot be here in person.",
+      "Relocating for work or family, or moving on military PCS orders? We start with your move date, budget, and housing needs. PCS planning also considers report dates and military timelines. This pathway covers moves to or from Snohomish County.",
     cta: "Military PCS & Relocation",
     href: "/services/relocation",
   },
diff --git a/src/data/blogPosts.ts b/src/data/blogPosts.ts
index e73eecc..1f9867d 100644
--- a/src/data/blogPosts.ts
+++ b/src/data/blogPosts.ts
@@ -24,7 +24,7 @@ export const mainBlogPosts: BlogPost[] = [
     metaDescription: "Should you sell your Snohomish County home before buying the next one? Compare timing, financing, contingencies, and temporary-housing options.",
     image: "/blog/sell-first-or-buy-first.webp",
     imageAlt: "Homeowner comparing two Pacific Northwest homes while planning the order of a sale and purchase",
-    content: "This is one of the first questions to answer when you already own a home and are planning your next move. There is no single right order. The better choice depends on your finances, your tolerance for uncertainty, the kind of home you need next, and what is happening in the specific neighborhoods involved.\n\nThe goal is not to find a perfectly risk-free plan. It is to understand where the risk sits in each option and choose the version you can manage comfortably.\n\n**Selling first: more certainty about your numbers**\n\nWhen you sell first, you know how much equity is available for the next purchase. That can make the new-home budget clearer and may allow you to write an offer without a home-sale contingency.\n\nThe trade-off is housing between transactions. If the right replacement home is not available immediately, you may need temporary housing, storage, a rent-back agreement, or more than one move.\n\nSelling first may make sense when:\n\n- You need the proceeds from your current home for the next down payment.\n- Carrying two housing payments would create too much pressure.\n- Your next-home search can be flexible about timing or location.\n- You would rather know the final sale amount before committing to another purchase.\n\nBefore choosing this route, price temporary housing, storage, moving, and pet accommodations. A plan that looks simple on paper can feel different once those costs and logistics are included.\n\n**Buying first: more control over where you land**\n\nBuying first gives you time to secure the next home before preparing your current one for sale. This can be especially helpful when downsizing, coordinating family needs, or looking for a property type that rarely becomes available.\n\nThe trade-off is financial exposure. You may temporarily carry two homes, and the sale price or timing of your current home is not guaranteed.\n\nBuying first may make sense when:\n\n- Your lender confirms that you can qualify while still owning your current home.\n- You have enough reserves for overlapping payments and moving expenses.\n- The next home has specific requirements that may take time to find.\n- Moving once matters more to you than having complete certainty about the sale first.\n\nAsk your lender to show you the monthly-payment and cash-reserve picture under a slower-than-expected sale, not only the most optimistic scenario.\n\n**Can I make an offer contingent on selling my home?**\n\nA home-sale contingency can connect the transactions, but its strength depends on the property, the seller's priorities, and current competition. Some sellers will consider it, especially if your home is already listed or under contract. Others may prefer an offer without that condition.\n\nAnother possibility is a longer closing, a negotiated possession period, or a short rent-back after your sale. These arrangements are not automatic, and the terms should be written clearly in the contract.\n\n**Questions to answer before deciding**\n\n- Do you need the sale proceeds to qualify or close?\n- Could you comfortably carry both homes if the first one takes longer to sell?\n- How specific are the location, size, accessibility, or school requirements for the next home?\n- Would temporary housing feel manageable or exhausting?\n- Does your current home need work before it can be listed?\n- What would you do if the ideal next home appeared earlier, or later, than expected?\n\n**Build the plan backward from your real deadline**\n\nStart with the date by which you actually need to be settled. Then account for preparation, listing, offer review, inspection, appraisal, closing, moving, and a reasonable cushion for delays.\n\nI prefer to compare at least two workable timelines before a homeowner commits to either route. Once the financing limits and practical constraints are visible, the decision usually becomes much less abstract.\n\nA local market analysis and a lender's written financing options are the two most useful starting points. They replace guesswork with real numbers while there is still time to adjust the plan."
+    content: "This is one of the first questions to answer when you already own a home and are planning your next move. There is no single right order. The better choice depends on your finances, your tolerance for uncertainty, the kind of home you need next, and what is happening in the specific neighborhoods involved.\n\nThe goal is not to find a perfectly risk-free plan. It is to understand where the risk sits in each option and choose the version you can manage comfortably.\n\n**Selling first: more certainty about your numbers**\n\nWhen you sell first, you know how much equity is available for the next purchase. That can make the new-home budget clearer and may allow you to write an offer without a home-sale contingency.\n\nThe trade-off is housing between transactions. If the right replacement home is not available immediately, you may need temporary housing, storage, a rent-back agreement, or more than one move.\n\nSelling first may make sense when:\n\n- You need the proceeds from your current home for the next down payment.\n- Carrying two housing payments may not fit your budget.\n- Your next-home search can be flexible about timing or location.\n- You would rather know the final sale amount before committing to another purchase.\n\nBefore choosing this route, price temporary housing, storage, moving, and pet accommodations. A plan that looks simple on paper can feel different once those costs and logistics are included.\n\n**Buying first: more control over where you land**\n\nBuying first gives you time to secure the next home before preparing your current one for sale. This can be especially helpful when downsizing, coordinating family needs, or looking for a property type that rarely becomes available.\n\nThe trade-off is financial exposure. You may temporarily carry two homes, and the sale price or timing of your current home is not guaranteed.\n\nBuying first may make sense when:\n\n- Your lender confirms that you can qualify while still owning your current home.\n- You have enough reserves for overlapping payments and moving expenses.\n- The next home has specific requirements that may take time to find.\n- Moving once matters more to you than having complete certainty about the sale first.\n\nAsk your lender to show you the monthly-payment and cash-reserve picture under a slower-than-expected sale, not only the most optimistic scenario.\n\n**Can I make an offer contingent on selling my home?**\n\nA home-sale contingency can connect the transactions, but its strength depends on the property, the seller's priorities, and current competition. Some sellers will consider it, especially if your home is already listed or under contract. Others may prefer an offer without that condition.\n\nAnother possibility is a longer closing, a negotiated possession period, or a short rent-back after your sale. These arrangements are not automatic, and the terms should be written clearly in the contract.\n\n**Questions to answer before deciding**\n\n- Do you need the sale proceeds to qualify or close?\n- Could you comfortably carry both homes if the first one takes longer to sell?\n- How specific are the location, size, accessibility, or school requirements for the next home?\n- Would temporary housing feel manageable or exhausting?\n- Does your current home need work before it can be listed?\n- What would you do if the ideal next home appeared earlier, or later, than expected?\n\n**Build the plan backward from your real deadline**\n\nStart with your target move-in date. Then account for preparation, listing, offer review, inspection, appraisal, closing, moving, and a reasonable cushion for delays.\n\nI prefer to compare at least two workable timelines before a homeowner commits to either route. Once the financing limits and practical constraints are visible, the decision usually becomes much less abstract.\n\nA local market analysis and a lender's written financing options are the two most useful starting points. They replace guesswork with real numbers while there is still time to adjust the plan."
   },
   {
     id: "main-2",
@@ -36,7 +36,7 @@ export const mainBlogPosts: BlogPost[] = [
     metaDescription: "A practical Snohomish County downsizing guide covering timing, belongings, home preparation, housing choices, and family coordination.",
     image: "/blog/downsizing-guide-inclusive.webp",
     imageAlt: "Black older homeowner and her adult daughter calmly sorting meaningful belongings during a downsizing move",
-    content: "Downsizing is often described as moving into a smaller home, but square footage is only one part of it. You may also be sorting through years of belongings, deciding what the next stage should look like, coordinating with family, and preparing a home that carries a great deal of history.\n\nTrying to solve every part at once is usually what makes the process feel impossible. A better approach is to separate the decisions and work through them in a sensible order.\n\n**Start with the life you want, not the things you own**\n\nBefore choosing a neighborhood or floor plan, think about what you want everyday life to require from you.\n\n- How much exterior maintenance do you want?\n- Are stairs comfortable now, and are they likely to remain so?\n- Do you want to be closer to family, medical care, shopping, or community activities?\n- Would a condominium or homeowners association simplify life, or would its rules and monthly dues feel restrictive?\n- Do you need space for guests, hobbies, pets, or a caregiver?\n- Is staying in the same community important?\n\nA smaller home is not automatically less expensive or easier. Compare property taxes, insurance, utilities, association dues, maintenance, and possible renovation costs, not just the purchase price.\n\n**Give yourself more time than you think you need**\n\nIf possible, begin planning months before you expect to move. Early planning creates room for thoughtful decisions and prevents every weekend from becoming an emergency sorting session.\n\nChoose one small, low-emotion area first: a linen closet, utility drawer, or pantry. Do not begin with family photographs or sentimental keepsakes. The purpose of the first few sessions is to establish a routine, not prove how much you can discard.\n\nUse clear categories:\n\n- Keep and move\n- Give to family or friends\n- Donate\n- Sell\n- Recycle or dispose\n- Decide later\n\nKeep the “decide later” category limited to one defined area. Otherwise it quietly becomes the whole house.\n\n**Measure the next home before choosing what goes**\n\nA floor plan and room measurements make decisions concrete. If the next dining area seats four, you can evaluate the current table against a real space instead of an imagined future.\n\nPhotographs can preserve the story of meaningful belongings that will not make the move. For family pieces, ask relatives early and give them a deadline. It is easier to coordinate pickups before the listing and moving schedule becomes busy.\n\n**Decide how much preparation the current home needs**\n\nNot every home needs a major renovation before selling. The useful question is which work improves marketability, reduces buyer concern, or prevents the home from showing poorly compared with similar properties.\n\nCommon priorities include:\n\n- Correcting active leaks, safety concerns, or obvious deferred maintenance\n- Removing excess furniture and personal items\n- Improving lighting and basic cleanliness\n- Touching up visibly damaged paint or trim\n- Making the entry and exterior feel cared for\n\nLarge projects deserve a cost-versus-benefit discussion. Spending more does not guarantee recovering more, and construction can delay the move.\n\n**Connect the sale plan to the next-home plan**\n\nThe timing question is often the most stressful part. You may sell first, buy first, make a contingent offer, arrange temporary housing, or negotiate possession after closing. Each path changes the financial requirements and the amount of moving involved.\n\nBefore choosing, discuss the options with both your lender and your real-estate agent. Ask what happens if the sale or purchase takes longer than expected. The backup plan matters just as much as the ideal plan.\n\n**When family is involved**\n\nDownsizing decisions still belong to the homeowner. Family members can be helpful by taking on defined jobs, researching movers, arranging donations, scanning photographs, or managing a shared schedule, without turning the process into a debate over every possession.\n\nIf you are helping a parent from out of the area, establish one point person and one shared list. Too many separate conversations can create confusion and make the homeowner feel as though decisions are being made around them.\n\n**A calmer order of operations**\n\n- Clarify the desired lifestyle and housing requirements.\n- Review finances and likely sale proceeds.\n- Identify possible next-home areas and property types.\n- Begin sorting in small, scheduled sessions.\n- Evaluate necessary home preparation.\n- Choose the sale-and-purchase timeline.\n- Line up moving, donation, storage, and support services.\n- Leave room in the schedule for the unexpected.\n\nDownsizing can carry relief, grief, excitement, and uncertainty at the same time. That does not mean the plan is going badly. It means the move represents a real transition. A clear sequence, realistic timeline, and permission to make decisions gradually can keep that transition manageable."
+    content: "Downsizing is often described as moving into a smaller home, but square footage is only one part of it. You may also be sorting through years of belongings, deciding what the next stage should look like, coordinating with family, and preparing a home that carries a great deal of history.\n\nTrying to solve every part at once is usually what makes the process feel impossible. A better approach is to separate the decisions and work through them in a sensible order.\n\n**Start with the life you want, not the things you own**\n\nBefore choosing a neighborhood or floor plan, think about what you want everyday life to require from you.\n\n- How much exterior maintenance do you want?\n- Are stairs comfortable now, and are they likely to remain so?\n- Do you want to be closer to family, medical care, shopping, or community activities?\n- Would a condominium or homeowners association simplify life, or would its rules and monthly dues feel restrictive?\n- Do you need space for guests, hobbies, pets, or a caregiver?\n- Is staying in the same community important?\n\nA smaller home is not automatically less expensive or easier. Compare property taxes, insurance, utilities, association dues, maintenance, and possible renovation costs, not just the purchase price.\n\n**Give yourself more time than you think you need**\n\nIf possible, begin planning months before you expect to move. Early planning leaves room to sort gradually and adjust the schedule as you go.\n\nChoose one small, low-emotion area first: a linen closet, utility drawer, or pantry. Do not begin with family photographs or sentimental keepsakes. The purpose of the first few sessions is to establish a routine, not prove how much you can discard.\n\nUse clear categories:\n\n- Keep and move\n- Give to family or friends\n- Donate\n- Sell\n- Recycle or dispose\n- Decide later\n\nKeep the “decide later” category limited to one defined area. Otherwise it quietly becomes the whole house.\n\n**Measure the next home before choosing what goes**\n\nA floor plan and room measurements make decisions concrete. If the next dining area seats four, you can evaluate the current table against a real space instead of an imagined future.\n\nPhotographs can preserve the story of meaningful belongings that will not make the move. For family pieces, ask relatives early and give them a deadline. It is easier to coordinate pickups before the listing and moving schedule becomes busy.\n\n**Decide how much preparation the current home needs**\n\nNot every home needs a major renovation before selling. The useful question is which work improves marketability, reduces buyer concern, or prevents the home from showing poorly compared with similar properties.\n\nCommon priorities include:\n\n- Correcting active leaks, safety concerns, or obvious deferred maintenance\n- Removing excess furniture and personal items\n- Improving lighting and basic cleanliness\n- Touching up visibly damaged paint or trim\n- Making the entry and exterior feel cared for\n\nLarge projects deserve a cost-versus-benefit discussion. Spending more does not guarantee recovering more, and construction can delay the move.\n\n**Connect the sale plan to the next-home plan**\n\nThe timing question is often the most stressful part. You may sell first, buy first, make a contingent offer, arrange temporary housing, or negotiate possession after closing. Each path changes the financial requirements and the amount of moving involved.\n\nBefore choosing, discuss the options with both your lender and your real-estate agent. Ask what happens if the sale or purchase takes longer than expected. The backup plan matters just as much as the ideal plan.\n\n**When family is involved**\n\nDownsizing decisions still belong to the homeowner. Family members can be helpful by taking on defined jobs, researching movers, arranging donations, scanning photographs, or managing a shared schedule, without turning the process into a debate over every possession.\n\nIf you are helping a parent from out of the area, establish one point person and one shared list. Too many separate conversations can create confusion and make the homeowner feel as though decisions are being made around them.\n\n**A step-by-step order of operations**\n\n- Clarify the desired lifestyle and housing requirements.\n- Review finances and likely sale proceeds.\n- Identify possible next-home areas and property types.\n- Begin sorting in small, scheduled sessions.\n- Evaluate necessary home preparation.\n- Choose the sale-and-purchase timeline.\n- Line up moving, donation, storage, and support services.\n- Leave room in the schedule for the unexpected.\n\nDownsizing can carry relief, grief, excitement, and uncertainty at the same time. That does not mean the plan is going badly. It means the move represents a real transition. A clear sequence, realistic timeline, and permission to make decisions gradually can keep that transition manageable."
   },
   {
     id: "main-3",
@@ -48,7 +48,7 @@ export const mainBlogPosts: BlogPost[] = [
     metaDescription: "Relocating to Snohomish County or PCSing to Naval Station Everett? Compare commutes, communities, school boundaries, property systems, and remote-buying options.",
     image: "/blog/relocating-to-snohomish-county-inclusive.webp",
     imageAlt: "Interracial gay couple reviewing a map while considering a move to a Snohomish County neighborhood",
-    content: "Relocating from outside Snohomish County can be confusing because cities that look close on a map can produce very different daily routines. Traffic corridors, school boundaries, ferry and rail activity, property utilities, and neighborhood layout can matter as much as mileage.\n\nFor military families PCSing to Naval Station Everett, the timeline may also be compressed. The first goal should be to narrow the search thoughtfully, not to choose a city based on a few photographs or someone else's favorite neighborhood.\n\n**Begin with the commute you can realistically live with**\n\nA commute should be considered at the times you will actually travel. Interstate 5, Highway 9, US 2, and local bridge or trestle routes can change significantly by time and direction.\n\nFor Naval Station Everett, downtown Everett and nearby areas may offer a shorter drive, while Marysville, Lake Stevens, Snohomish, Mukilteo, Arlington, Stanwood, and Bothell each involve different trade-offs. A home that is only a few additional miles away can still add meaningful travel time depending on the route.\n\nIf possible, test the route using live traffic tools during your expected commute window. Also consider shift changes, school drop-off, ferry traffic, and whether one household member will be traveling in a different direction.\n\n**Compare communities by daily life, not rankings**\n\nInstead of asking which city is “best,” ask which location works for your routines.\n\nEverett offers a wider mix of older neighborhoods, more urban services, waterfront access in some areas, and proximity to the naval station and Paine Field. Mukilteo has a different coastal and residential character, along with ferry and airport-related considerations. Marysville includes established neighborhoods, newer developments, and varied commuting routes. Lake Stevens centers much of its identity around the lake and surrounding residential areas. Snohomish combines a historic downtown with suburban and rural properties. Arlington and Stanwood can offer more space in some locations, with a longer commute for many destinations. Bothell connects Snohomish County with Eastside employment centers but can come with its own traffic and pricing pressures.\n\nThese are broad descriptions, not neighborhood guarantees. The fit changes block by block and property by property.\n\n**Verify school boundaries for the exact address**\n\nSchool-district boundaries do not necessarily follow city limits or mailing addresses. Parts of southeast Lake Stevens fall within the Snohomish School District. Some Marysville addresses, including areas around Whiskey Ridge and Soper Hill, can fall within the Lake Stevens School District.\n\nIf a particular school or district matters, verify the current assignment directly with the district before making a decision. Boundaries and enrollment policies can change, and a listing's marketing information should not be the only source.\n\n**Understand the property systems common outside dense city areas**\n\nSome Snohomish County homes use private wells, septic systems, propane, shared roads, or private road-maintenance agreements. Rural and semi-rural properties may also involve wetlands, flood areas, critical-area restrictions, or outbuildings with incomplete records.\n\nThese features are not automatically problems, but they require different questions and inspections. Before making an offer, understand:\n\n- Water source and available records\n- Septic type, capacity, maintenance, and inspection requirements\n- Road access and maintenance responsibilities\n- Flood-zone and insurance considerations\n- Permit history for additions and outbuildings\n- Internet and cellular availability\n- Tree, drainage, slope, and critical-area concerns\n\n**Buying when you cannot be here for every showing**\n\nRemote buying can work, but the process needs to provide more information than a polished video tour. A useful remote showing should examine the approach to the property, neighboring uses, street noise, room scale, natural light, storage, visible condition, and anything that feels different from the listing photographs.\n\nFor serious candidates, I recommend a live walkthrough with time for questions, followed by clear notes about what was observed and what still requires professional inspection. An agent's walkthrough is not a substitute for a home inspection or specialist evaluation.\n\n**PCS and VA-financing considerations**\n\nIf you plan to use VA financing, involve a VA-experienced lender early. VA benefit eligibility is confirmed through a Certificate of Eligibility. The lender evaluates credit, income, and other underwriting requirements and explains loan terms and documentation. A VA appraisal evaluates value and whether the property meets applicable VA minimum property requirements; it is not a home inspection. Condition concerns can affect timelines, so it helps to identify obvious issues before an offer is written.\n\nBuild the plan around reporting dates, travel, household-goods timing, temporary lodging, and the possibility that closing may not happen on the first projected date. A few days of cushion can be more valuable than a schedule that only works if everything goes perfectly.\n\n**A practical way to narrow your search**\n\n- Establish the comfortable monthly payment with your lender.\n- Identify work locations and realistic commute windows.\n- List non-negotiable property and accessibility needs.\n- Verify school requirements by exact address.\n- Decide how much maintenance and property complexity you want.\n- Compare three or four areas using the same criteria.\n- Use remote tours to eliminate properties, not to talk yourself into one.\n- Keep a temporary-housing option available when the timeline is tight.\n\nRelocation becomes more manageable when the search is based on your actual week: where you work, how you travel, what you need at home, and which trade-offs you are willing to make."
+    content: "Relocating from outside Snohomish County can be confusing because cities that look close on a map can produce very different daily routines. Traffic corridors, school boundaries, ferry and rail activity, property utilities, and neighborhood layout can matter as much as mileage.\n\nFor military families PCSing to Naval Station Everett, the timeline may also be compressed. The first goal should be to narrow the search thoughtfully, not to choose a city based on a few photographs or someone else's favorite neighborhood.\n\n**Begin with the commute you can realistically live with**\n\nConsider a commute at the times you expect to travel. Interstate 5, Highway 9, US 2, and local bridge or trestle routes can change significantly by time and direction.\n\nFor Naval Station Everett, downtown Everett and nearby areas may offer a shorter drive, while Marysville, Lake Stevens, Snohomish, Mukilteo, Arlington, Stanwood, and Bothell each involve different trade-offs. A home that is only a few additional miles away can still add meaningful travel time depending on the route.\n\nIf possible, test the route using live traffic tools during your expected commute window. Also consider shift changes, school drop-off, ferry traffic, and whether one household member will be traveling in a different direction.\n\n**Compare communities by daily life, not rankings**\n\nInstead of asking which city is “best,” ask which location works for your routines.\n\nEverett offers a wider mix of older neighborhoods, more urban services, waterfront access in some areas, and proximity to the naval station and Paine Field. Mukilteo has a different coastal and residential character, along with ferry and airport-related considerations. Marysville includes established neighborhoods, newer developments, and varied commuting routes. Lake Stevens centers much of its identity around the lake and surrounding residential areas. Snohomish combines a historic downtown with suburban and rural properties. Arlington and Stanwood can offer more space in some locations, with a longer commute for many destinations. Bothell connects Snohomish County with Eastside employment centers but can come with its own traffic and pricing pressures.\n\nThese are broad descriptions, not neighborhood guarantees. The fit changes block by block and property by property.\n\n**Verify school boundaries for the exact address**\n\nSchool-district boundaries do not necessarily follow city limits or mailing addresses. Parts of southeast Lake Stevens fall within the Snohomish School District. Some Marysville addresses, including areas around Whiskey Ridge and Soper Hill, can fall within the Lake Stevens School District.\n\nIf a particular school or district matters, verify the current assignment directly with the district before making a decision. Boundaries and enrollment policies can change, and a listing's marketing information should not be the only source.\n\n**Understand the property systems common outside dense city areas**\n\nSome Snohomish County homes use private wells, septic systems, propane, shared roads, or private road-maintenance agreements. Rural and semi-rural properties may also involve wetlands, flood areas, critical-area restrictions, or outbuildings with incomplete records.\n\nThese features are not automatically problems, but they require different questions and inspections. Before making an offer, understand:\n\n- Water source and available records\n- Septic type, capacity, maintenance, and inspection requirements\n- Road access and maintenance responsibilities\n- Flood-zone and insurance considerations\n- Permit history for additions and outbuildings\n- Internet and cellular availability\n- Tree, drainage, slope, and critical-area concerns\n\n**Buying when you cannot be here for every showing**\n\nRemote buying can work, but the process needs to provide more information than a polished video tour. A useful remote showing should examine the approach to the property, neighboring uses, street noise, room scale, natural light, storage, visible condition, and anything that feels different from the listing photographs.\n\nFor serious candidates, I recommend a live walkthrough with time for questions, followed by clear notes about what was observed and what still requires professional inspection. An agent's walkthrough is not a substitute for a home inspection or specialist evaluation.\n\n**PCS and VA-financing considerations**\n\nIf you plan to use VA financing, involve a VA-experienced lender early. VA benefit eligibility is confirmed through a Certificate of Eligibility. The lender evaluates credit, income, and other underwriting requirements and explains loan terms and documentation. A VA appraisal evaluates value and whether the property meets applicable VA minimum property requirements; it is not a home inspection. Condition concerns can affect timelines, so it helps to identify obvious issues before an offer is written.\n\nBuild the plan around reporting dates, travel, household-goods timing, temporary lodging, and the possibility that closing may not happen on the first projected date. A few days of cushion can be more valuable than a schedule that only works if everything goes perfectly.\n\n**A practical way to narrow your search**\n\n- Establish the comfortable monthly payment with your lender.\n- Identify work locations and realistic commute windows.\n- List non-negotiable property and accessibility needs.\n- Verify school requirements by exact address.\n- Decide how much maintenance and property complexity you want.\n- Compare three or four areas using the same criteria.\n- Use remote tours to eliminate properties, not to talk yourself into one.\n- Keep a temporary-housing option available when the timeline is tight.\n\nRelocation becomes more manageable when the search is based on your actual week: where you work, how you travel, what you need at home, and which trade-offs you are willing to make."
   },
   {
     id: "main-4",
@@ -77,7 +77,7 @@ export const searchInsightsPosts: BlogPost[] = [
     metaDescription: "Planning a PCS to or from Naval Station Everett? Learn how to coordinate housing, VA financing, remote showings, commute choices, inspections, and timing.",
     image: "/blog/pcs-military-relocation-inclusive.webp",
     imageAlt: "Interracial lesbian military couple planning a PCS move near Naval Station Everett",
-    content: "A PCS move rarely waits for the housing market to cooperate. Orders, report dates, travel, household goods, temporary lodging, financing, and a home sale or purchase may all be moving on different schedules.\n\nThe most useful first step is not choosing a neighborhood. It is building a timeline that separates confirmed information from assumptions and leaves room for changes.\n\n**Start with the dates that control the move**\n\nWrite down every date you know, including the report date, projected departure, available leave, household-goods pickup, temporary-lodging limits, school timing, lease expiration, and any home-sale requirements.\n\nThen mark which dates are firm and which are estimates. A closing date is not guaranteed until the transaction is complete, so avoid making the entire move dependent on one perfect handoff.\n\nUseful backup questions include:\n\n- Where will we stay if closing is delayed?\n- Can our belongings go into temporary storage?\n- Who can attend an inspection if we are traveling?\n- What happens if one household member arrives before the rest?\n- How long can we comfortably carry rent and a mortgage, or two housing payments?\n\n**Choose an area by commute and daily routine**\n\nNaval Station Everett is near downtown Everett, but a reasonable commute can extend into several communities. Everett, Marysville, Lake Stevens, Mukilteo, Snohomish, Arlington, Stanwood, and parts of Bothell offer different combinations of commute time, housing style, services, school assignments, and price.\n\nTest routes during the time you expect to travel. Interstate 5, Highway 9, US 2, and local connections can change considerably by hour and direction. A route that looks short by mileage may not feel short during a shift change or weekday commute.\n\nIf another household member works elsewhere, compare both commutes. The most convenient location for the base may create a difficult daily trip in another direction.\n\n**Decide whether renting first or buying now fits the assignment**\n\nBuying immediately may make sense when the household expects to remain in the area long enough, understands the monthly cost, and can make a careful decision without rushing. Renting first can provide time to learn the area and reduce pressure, but it may involve an additional move and possible lease constraints.\n\nConsider:\n\n- Expected time in the area\n- Cash available after closing\n- Comfort with maintenance and repairs\n- Likelihood of another move\n- Current rental availability\n- Pet and household requirements\n- Whether the purchase would still work if future plans change\n\nNo general rule can decide this for every military household. The choice needs to work at today's payment and under a realistic PCS timeline.\n\n**Using VA financing**\n\nTalk with a VA-experienced lender before touring seriously. VA benefit eligibility is confirmed through a Certificate of Eligibility. The lender evaluates credit, income, and other underwriting requirements and explains loan terms and documentation. A VA appraisal evaluates value and whether the property meets applicable VA minimum property requirements; it is not a home inspection.\n\nAsk the lender about:\n\n- The complete estimated monthly payment\n- Cash needed for closing and reserves\n- Rate-lock timing\n- Appraisal procedures\n- Property-condition concerns\n- Seller-paid costs and lender limitations\n- What could delay final approval\n\nAn agent can help identify visible condition concerns and coordinate the transaction, but cannot guarantee that a property will satisfy appraisal or lending requirements.\n\n**When you cannot attend showings**\n\nA remote showing should be more than a quick video of attractive rooms. Ask to see the street, neighboring properties, exterior condition, storage, mechanical areas, natural light, room scale, traffic or aircraft noise, and anything that differs from the listing photographs.\n\nFor a serious property, use a live walkthrough so you can ask questions in real time. Follow it with a professional inspection and any specialists appropriate to the property. A video tour is useful information, but it is not an inspection.\n\n**PCSing out and selling from a distance**\n\nIf you are leaving before the home is sold, decide who can access the property and approve work. Establish how repairs, cleaning, landscaping, photography, showings, and urgent problems will be handled.\n\nBefore departure:\n\n- Remove documents, medications, valuables, and military items.\n- Arrange insurance coverage appropriate for the home's occupancy.\n- Confirm utility and security plans.\n- Choose local contacts for urgent access.\n- Establish written limits for repair decisions.\n- Plan how offers and closing documents will be reviewed remotely.\n\n**Keep one shared plan**\n\nUse one calendar and one running list for deadlines, contacts, documents, and decisions. Too many separate text chains make it easier to miss something.\n\nA workable PCS plan does not assume that every date will align perfectly. It identifies the housing priorities, financing limits, commute trade-offs, and backup options early enough that a change does not become a crisis."
+    content: "A PCS move rarely waits for the housing market to cooperate. Orders, report dates, travel, household goods, temporary lodging, financing, and a home sale or purchase may all be moving on different schedules.\n\nThe most useful first step is not choosing a neighborhood. It is building a timeline that separates confirmed information from assumptions and leaves room for changes.\n\n**Start with the dates that control the move**\n\nWrite down every date you know, including the report date, projected departure, available leave, household-goods pickup, temporary-lodging limits, school timing, lease expiration, and any home-sale requirements.\n\nThen mark which dates are firm and which are estimates. A closing date is not guaranteed until the transaction is complete, so avoid making the entire move dependent on one perfect handoff.\n\nUseful backup questions include:\n\n- Where will we stay if closing is delayed?\n- Can our belongings go into temporary storage?\n- Who can attend an inspection if we are traveling?\n- What happens if one household member arrives before the rest?\n- How long can we comfortably carry rent and a mortgage, or two housing payments?\n\n**Choose an area by commute and daily routine**\n\nNaval Station Everett is near downtown Everett, but a reasonable commute can extend into several communities. Everett, Marysville, Lake Stevens, Mukilteo, Snohomish, Arlington, Stanwood, and parts of Bothell offer different combinations of commute time, housing style, services, school assignments, and price.\n\nTest routes during the time you expect to travel. Interstate 5, Highway 9, US 2, and local connections can change considerably by hour and direction. A route that looks short by mileage may not feel short during a shift change or weekday commute.\n\nIf another household member works elsewhere, compare both commutes. The most convenient location for the base may create a difficult daily trip in another direction.\n\n**Decide whether renting first or buying now fits the assignment**\n\nBuying immediately may make sense when the household expects to remain in the area long enough, understands the monthly cost, and has time to evaluate the home. Renting first can provide time to learn the area, but it may involve an additional move and possible lease constraints.\n\nConsider:\n\n- Expected time in the area\n- Cash available after closing\n- Comfort with maintenance and repairs\n- Likelihood of another move\n- Current rental availability\n- Pet and household requirements\n- Whether the purchase would still work if future plans change\n\nNo general rule can decide this for every military household. The choice needs to work at today's payment and under a realistic PCS timeline.\n\n**Using VA financing**\n\nTalk with a VA-experienced lender before touring seriously. VA benefit eligibility is confirmed through a Certificate of Eligibility. The lender evaluates credit, income, and other underwriting requirements and explains loan terms and documentation. A VA appraisal evaluates value and whether the property meets applicable VA minimum property requirements; it is not a home inspection.\n\nAsk the lender about:\n\n- The complete estimated monthly payment\n- Cash needed for closing and reserves\n- Rate-lock timing\n- Appraisal procedures\n- Property-condition concerns\n- Seller-paid costs and lender limitations\n- What could delay final approval\n\nAn agent can help identify visible condition concerns and coordinate the transaction, but cannot guarantee that a property will satisfy appraisal or lending requirements.\n\n**When you cannot attend showings**\n\nA remote showing should be more than a quick video of attractive rooms. Ask to see the street, neighboring properties, exterior condition, storage, mechanical areas, natural light, room scale, traffic or aircraft noise, and anything that differs from the listing photographs.\n\nFor a serious property, use a live walkthrough so you can ask questions in real time. Follow it with a professional inspection and any specialists appropriate to the property. A video tour is useful information, but it is not an inspection.\n\n**PCSing out and selling from a distance**\n\nIf you are leaving before the home is sold, decide who can access the property and approve work. Establish how repairs, cleaning, landscaping, photography, showings, and urgent problems will be handled.\n\nBefore departure:\n\n- Remove documents, medications, valuables, and military items.\n- Arrange insurance coverage appropriate for the home's occupancy.\n- Confirm utility and security plans.\n- Choose local contacts for urgent access.\n- Establish written limits for repair decisions.\n- Plan how offers and closing documents will be reviewed remotely.\n\n**Keep one shared plan**\n\nUse one calendar and one running list for deadlines, contacts, documents, and decisions. Too many separate text chains make it easier to miss something.\n\nA workable PCS plan does not assume that every date will align perfectly. It identifies the housing priorities, financing limits, commute trade-offs, and backup options early enough that a change does not become a crisis."
   },
   // R02, Downsizing (Sell + Buy)
   {
@@ -90,7 +90,7 @@ export const searchInsightsPosts: BlogPost[] = [
     metaDescription: "Learn how to coordinate selling and buying during a Snohomish County downsizing move, including financing, contingencies, preparation, storage, and backup plans.",
     image: "/blog/downsizing-sell-buy-snohomish-county.webp",
     imageAlt: "Older couple calmly coordinating belongings and plans for a downsizing move",
-    content: "Downsizing often involves two real-estate transactions, a household of belongings, and a personal transition at the same time. The challenge is not simply selling one home and buying another. It is deciding which step should happen first and what you will do if the two schedules do not line up.\n\nA calmer plan starts by identifying which part of the move has the least flexibility.\n\n**Define the next home before preparing the current one**\n\nYou do not need to select a specific property first, but you should understand the kind of home that would actually improve daily life.\n\nConsider:\n\n- One level living or acceptable stair configuration\n- Exterior maintenance\n- Parking and storage\n- Space for guests, hobbies, or pets\n- Distance from family, health care, shopping, and activities\n- Condominium or homeowners association dues and rules\n- Accessibility needs now and later\n- Whether you want to remain in the same community\n\nResearch the availability and cost of that property type. If suitable homes appear rarely, buying first may deserve more consideration. If there are several workable choices, selling first may be easier to manage.\n\n**Know the sale numbers before relying on them**\n\nA market analysis can estimate a likely price range and show how similar homes are competing. It should also identify preparation that may affect marketability.\n\nFrom the estimated sale proceeds, account for mortgage payoff, selling expenses, moving, possible repairs, storage, temporary housing, and the amount you want to retain after the move. Do not plan the next purchase around the highest possible sale price.\n\n**Compare the main timing options**\n\nSelling first provides clearer information about available proceeds and may allow a stronger purchase offer. The trade-off is that you may need temporary housing, storage, or a second move.\n\nBuying first gives you control over the destination and time to move gradually. The trade-off is qualifying for and possibly carrying two homes until the first one sells.\n\nA contingent purchase can connect the transactions, but the seller of the next home must be willing to accept those terms. The strength of that offer depends on the property and current competition.\n\nA negotiated possession period or rent-back may give you time to remain in the current home after closing. It must be agreed upon in writing and should address dates, cost, insurance, damage, and access.\n\n**Ask the lender to model more than one scenario**\n\nIf financing is involved, ask for written estimates that compare selling first, buying first, and using available bridge or equity-based options if appropriate. Products and qualification rules vary, so the lender must explain the actual terms and risk.\n\nReview:\n\n- Monthly payments during any overlap\n- Cash needed before sale proceeds are available\n- Reserve requirements\n- Loan and closing costs\n- How long you could carry both properties\n- What happens if the current home sells below the estimate\n- Whether a home-sale contingency is necessary\n\nChoose a plan that remains manageable if the sale takes longer than hoped.\n\n**Prepare without trying to renovate everything**\n\nThe current home usually needs to feel clean, cared for, and easy for buyers to understand. It does not automatically need an expensive renovation.\n\nPrioritize active maintenance, safety concerns, excess belongings, lighting, cleanliness, and visible wear. Review larger projects individually. The potential benefit should justify the cost, delay, and disruption.\n\nBegin removing items before photography, but keep enough furniture for the home to function comfortably if you will still be living there.\n\n**Plan the belongings separately from the real estate**\n\nA sorting plan works better when it has its own timeline. Start with low-emotion areas, use clearly labeled categories, and decide where items will go before filling boxes.\n\nMeasure the next home's rooms, closets, parking, and storage whenever possible. This turns vague decisions into physical limits.\n\nArrange donation pickup, disposal, document shredding, movers, storage, and help from family before listing activity becomes demanding.\n\n**Create a backup plan you could actually use**\n\nThe backup plan may include a short-term rental, extended-stay lodging, family accommodations, portable storage, a traditional storage unit, pet arrangements, or a flexible moving company.\n\nPrice these options and check availability. A backup is only useful if it is realistic for your budget, health, pets, belongings, and daily routine.\n\n**Keep the decision-making structure simple**\n\nIf family members are involved, identify who makes final decisions and which tasks others can handle. Use one schedule and one point of contact for vendors.\n\nThe right order is the one that protects your finances and leaves you with a workable place to live. Once the next-home requirements, likely sale proceeds, lending choices, and backup housing are clear, the two transactions become a sequence you can manage instead of one large unknown."
+    content: "Downsizing often involves two real-estate transactions, a household of belongings, and a personal transition at the same time. The challenge is not simply selling one home and buying another. It is deciding which step should happen first and what you will do if the two schedules do not line up.\n\nStart by identifying which part of the move has the least flexibility.\n\n**Define the next home before preparing the current one**\n\nYou do not need to select a specific property first, but you should understand the kind of home that would improve daily life.\n\nConsider:\n\n- One level living or acceptable stair configuration\n- Exterior maintenance\n- Parking and storage\n- Space for guests, hobbies, or pets\n- Distance from family, health care, shopping, and activities\n- Condominium or homeowners association dues and rules\n- Accessibility needs now and later\n- Whether you want to remain in the same community\n\nResearch the availability and cost of that property type. If suitable homes appear rarely, buying first may deserve more consideration. If there are several workable choices, selling first may be easier to manage.\n\n**Know the sale numbers before relying on them**\n\nA market analysis can estimate a likely price range and show how similar homes are competing. It should also identify preparation that may affect marketability.\n\nFrom the estimated sale proceeds, account for mortgage payoff, selling expenses, moving, possible repairs, storage, temporary housing, and the amount you want to retain after the move. Do not plan the next purchase around the highest possible sale price.\n\n**Compare the main timing options**\n\nSelling first provides clearer information about available proceeds and may allow a stronger purchase offer. The trade-off is that you may need temporary housing, storage, or a second move.\n\nBuying first gives you control over the destination and time to move gradually. The trade-off is qualifying for and possibly carrying two homes until the first one sells.\n\nA contingent purchase can connect the transactions, but the seller of the next home must be willing to accept those terms. The strength of that offer depends on the property and current competition.\n\nA negotiated possession period or rent-back may give you time to remain in the current home after closing. It must be agreed upon in writing and should address dates, cost, insurance, damage, and access.\n\n**Ask the lender to model more than one scenario**\n\nIf financing is involved, ask for written estimates that compare selling first, buying first, and using available bridge or equity-based options if appropriate. Products and qualification rules vary, so the lender must explain the actual terms and risk.\n\nReview:\n\n- Monthly payments during any overlap\n- Cash needed before sale proceeds are available\n- Reserve requirements\n- Loan and closing costs\n- How long you could carry both properties\n- What happens if the current home sells below the estimate\n- Whether a home-sale contingency is necessary\n\nChoose a plan that remains manageable if the sale takes longer than hoped.\n\n**Prepare without trying to renovate everything**\n\nThe current home usually needs to feel clean, cared for, and easy for buyers to understand. It does not automatically need an expensive renovation.\n\nPrioritize active maintenance, safety concerns, excess belongings, lighting, cleanliness, and visible wear. Review larger projects individually. The potential benefit should justify the cost, delay, and disruption.\n\nBegin removing items before photography, but keep enough furniture for the home to function comfortably if you will still be living there.\n\n**Plan the belongings separately from the real estate**\n\nA sorting plan works better when it has its own timeline. Start with low-emotion areas, use clearly labeled categories, and decide where items will go before filling boxes.\n\nMeasure the next home's rooms, closets, parking, and storage whenever possible. This turns vague decisions into physical limits.\n\nArrange donation pickup, disposal, document shredding, movers, storage, and help from family before listing activity becomes demanding.\n\n**Create a backup plan you could use**\n\nThe backup plan may include a short-term rental, extended-stay lodging, family accommodations, portable storage, a traditional storage unit, pet arrangements, or a flexible moving company.\n\nPrice these options and check availability. A backup is only useful if it is realistic for your budget, health, pets, belongings, and daily routine.\n\n**Keep the decision-making structure simple**\n\nIf family members are involved, identify who makes final decisions and which tasks others can handle. Use one schedule and one point of contact for vendors.\n\nThe right order is the one that protects your finances and leaves you with a workable place to live. Once the next-home requirements, likely sale proceeds, lending choices, and backup housing are clear, the two transactions become a sequence you can manage instead of one large unknown."
   },
   // R03, First-Time Home Buyers
   {
@@ -103,7 +103,7 @@ export const searchInsightsPosts: BlogPost[] = [
     metaDescription: "A practical Snohomish County first-home guide covering preapproval, offers, inspections, costs, local property issues, and timelines.",
     image: "/blog/first-time-buyer-inspection-inclusive.webp",
     imageAlt: "Latina and Asian first-time buyers reviewing a home inspection with a local inspector",
-    content: "Buying a first home can feel like a series of unfamiliar deadlines. The process becomes easier when you understand what happens before touring, what changes after an offer is accepted, and which decisions deserve more time.\n\nThe goal is not to memorize every form. It is to know the purpose of each stage and when to ask questions.\n\n**Begin with a complete monthly budget**\n\nA lender's preapproval is an important starting point, but it is not the same as deciding what payment feels comfortable.\n\nAsk for an estimate that includes principal, interest, property taxes, homeowners insurance, mortgage insurance if applicable, association dues, and realistic closing costs. Keep money available after closing for moving, repairs, furnishings, and ordinary emergencies.\n\nAvoid making major credit changes during the transaction. Before opening or closing accounts, changing jobs, moving money, or financing a purchase, ask the lender how it could affect approval.\n\n**Separate needs from preferences**\n\nMake three lists:\n\n- Requirements that cannot change\n- Strong preferences\n- Features that would be nice but are not necessary\n\nInclude commute, property type, accessibility, parking, pets, maintenance, and likely length of ownership. If a school assignment matters, verify it directly for the exact address. City limits and mailing addresses do not always match school-district boundaries.\n\n**Know what can vary by property**\n\nSnohomish County includes urban, suburban, and rural properties. Depending on location, a home may have a private well, septic system, shared road, propane, flood considerations, critical areas, or additional maintenance responsibilities.\n\nFor each serious property, investigate:\n\n- Utility sources and average costs\n- Permit history\n- Association documents and dues\n- Insurance availability and cost\n- Flood and drainage concerns\n- Septic and well records when applicable\n- Commute conditions at the correct time of day\n- Noise from major roads, rail, airports, or nearby uses\n\nA low purchase price does not always mean a low ownership cost.\n\n**Writing an offer**\n\nAn offer includes more than price. It can address financing, earnest money, inspection, appraisal, closing date, possession, included items, and other conditions.\n\nA competitive offer should still fit your financial limit and risk tolerance. Ask what each term means before signing. Do not waive a protection simply because other buyers might do so.\n\nThe right strategy depends on the specific property, how long it has been available, competing interest, condition, seller priorities, and your alternatives.\n\n**What happens after the offer is accepted**\n\nOnce you are under contract, several tasks can happen quickly:\n\n- Earnest money is delivered according to the agreement.\n- The lender receives the contract and updates the loan process.\n- Inspections are scheduled within the contractual timeline.\n- Disclosures and property records are reviewed.\n- Insurance should be investigated.\n- The appraisal is ordered when required.\n- Title and escrow complete their work.\n- The lender verifies documents before final approval.\n\nKeep your calendar flexible and respond promptly, but do not let speed prevent you from understanding a decision.\n\n**Using the inspection well**\n\nA home inspection is an educational process, not a simple pass or fail. Attend when possible and ask the inspector to distinguish urgent concerns, safety issues, aging systems, and ordinary maintenance.\n\nDepending on the property, additional evaluation may be appropriate for sewer, septic, well, roof, drainage, chimney, pests, structure, electrical, or environmental concerns.\n\nAfter inspection, the available choices depend on the contract. They may include proceeding, requesting repairs or credits, renegotiating when permitted, or ending the transaction when a valid contingency allows it. Your agent should explain the contractual options, while inspectors and specialists explain condition.\n\n**Appraisal and final loan approval**\n\nThe appraisal is primarily for the lender. It evaluates whether the property supports the loan, but it is not a replacement for an inspection.\n\nContinue providing documents requested by the lender and avoid new debt or large unexplained transfers. Review the final loan and closing disclosures carefully. Ask about anything that differs from earlier estimates.\n\n**Before closing**\n\nConfirm the amount and approved method for transferring funds directly with the closing company using verified contact information. Real-estate wire fraud is a serious risk. Do not rely on unexpected email instructions.\n\nComplete the final walkthrough to confirm the home's condition and any agreed work. Closing is complete only after the required documents and funds are processed and the transaction records.\n\n**Plan for the first year, not only closing day**\n\nSet aside money for maintenance and learn where the main water shutoff, electrical panel, heating equipment, and other key systems are located. Change locks or codes as appropriate and keep inspection documents for future planning.\n\nA first purchase should leave room for life after closing. Clear numbers, careful property research, and an offer you understand are more valuable than trying to move faster than everyone else."
+    content: "Buying a first home can feel like a series of unfamiliar deadlines. The process becomes easier when you understand what happens before touring, what changes after an offer is accepted, and which decisions deserve more time.\n\nThe goal is not to memorize every form. It is to know the purpose of each stage and when to ask questions.\n\n**Begin with a complete monthly budget**\n\nA lender's preapproval is an important starting point, but it is not the same as deciding what payment feels comfortable.\n\nAsk for an estimate that includes principal, interest, property taxes, homeowners insurance, mortgage insurance if applicable, association dues, and realistic closing costs. Keep money available after closing for moving, repairs, furnishings, and ordinary emergencies.\n\nAvoid making major credit changes during the transaction. Before opening or closing accounts, changing jobs, moving money, or financing a purchase, ask the lender how it could affect approval.\n\n**Separate needs from preferences**\n\nMake three lists:\n\n- Requirements that cannot change\n- Strong preferences\n- Features that would be nice but are not necessary\n\nInclude commute, property type, accessibility, parking, pets, maintenance, and likely length of ownership. If a school assignment matters, verify it directly for the exact address. City limits and mailing addresses do not always match school-district boundaries.\n\n**Know what can vary by property**\n\nSnohomish County includes urban, suburban, and rural properties. Depending on location, a home may have a private well, septic system, shared road, propane, flood considerations, critical areas, or additional maintenance responsibilities.\n\nFor each serious property, investigate:\n\n- Utility sources and average costs\n- Permit history\n- Association documents and dues\n- Insurance availability and cost\n- Flood and drainage concerns\n- Septic and well records when applicable\n- Commute conditions at the correct time of day\n- Noise from major roads, rail, airports, or nearby uses\n\nA low purchase price does not always mean a low ownership cost.\n\n**Writing an offer**\n\nAn offer includes more than price. It can address financing, earnest money, inspection, appraisal, closing date, possession, included items, and other conditions.\n\nA competitive offer should still fit your financial limit and risk tolerance. Ask what each term means before signing. Do not waive a protection simply because other buyers might do so.\n\nThe right strategy depends on the specific property, how long it has been available, competing interest, condition, seller priorities, and your alternatives.\n\n**What happens after the offer is accepted**\n\nOnce you are under contract, several tasks can happen quickly:\n\n- Earnest money is delivered according to the agreement.\n- The lender receives the contract and updates the loan process.\n- Inspections are scheduled within the contractual timeline.\n- Disclosures and property records are reviewed.\n- Insurance should be investigated.\n- The appraisal is ordered when required.\n- Title and escrow complete their work.\n- The lender verifies documents before final approval.\n\nKeep your calendar flexible and respond promptly, but do not let speed prevent you from understanding a decision.\n\n**Using the inspection well**\n\nA home inspection is an educational process, not a simple pass or fail. Attend when possible and ask the inspector to distinguish urgent concerns, safety issues, aging systems, and ordinary maintenance.\n\nDepending on the property, additional evaluation may be appropriate for sewer, septic, well, roof, drainage, chimney, pests, structure, electrical, or environmental concerns.\n\nAfter inspection, the available choices depend on the contract. They may include proceeding, requesting repairs or credits, renegotiating when permitted, or ending the transaction when a valid contingency allows it. Your agent should explain the contractual options, while inspectors and specialists explain condition.\n\n**Appraisal and final loan approval**\n\nThe appraisal is primarily for the lender. It evaluates whether the property supports the loan, but it is not a replacement for an inspection.\n\nContinue providing documents requested by the lender and avoid new debt or large unexplained transfers. Review the final loan and closing disclosures carefully. Ask about anything that differs from earlier estimates.\n\n**Before closing**\n\nConfirm the amount and approved method for transferring funds directly with the closing company using verified contact information. Real-estate wire fraud is a serious risk. Do not rely on unexpected email instructions.\n\nComplete the final walkthrough to confirm the home's condition and any agreed work. Closing is complete only after the required documents and funds are processed and the transaction records.\n\n**Plan for the first year, not only closing day**\n\nSet aside money for maintenance and learn where the main water shutoff, electrical panel, heating equipment, and other key systems are located. Change locks or codes as appropriate and keep inspection documents for future planning.\n\nA first purchase should leave room for life after closing. Use clear numbers, careful property research, and an offer you understand to decide whether a home fits your plans."
   },
   // R04, Out-of-Area / Remote Buyers & Sellers
   {
@@ -255,7 +255,7 @@ If you're downsizing into Snohomish and want a steady guide, Debbie Welch is a g
     metaDescription: "Learn how first-time buyers can write a competitive offer without automatically waiving inspection, appraisal, financing, or other important protections.",
     image: "/blog/first-time-buyers-compete-with-protections.webp",
     imageAlt: "First-time buyers reviewing an offer plan and financial limits at a table",
-    content: "Multiple-offer situations can make first-time buyers feel that the only choices are giving up every protection or never getting a home. In practice, an offer has several parts, and the strongest combination depends on the property, seller priorities, market activity, and the buyer's ability to accept risk.\n\nThe goal is not to win at any cost. It is to write the strongest offer that still makes sense if it is accepted.\n\n**Set the financial ceiling before competing**\n\nDecide the maximum purchase price and monthly payment while you are calm. Include taxes, insurance, association dues, mortgage insurance when applicable, utilities, maintenance, and reserves.\n\nAsk the lender how a higher price affects cash needed at closing and the monthly payment. Do not assume that lender approval means the amount will feel comfortable.\n\nYour ceiling should not depend on a future refinance, guaranteed appreciation, or money that must remain available for emergencies.\n\n**Find out what matters to the seller**\n\nPrice matters, but sellers may also care about closing date, possession, confidence in the financing, requested costs, included items, and the likelihood that the transaction will close.\n\nInformation must be obtained appropriately and cannot always be provided. When seller priorities are known, an offer can sometimes improve through timing or clarity rather than price alone.\n\n**Strengthen financing preparation**\n\nA current, well-supported preapproval and a responsive lender can make the offer easier to evaluate. Submit only the financial documentation appropriate for the offer and protect sensitive personal information.\n\nAsk the lender:\n\n- What conditions remain before final approval?\n- How quickly can the appraisal be ordered?\n- Is the closing date realistic?\n- How would a low appraisal affect the plan?\n- What changes to credit, employment, or funds must be avoided?\n- How much cash is available for appraisal or inspection decisions?\n\nDo not represent financing as stronger than it actually is.\n\n**Understand inspection choices**\n\nInspection terms can be adjusted in different ways depending on the contract and situation. Options may include a standard inspection contingency, a shorter inspection period, a pre-offer inspection when permitted and practical, or more limited requests after inspection.\n\nEach choice has cost and risk. A pre-offer inspection may require paying for an inspection before knowing whether the offer will be accepted. Limiting requests does not make unknown problems disappear. Waiving inspection can leave the buyer accepting condition without the usual opportunity to investigate.\n\nAsk:\n\n- What do I know about the property's age and visible condition?\n- Which systems or site conditions deserve specialist review?\n- Can I afford a major repair immediately after closing?\n- Would I still want the home if the inspection finds a serious concern?\n- Does the proposed language preserve the option I think it preserves?\n\nThe contract controls the actual rights. Review the language carefully before signing.\n\n**Plan for appraisal risk**\n\nOffering above asking price does not guarantee that the appraisal will support the contract price. If the appraisal is lower, the available choices depend on financing, contract terms, seller response, and buyer funds.\n\nBefore agreeing to cover an appraisal difference, decide the maximum additional cash you could use and whether spending it would leave adequate reserves. Appraisal-gap language should have a clear limit and be understood before submission.\n\n**Treat earnest money seriously**\n\nEarnest money demonstrates commitment, but it is not a casual deposit. The contract determines when it is refundable, when it may be at risk, and how it is handled.\n\nDo not increase or release earnest money without understanding the consequences. Ask where funds will be held, when they are due, and what happens under each contingency.\n\n**Use timing carefully**\n\nA seller may value a closing or possession date that fits the move. Flexibility can help, but only offer dates you and the lender can meet.\n\nIf possession after closing is proposed, understand the written terms, insurance, responsibility for damage, access, cost, and what happens if the seller does not leave on time.\n\n**Avoid emotional escalation**\n\nMultiple offers can turn a home into a contest. The fact that other buyers want it does not change the property's condition, ownership cost, commute, or fit.\n\nBefore increasing an offer, return to three questions:\n\n- Would I be comfortable if this price became public tomorrow?\n- Will I still have adequate reserves after closing?\n- Would I regret losing the home more than I would regret accepting these terms?\n\nIt is reasonable to walk away when the risk exceeds the value to you.\n\n**A competitive offer should still be survivable**\n\nThe strongest offer is not necessarily the one with the highest price or fewest conditions. It is one the buyer can perform, the lender can support, and the seller can understand.\n\nPreparation, realistic financing, clear terms, thoughtful timing, and firm personal limits can make a first-time buyer competitive without pretending that every protection is disposable."
+    content: "Multiple-offer situations can make first-time buyers feel that the only choices are giving up every protection or never getting a home. In practice, an offer has several parts, and the strongest combination depends on the property, seller priorities, market activity, and the buyer's ability to accept risk.\n\nThe goal is not to win at any cost. It is to write the strongest offer that still makes sense if it is accepted.\n\n**Set the financial ceiling before competing**\n\nDecide the maximum purchase price and monthly payment before you enter a multiple-offer situation. Include taxes, insurance, association dues, mortgage insurance when applicable, utilities, maintenance, and reserves.\n\nAsk the lender how a higher price affects cash needed at closing and the monthly payment. Do not assume that lender approval means the amount will feel comfortable.\n\nYour ceiling should not depend on a future refinance, guaranteed appreciation, or money that must remain available for emergencies.\n\n**Find out what matters to the seller**\n\nPrice matters, but sellers may also care about closing date, possession, confidence in the financing, requested costs, included items, and the likelihood that the transaction will close.\n\nInformation must be obtained appropriately and cannot always be provided. When seller priorities are known, an offer can sometimes improve through timing or clarity rather than price alone.\n\n**Strengthen financing preparation**\n\nA current, well-supported preapproval and a responsive lender can make the offer easier to evaluate. Submit only the financial documentation appropriate for the offer and protect sensitive personal information.\n\nAsk the lender:\n\n- What conditions remain before final approval?\n- How quickly can the appraisal be ordered?\n- Is the closing date realistic?\n- How would a low appraisal affect the plan?\n- What changes to credit, employment, or funds must be avoided?\n- How much cash is available for appraisal or inspection decisions?\n\nDescribe financing accurately, including any remaining approval conditions.\n\n**Understand inspection choices**\n\nInspection terms can be adjusted in different ways depending on the contract and situation. Options may include a standard inspection contingency, a shorter inspection period, a pre-offer inspection when permitted and practical, or more limited requests after inspection.\n\nEach choice has cost and risk. A pre-offer inspection may require paying for an inspection before knowing whether the offer will be accepted. Limiting requests does not make unknown problems disappear. Waiving inspection can leave the buyer accepting condition without the usual opportunity to investigate.\n\nAsk:\n\n- What do I know about the property's age and visible condition?\n- Which systems or site conditions deserve specialist review?\n- Can I afford a major repair immediately after closing?\n- Would I still want the home if the inspection finds a serious concern?\n- Does the proposed language preserve the option I think it preserves?\n\nThe contract controls the actual rights. Review the language carefully before signing.\n\n**Plan for appraisal risk**\n\nOffering above asking price does not guarantee that the appraisal will support the contract price. If the appraisal is lower, the available choices depend on financing, contract terms, seller response, and buyer funds.\n\nBefore agreeing to cover an appraisal difference, decide the maximum additional cash you could use and whether spending it would leave adequate reserves. Appraisal-gap language should have a clear limit and be understood before submission.\n\n**Treat earnest money seriously**\n\nEarnest money demonstrates commitment, but it is not a casual deposit. The contract determines when it is refundable, when it may be at risk, and how it is handled.\n\nDo not increase or release earnest money without understanding the consequences. Ask where funds will be held, when they are due, and what happens under each contingency.\n\n**Use timing carefully**\n\nA seller may value a closing or possession date that fits the move. Flexibility can help, but only offer dates you and the lender can meet.\n\nIf possession after closing is proposed, understand the written terms, insurance, responsibility for damage, access, cost, and what happens if the seller does not leave on time.\n\n**Avoid emotional escalation**\n\nMultiple offers can turn a home into a contest. The fact that other buyers want it does not change the property's condition, ownership cost, commute, or fit.\n\nBefore increasing an offer, return to three questions:\n\n- Would I be comfortable if this price became public tomorrow?\n- Will I still have adequate reserves after closing?\n- Would I regret losing the home more than I would regret accepting these terms?\n\nIt is reasonable to walk away when the risk exceeds the value to you.\n\n**A competitive offer should still fit your limits**\n\nThe strongest offer is not necessarily the one with the highest price or fewest conditions. It is one the buyer can perform, the lender can support, and the seller can understand.\n\nPreparation, realistic financing, clear terms, thoughtful timing, and firm personal limits can make a first-time buyer competitive without pretending that every protection is disposable."
   },
   // BC10
   {
diff --git a/src/pages/About.tsx b/src/pages/About.tsx
index d960f5a..c16886f 100644
--- a/src/pages/About.tsx
+++ b/src/pages/About.tsx
@@ -40,8 +40,7 @@ const About = () => {
               </h1>
               <p className="text-foreground text-lg leading-relaxed mb-4">
                 I grew up in Marysville. Lived in Lake Stevens for about ten years. Now I'm in the middle of a live-in
-                renovation in North Everett. This isn't an area I recently moved to or just happen to do work in for the real
-                estate market. It's home. My parents are here. Our children and their families are here. I've watched
+                renovation in North Everett. This is home. My parents are here. Our children and their families are here. I've watched
                 the traffic patterns shift and the neighborhoods change. I know where the hidden parking is at the
                 Farmer's Market, and I bring that history to practical questions about routes, services, and how a
                 location works for your daily life.
@@ -112,32 +111,32 @@ const About = () => {
             >
               <p className="text-foreground text-lg leading-relaxed mb-6">
                 I'm a details person and a big-picture thinker. That means I'm watching the market and your stress level
-                at the same time. Here's what working together actually looks like:
+                at the same time. Here's how that shapes my work:
               </p>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                   <span className="text-foreground">
-                    Plain-language explanations with no jargon, no "trust me," and no skipping the parts that matter.
+                    Plain-language explanations of the numbers, documents, and decisions in front of you.
                   </span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                   <span className="text-foreground">
-                    Proactive communication. You will not be left wondering what's happening or waiting for a callback.
+                    Updates about deadlines, next steps, and changes, with time to talk through your questions.
                   </span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                   <span className="text-foreground">
-                    Honest pros and cons, even when the easy answer would be "you're fine, just sign here."
+                    Discussion of the benefits, drawbacks, and uncertainties before you decide.
                   </span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                   <span className="text-foreground">
-                    Hands-on support for big transitions. I've helped clients with everything from dump and donation
-                    runs to staging coordination to just being a steady presence on a hard day.
+                    Past hands-on help has included dump and donation runs, packing, and staging coordination.
+                    Those are examples of individual moves, not a standard package. We discuss the help your situation needs and any third-party costs.
                   </span>
                 </li>
                 <li className="flex items-start gap-3">
@@ -165,18 +164,17 @@ const About = () => {
           >
             <p className="eyebrow mb-4 text-center">A little backstory...</p>
             <h2 className="font-heading h-section text-primary mb-8 text-center">
-              Thirty Years Reading the Fine Print
+              What Healthcare Taught Me
             </h2>
             <div className="space-y-5 text-foreground text-lg leading-relaxed">
               <p>
-                Before real estate, I spent 30 years in healthcare, including medical coding, auditing, and education. My job was
-                to read documents other people skimmed, catch the detail that changed everything, and explain complex
-                information in plain language to people who were already overwhelmed. That clause on page 4 of a purchase
-                agreement that nobody reads? That's the one I flag.
+                Before real estate, I spent 30 years in healthcare, including medical coding, auditing, and education. That work taught me
+                to read carefully, notice details, and explain complex information in plain language. I bring those habits
+                to real estate, reviewing documents and helping you identify questions that need a closer look.
               </p>
               <p>
                 My husband Todd is a retired Navy Veteran and Systems Engineer, so military families, PCS moves, and VA
-                loans are genuinely close to home for us. So literally that we currently live about 2 miles from Naval Station Everett. We know what it feels like to make big decisions on a tight
+                loans are close to home for us. We currently live about 2 miles from Naval Station Everett. We know what it feels like to make big decisions on a tight
                 timeline with a lot of unknowns.
               </p>
             </div>
@@ -243,8 +241,8 @@ const About = () => {
             >
               <h3 className="font-heading text-2xl font-bold text-primary mb-4">Lifelong Local</h3>
               <p className="text-foreground leading-relaxed">
-                Marysville, Lake Stevens, and North Everett. That's my actual history here. When I talk about what a
-                neighborhood feels like, it's because I've lived in it, not just sold in it.
+                Marysville, Lake Stevens, and North Everett. Those places are part of my history. I bring that experience
+                to conversations about everyday life here.
               </p>
             </motion.div>
 
@@ -258,8 +256,8 @@ const About = () => {
             >
               <h3 className="font-heading text-2xl font-bold text-primary mb-4">Research Is My Love Language</h3>
               <p className="text-foreground leading-relaxed">
-                I go deep on things. Market trends, neighborhood data, local policies, and ADU rules. If it's relevant to
-                your situation, I've probably already pulled it up. Checklists help me sleep at night.
+                I go deep on things. Market trends, neighborhood data, local policies, and ADU rules. I enjoy digging into the questions that matter to
+                your situation. Checklists help me sleep at night.
               </p>
             </motion.div>
 
diff --git a/src/pages/Buying.tsx b/src/pages/Buying.tsx
index 47983a0..7aa3fd7 100644
--- a/src/pages/Buying.tsx
+++ b/src/pages/Buying.tsx
@@ -1,3 +1,4 @@
+import { Link } from "react-router-dom";
 import Navigation from "@/components/Navigation";
 import Footer from "@/components/Footer";
 import SEO from "@/components/SEO";
@@ -77,9 +78,9 @@ const Buying = () => {
   const buyingSteps = [
     {
       number: "01",
-      title: "Get Clear on What You Actually Want",
+      title: "Start With What Matters to You",
       description:
-        "Before we look at a single listing, we talk. What does the right home actually look like for your life right now and two or five years from now? Budget, location, commute, schools, yard, stairs, layout. I ask the questions most people forget to ask themselves until they're standing in a house they don't love.",
+        "Before touring, we talk about your life now and what may change over the next few years. Budget, commute, yard, stairs, layout, and the services you use all help shape the search. If school assignment matters to you, confirm it with the district for the exact address.",
     },
     {
       number: "02",
@@ -91,19 +92,19 @@ const Buying = () => {
       number: "03",
       title: "Search Smart, Tour Well",
       description:
-        "We'll focus on the Snohomish County areas that actually fit your criteria, whether that is Lake Stevens, Everett, Marysville, Snohomish, Arlington, Bothell, or somewhere else. When we tour homes, I'll tell you what I see: the good, the things to think about, and the things that would make me pause. Not just listing-photo enthusiasm.",
+        "We'll focus on the Snohomish County areas that fit your criteria, whether that is Lake Stevens, Everett, Marysville, Snohomish, Arlington, Bothell, or somewhere else. When we tour homes, I'll tell you what I see: the good, the things to think about, and the things that would make me pause. We can then decide what needs further investigation.",
     },
     {
       number: "04",
       title: "Make a Competitive, Thoughtful Offer",
       description:
-        "When you find the right home, we'll build an offer grounded in recent sales, current competition, and what the terms actually mean for your risk. I'll explain every part of the contract in plain language before you sign anything. No 'just trust me, this is standard.'",
+        "When you find the right home, we'll build an offer grounded in recent sales, current competition, and how the terms affect your risk. We'll review key contract terms and your questions before you decide what to sign.",
     },
     {
       number: "05",
-      title: "From Contract to Keys Without the Chaos",
+      title: "From Contract to Keys",
       description:
-        "Once you're under contract, I manage inspections, appraisals, deadlines, lender communication, and escrow coordination. You'll always know what's happening and what's coming next.",
+        "Once you're under contract, I coordinate the real estate deadlines and communicate with your lender, inspectors, and escrow team. We review updates and the decisions that need your attention.",
     },
   ];
 
@@ -114,14 +115,14 @@ const Buying = () => {
         "It varies a lot by price point and area. Some neighborhoods and price ranges still move fast with multiple offers; others give buyers more breathing room and room to negotiate. I'll walk you through current data for the specific areas you're considering before we start writing offers, so you know what you're walking into, not after the fact.",
     },
     {
-      question: "How much do I actually need for a down payment?",
+      question: "How much should I plan for a down payment?",
       answer:
         "Less than most people think, depending on your loan type and financial picture. Conventional loans can go as low as 3-5% down. FHA is 3.5%. VA loans for qualified Veterans require zero down. Your ideal down payment depends on your goals, your monthly comfort level, and what your lender recommends for your situation. I'll connect you with someone who will explain this clearly so we can search with real numbers.",
     },
     {
       question: "Do I need to sell my current home before I buy?",
       answer:
-        "Not necessarily. Some buyers sell first, some buy first, and others use contingent offers or bridge strategies. There's no universal right answer. It depends on your finances, your timeline, and how much risk you're comfortable with. We'll look at your specific situation and talk through the options honestly before you decide.",
+        "Not necessarily. Some buyers sell first, some buy first, and others use contingent offers or bridge strategies. There's no universal right answer. It depends on your finances, your timeline, and how much risk you're comfortable with. We'll look at your specific situation and talk through the options before you decide.",
     },
     {
       question: "What are the costs beyond the down payment I should plan for?",
@@ -146,7 +147,7 @@ const Buying = () => {
     {
       question: "How should I choose between different Snohomish County communities?",
       answer:
-        "We can compare commute patterns, housing styles, price ranges, school-district boundaries, services, and the day-to-day feel of each area. City names alone do not tell the whole story, so I help you look at the details that affect how a location will work for you.",
+        "We can compare commute routes, housing styles, price ranges, services, and the features you tell me matter to daily life. For school information, confirm current assignment with the district using the exact address. We look at property-specific details rather than relying on a city name.",
     },
   ];
 
@@ -205,10 +206,9 @@ const Buying = () => {
               </h1>
 
               <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
-                Buying a home is one of the biggest financial decisions most people make. It deserves more than a rushed
-                search and a stack of paperwork you don't fully understand. I help buyers in Lake Stevens, Everett,
-                Marysville, Snohomish, Arlington, and surrounding communities move through the process with clear
-                information, honest guidance, and someone in their corner who actually gives a damn about the outcome.
+                Buying a home brings together your finances, daily routines, and plans for the years ahead. I help buyers
+                in Lake Stevens, Everett, Marysville, Snohomish, Arlington, and surrounding communities compare homes,
+                understand the costs, and work through the decisions along the way.
               </p>
             </motion.div>
           </div>
@@ -236,11 +236,16 @@ const Buying = () => {
                   months after you move in. I take the time to explain them.
                 </p>
                 <p>
-                  I'm not trying to close a deal. I'm trying to help you buy the right home. There's a difference, and
-                  you'll feel it.
+                  We start with what matters to you, then use that list to evaluate each home and the tradeoffs it brings.
                 </p>
               </div>
             </motion.div>
+            <p className="mt-8 text-center text-foreground">
+              Further reading: {" "}
+              <Link to="/blog/first-time-home-buying-calm-guide" className="text-secondary underline underline-offset-4 hover:text-primary">
+                What Should First-Time Buyers Expect in Snohomish County?
+              </Link>
+            </p>
           </div>
         </section>
 
@@ -258,7 +263,7 @@ const Buying = () => {
                 Step by step...
               </p>
               <h2 className="font-heading h-section text-primary">
-                What the Process Actually Looks Like
+                Your Home-Buying Steps
               </h2>
             </motion.div>
 
@@ -300,23 +305,22 @@ const Buying = () => {
               className="max-w-4xl mx-auto"
             >
               <p className="eyebrow mb-4" aria-hidden="true">
-                No rush, no pressure...
+                Room for your questions...
               </p>
 
               <h2 className="font-heading h-section text-primary mb-8">
-                I'm Not in a Hurry. You Shouldn't Be Either.
+                Answers to Your Questions
               </h2>
 
               <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                 <p>
-                  I'm not going to push you toward a home because the market is "moving fast." If a house isn't right,
-                  I'll tell you. If a contract term concerns me, I'll flag it. If you need to slow down and think, we
-                  slow down.
+                  If a home's condition or a contract term raises a question, we talk it through. We also look at the
+                  deadlines involved, so you can decide what needs more research and whether to proceed.
                 </p>
                 <p>
                   I'm a lifelong Snohomish County local. I grew up in Marysville, lived in Lake Stevens for years,
-                  currently renovating in North Everett. When I tell you what a neighborhood is actually like, it's from
-                  living here, not a market report. Ask me as many questions as you need.
+                  currently renovating in North Everett. I can share local context alongside the market data and
+                  property records. Ask me as many questions as you need.
                 </p>
               </div>
             </motion.div>
@@ -343,8 +347,8 @@ const Buying = () => {
 
               <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                 Covers what to know before you start your search, including financing basics, how to read a listing, what
-                inspections actually tell you, hidden costs to plan for, and how the Snohomish County market works.
-                Written for people who want real information, not a glossy brochure.
+                inspections can tell you, additional costs to plan for, and how the Snohomish County market works.
+                A reference to revisit as questions come up.
               </p>
 
               <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6" asChild>
@@ -379,7 +383,7 @@ const Buying = () => {
                 </h2>
                 <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                   Tell me what you're looking for and I'll put together a custom search for the areas and price ranges
-                  that make sense for you. No pressure, just listings that are actually worth your time.
+                  that make sense for you. We can refine the search as you learn what works for you.
                 </p>
               </div>
 
diff --git a/src/pages/Downsizing.tsx b/src/pages/Downsizing.tsx
index 8a291f8..58fcf1a 100644
--- a/src/pages/Downsizing.tsx
+++ b/src/pages/Downsizing.tsx
@@ -81,39 +81,39 @@ const Downsizing = () => {
       number: "01",
       title: "Start With a Real Conversation",
       description:
-        "This is a conversation, not a sales pitch. We talk through what's prompting the question, what you want your next chapter to feel like, and whether now is actually the right time. Sometimes it is. Sometimes the answer is 'let's come back to this in six months.' Either way, you'll leave with more clarity than you came in with.",
+        "We talk about what is prompting the move, what you want daily life to look like, and whether now is the right time. You may be ready to make a plan, or you may want to revisit the question later.",
     },
     {
       number: "02",
       title: "Understand What Your Home Is Worth",
       description:
-        "Before you can make a plan, you need real numbers. I'll walk through your home and give you an honest picture of current market value, what prep work would actually move the needle, and what you can skip. There is no pressure to list, just the information you need to make a good decision.",
+        "Before you can make a plan, you need real numbers. I'll walk through your home and prepare a market analysis and discuss which preparation may help, what it could cost, and what can wait.",
     },
     {
       number: "03",
-      title: "Build a Prep Plan You Can Actually Do",
+      title: "Build a Prep Plan That Fits",
       description:
-        "We'll prioritize what needs attention and what doesn't. I can connect you with stagers, organizers, cleaners, and contractors who understand the downsizing process. For clients who need more hands-on help, I've done everything from donation runs to helping pack a POD. We meet you where you are.",
+        "We'll prioritize what needs attention and what doesn't. I can connect you with stagers, organizers, cleaners, and contractors who understand the downsizing process. In past moves, I've helped with donation runs and packing a POD. Those are individual examples; we discuss the support and any third-party costs for your move before making arrangements.",
     },
     {
       number: "04",
       title: "List and Market Your Home Well",
       description:
-        "When you're ready, I'll position your home thoughtfully for the Snohomish County market with a pricing strategy, professional photos, and marketing that reaches the right buyers. You'll know exactly what's happening at every step, and I'll walk you through offers in plain language so you understand what you're actually agreeing to.",
+        "When you're ready, I'll position your home thoughtfully for the Snohomish County market with a pricing strategy, professional photos, and marketing that reaches the right buyers. We'll review offers, key terms, and your questions in plain language.",
     },
     {
       number: "05",
       title: "Coordinate the Transition",
       description:
-        "Selling and moving at the same time is a lot. We'll work through the logistics together by timing the sale with your next move, exploring rent-backs or extended closings when needed, and keeping things organized so nothing falls through the cracks. The goal is a landing that feels like a landing, not a scramble.",
+        "Selling and moving at the same time is a lot. We'll work through the logistics together by timing the sale with your next move, exploring rent-backs or extended closings when needed, and tracking deadlines and planning for possible gaps between the sale and your next home.",
     },
   ];
 
   const faqs = [
     {
-      question: "How do I know if it's actually the right time to downsize?",
+      question: "How do I know if it's the right time to downsize?",
       answer:
-        "Honest answer: there's rarely a perfect time. Some real signs are worth paying attention to. The maintenance may feel like more than you want to manage, you may be paying for space you don't use, stairs may be becoming a concern, or your monthly costs may no longer match your priorities or income. We can talk through your specific situation and look at the numbers together. Sometimes the answer is 'yes, let's make a plan.' Sometimes it's 'you have more time than you think.' I'd rather tell you the truth than push you toward a move that doesn't make sense yet.",
+        "There's rarely a perfect time. Some real signs are worth paying attention to. The maintenance may feel like more than you want to manage, you may be paying for space you don't use, stairs may be becoming a concern, or your monthly costs may no longer match your priorities or income. We can talk through your specific situation and look at the numbers together. Sometimes the answer is 'yes, let's make a plan.' Sometimes it's 'you have more time than you think.' The choice depends on what works for your life now.",
     },
     {
       question: "Do I have to get rid of everything before I sell?",
@@ -123,7 +123,7 @@ const Downsizing = () => {
     {
       question: "Should I buy first or sell first?",
       answer:
-        "It depends on your finances, your comfort with risk, and what you're moving into. Buying first gives you certainty about where you're going but can mean carrying two mortgages temporarily. Selling first gives you cash in hand but requires knowing where you'll land. We'll look at your specific numbers and timeline and talk through both options honestly, including approaches like rent-backs that can give you more breathing room.",
+        "It depends on your finances, your comfort with risk, and what you're moving into. Buying first gives you certainty about where you're going but can mean carrying two mortgages temporarily. Selling first gives you cash in hand but requires knowing where you'll land. We'll look at your specific numbers and timeline and talk through both options, including approaches like rent-backs that can give you more breathing room.",
     },
     {
       question: "What kinds of homes make sense for downsizing?",
@@ -138,7 +138,7 @@ const Downsizing = () => {
     {
       question: "What does it cost to talk with you?",
       answer:
-        "Nothing. The initial conversation is free and carries no obligation. If you decide to move forward, we'll review how compensation works and any preparation or third-party costs, such as repairs, cleaning, or moving help, before you commit. If you're not ready to sell, or it turns out this isn't the right move for you right now, that's completely okay. I'd rather be honest with you now than push you into something that doesn't fit.",
+        "Nothing. The initial conversation is free and carries no obligation. If you decide to move forward, we'll review how compensation works and any preparation or third-party costs, such as repairs, cleaning, or moving help, before you commit. If you're not ready to sell, or it turns out this isn't the right move for you right now, that's completely okay. We can revisit the conversation when your circumstances change.",
     },
     {
       question: "What does the SRES® designation mean?",
@@ -209,8 +209,8 @@ const Downsizing = () => {
               <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                 You've taken care of this home for years. Maybe decades. And now something has shifted: the
                 maintenance, the space, the stairs, the cost, the season of life. Figuring out what comes next is a big
-                decision, and it deserves more than a sales pitch. I help Snohomish County homeowners think it through
-                clearly, plan it carefully, and move when the time is actually right for them.
+                decision, and it deserves time and thoughtful planning. I help Snohomish County homeowners consider their options
+                and work through the next steps when they are ready.
               </p>
             </motion.div>
           </div>
@@ -240,10 +240,9 @@ const Downsizing = () => {
                   members with strong opinions and a timeline that feels impossible.
                 </p>
                 <p>
-                  The practical part, including the selling, pricing, and logistics, is actually the easier part. The harder
-                  part is figuring out what you actually want, what you can realistically do, and how to make a decision
-                  you'll feel good about a year from now. That's where we start. Not with a listing appointment. With a
-                  real conversation.
+                  For some people, sorting belongings is the hardest part. For others, it is the finances, the logistics,
+                  or deciding where to go next. We start with what feels difficult for you and what support would help,
+                  then build the plan around that.
                 </p>
               </div>
             </motion.div>
@@ -272,7 +271,7 @@ const Downsizing = () => {
                 One step at a time...
               </p>
               <h2 className="font-heading h-section text-primary">
-                What the Process Actually Looks Like
+                Planning Your Downsizing Move
               </h2>
             </motion.div>
 
@@ -314,31 +313,37 @@ const Downsizing = () => {
               className="max-w-4xl mx-auto"
             >
               <p className="eyebrow mb-4" aria-hidden="true">
-                What's different here...
+                Support for your move...
               </p>
 
               <h2 className="font-heading h-section text-primary mb-8">
-                I Show Up. All the Way.
+                A Plan for More Than the Sale
               </h2>
 
               <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                 <p>Selling the house is only one piece. I also help you plan the move around it: the timing, the belongings, and the next place you'll call home.</p>
                 <p>
                   For clients who need it, I've helped coordinate donation runs, packed boxes, arranged junk hauling,
-                  managed staging logistics, and been the steady point of contact when everything feels like a lot. That's
-                  not a formal service with a fee attached. It's just what I do when someone needs it.
+                  managed staging logistics, and been a point of contact during a difficult transition. These are examples
+                  from past moves, not guaranteed included services. We agree on responsibilities and any outside costs for your situation.
                 </p>
                 <p>
                   I am careful with complex documents, I look for the details that are easy to miss, and I explain things
-                  clearly to people who are already stressed. I'll walk you through contracts in plain language, flag the clauses that matter, and make sure
-                  you understand what you're agreeing to before you sign anything.
+                  clearly to people who are already stressed. I'll walk you through contracts in plain language, flag the clauses that matter, and answer
+                  your questions before you decide what to sign.
                 </p>
                 <p>
                   I won't rush you, and I won't judge your stuff, your timeline, or your questions.
-                  We move at the pace that makes sense for your actual life.
+                  We move at the pace that makes sense for your life.
                 </p>
               </div>
             </motion.div>
+            <p className="mt-8 text-center text-foreground">
+              Further reading: {" "}
+              <Link to="/blog/downsizing-guide" className="text-secondary underline underline-offset-4 hover:text-primary">
+                A Practical Guide to Downsizing Your Home Without Losing Your Mind
+              </Link>
+            </p>
           </div>
         </section>
 
@@ -363,7 +368,7 @@ const Downsizing = () => {
               <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                 Not sure where to begin? This guide walks through what to think about before you decide anything, including the
                 financial questions worth asking, how to approach the sorting and prep process without burning out, and
-                what to look for in your next home. Plain language, no fluff. A good starting point whether you're six
+                what to look for in your next home. A practical reference to return to as you plan. A good starting point whether you're six
                 months out or two years away.
               </p>
 
@@ -392,7 +397,7 @@ const Downsizing = () => {
                   Request a Free Downsizing Consult
                 </h2>
                 <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
-                  No pressure, no obligation. Just a conversation about where you are, what you're thinking about, and
+                  A free, no-obligation conversation about where you are, what you're thinking about, and
                   whether this is the right time to make a move. Share a few details below and I'll follow up to find a
                   time that works.
                 </p>
diff --git a/src/pages/Relocation.tsx b/src/pages/Relocation.tsx
index 4e6d2fb..e0cd3c4 100644
--- a/src/pages/Relocation.tsx
+++ b/src/pages/Relocation.tsx
@@ -81,54 +81,54 @@ const Relocation = () => {
       number: "01",
       title: "Get Oriented Before You Decide Anything",
       description:
-        "We start with a phone or Zoom conversation about your timeline, budget, and what matters most, such as commute, schools, neighborhood feel, space, and access to the base. I'll give you an honest picture of what different parts of Snohomish County are actually like, not just what the listings show.",
+        "We start with a phone or Zoom conversation about your timeline, budget, and what matters most, such as commute, space, services, and access to the base if relevant. We compare locations using your priorities and verify school assignment with the district for any specific home.",
     },
     {
       number: "02",
-      title: "Narrow Down the Right Areas",
+      title: "Compare Areas Against Your Priorities",
       description:
-        "Snohomish County covers a lot of ground. Lake Stevens feels different from Marysville, which feels different from Everett, which feels different from Bothell. I'll send you maps, notes, and my honest take on each area so you can make a real comparison instead of guessing from Google Street View.",
+        "Snohomish County covers a lot of ground. Lake Stevens feels different from Marysville, which feels different from Everett, which feels different from Bothell. Maps, property information, and local context help us compare housing, routes, and services.",
     },
     {
       number: "03",
       title: "Tour Homes Virtually or In Person",
       description:
-        "I do detailed video walkthroughs and live FaceTime tours, pointing out what you can't see in photos, what a neighborhood sounds like at 7am, and what the street looks like when it rains. If you can visit, we'll tour in person. If you can't, I'll be your eyes and ears until you can.",
+        "I offer video walkthroughs and live FaceTime tours to show layout, visible condition, and surroundings beyond the listing photos. We discuss what can be observed and what still needs a professional inspection. If you can visit, we can tour in person.",
     },
     {
       number: "04",
       title: "Make a Smart, Confident Offer",
       description:
-        "When you're ready, we'll build an offer that fits your budget, your timeline, and the current market without overextending you. I'll explain every term in plain language before you sign anything, and manage the contract-to-close process so you're not chasing down paperwork from across the country.",
+        "When you're ready, we'll build an offer that fits your budget, your timeline, and the current market and your comfort with risk. We review key terms and your questions before you sign, then coordinate the real estate deadlines with your lender and escrow team.",
     },
     {
       number: "05",
       title: "Land Well and Get Connected",
       description:
-        "Closing day isn't where my job ends. I'll follow up with local recommendations, connect you with people you'll actually need, and help you get settled rather than disappear after closing. If you're new to the area, I want to help you find your footing.",
+        "As you settle in, you can ask me about local services and recommendations. We can discuss the contacts or information that would be useful for your situation.",
     },
   ];
 
   const faqs = [
     {
-      question: "What's it actually like to commute from Snohomish County to Seattle or the Eastside?",
+      question: "What's it like to commute from Snohomish County to Seattle or the Eastside?",
       answer:
-        "Honest answer: it depends a lot on where you live, where you're going, and when you leave. I-5 between Everett and Seattle can be brutal during peak hours. Highway 9, 522, and 2 offer alternatives depending on your destination. We'll look at your specific commute route and talk through realistic drive times, park-and-ride options, and which locations give you the best balance of commute and daily priorities. I won't sugarcoat it. Some commutes are tough, but there are areas that work well, and I'll help you compare them.",
+        "It depends a lot on where you live, where you're going, and when you leave. I-5 between Everett and Seattle can be brutal during peak hours. Highway 9, 522, and 2 offer alternatives depending on your destination. We'll look at your specific commute route and talk through realistic drive times, park-and-ride options, and which locations give you the best balance of commute and daily priorities. Test the route during the hours you expect to travel before relying on a drive-time estimate.",
     },
     {
       question: "Can I buy a home here without seeing it in person?",
       answer:
-        "Yes. Several of my clients have done exactly that, including buyers purchasing from Germany and active duty service members who couldn't get here before their report date. It takes more preparation and clear communication, but it's very doable. I do detailed video walkthroughs, answer every question you have about condition and location, and we build in protective contingencies wherever possible. I won't let you commit to something I wouldn't feel good about if I were in your position.",
+        "Yes. Several of my clients have done exactly that, including buyers purchasing from Germany and active duty service members who couldn't get here before their report date. It takes more preparation and clear communication, but it's very doable. Video walkthroughs and property records help you ask better questions. Professional inspections still matter, and we discuss the protections available under the proposed contract before you decide.",
     },
     {
       question: "How does a VA loan work in this market?",
       answer:
-        "VA loans are a strong financing tool and I'm comfortable working with them. The key is having a lender who actually knows VA loans, not just someone who offers them on a checklist. My preferred VA lender is Jared Paul at CrossCountry Mortgage. He's a Marine Veteran, a Marysville native, and knows this market and VA financing well. We'll get you pre-approved properly so your offer is competitive from the start.",
+        "VA loans are a strong financing tool and I'm comfortable working with them. A VA-experienced lender can explain eligibility, underwriting, and the costs for your situation. My preferred VA lender is Jared Paul at CrossCountry Mortgage. He's a Marine Veteran, a Marysville native, and knows this market and VA financing well. Your lender handles pre-approval and explains the financing requirements; I help you evaluate the property and offer terms.",
     },
     {
       question: "What if I need to sell a home in another state before I can buy here?",
       answer:
-        "You're not alone in that situation. It is common with PCS moves. We'll coordinate timelines with your out-of-area agent and your lender, look at contingent offer options, and talk through temporary housing if there's a gap. It takes more planning but it's workable. The earlier we start talking, the more options we have.",
+        "You're not alone in that situation. It is common with PCS moves. We'll coordinate timelines with your out-of-area agent and your lender, look at contingent offer options, and talk through temporary housing if there's a gap. The available options depend on both transactions and your financing. The earlier we start talking, the more options we have.",
     },
     {
       question: "How far in advance should I reach out?",
@@ -138,7 +138,7 @@ const Relocation = () => {
     {
       question: "Do you work with non-military relocations too?",
       answer:
-        "Yes. Military moves are a specialty, but I work with all kinds of relocation clients, including people moving here for work, moving closer to family, or starting fresh in the Pacific Northwest. The process is similar: you need someone on the ground who knows the area and can help you make good decisions from a distance. That's what I do.",
+        "Yes. Civilian relocation may involve work, family, or another change; military PCS moves also involve orders and report dates. For a move into Snohomish County, we compare housing, budget, and daily routines. If you are leaving the county, we discuss the local sale and how it fits your next move. Support outside the area depends on the professionals involved.",
     },
     {
       question: "Can you help with military PCS moves to Naval Station Everett?",
@@ -203,14 +203,13 @@ const Relocation = () => {
               </p>
 
               <h1 className="font-heading h-section text-primary mb-6">
-                Military PCS & Relocation to Snohomish County
+                Military PCS & Relocation to or from Snohomish County
               </h1>
 
               <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
-                You got orders, a job offer, or a life change, and now you need to figure out where to live in a
-                county you may never have set foot in. That's a lot. I help military families and relocation clients
-                find the right home in the right area without having to piece it together from internet research alone.
-                I'll be your on-the-ground partner from the first conversation to the day you get your keys.
+                A move for work or family starts with your housing needs and timeline. A military PCS adds orders and
+                a report date to that planning. I help buyers moving into Snohomish County compare homes and locations,
+                and sellers leaving the area plan the local sale around their next move.
               </p>
             </motion.div>
           </div>
@@ -240,7 +239,7 @@ const Relocation = () => {
                   listing photos and Google Maps.
                 </p>
                 <p>
-                  My husband Todd is a retired Navy Veteran. I understand what PCS timelines actually look like, including the
+                  My husband Todd is a retired Navy Veteran. I understand what PCS timelines look like, including the
                   short notice, the hard deadlines, the pressure to decide fast. I've helped enough military families
                   buy in Snohomish County to know what questions to ask, what to watch out for, and what areas make
                   sense depending on where you're reporting.
@@ -272,7 +271,7 @@ const Relocation = () => {
                 Before you pack a box...
               </p>
               <h2 className="font-heading h-section text-primary">
-                What the Process Actually Looks Like
+                Planning a Home Purchase From Out of Area
               </h2>
             </motion.div>
 
@@ -325,17 +324,22 @@ const Relocation = () => {
                 <p>
                   Todd served in the Navy. I know what PCS season looks like, including orders with six weeks notice and decisions
                   before you've had time to think, pressure to get it right when you can't just look at a few more
-                  houses this weekend. I hold the MRP certification and have done this enough times to make it work even
-                  when the timeline is tight.
+                  houses this weekend. I hold the MRP certification and help clients identify priorities and backup options when
+                  the timeline is tight.
                 </p>
                 <p>
                   For VA financing, I work closely with Jared Paul at CrossCountry Mortgage, a Marine Veteran and
-                  Marysville native who actually specializes in VA loans and Snohomish County. Getting pre-approved with
-                  the right lender makes a real difference in how your offer is received. My goal: by the time you show
-                  up with a moving truck, you should already feel like you know where you landed.
+                  Marysville native who specializes in VA loans and Snohomish County. Your lender explains
+                  qualification and loan costs. I help you compare homes and contract choices using that information.
                 </p>
               </div>
             </motion.div>
+            <p className="mt-8 text-center text-foreground">
+              Further reading: {" "}
+              <Link to="/blog/relocating-guide" className="text-secondary underline underline-offset-4 hover:text-primary">
+                Relocating to Snohomish County: What I Tell My Military &amp; Out-of-Area Buyers
+              </Link>
+            </p>
           </div>
         </section>
 
@@ -359,9 +363,8 @@ const Relocation = () => {
 
               <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                 Built specifically for military families and out-of-area buyers coming to Snohomish County. Covers
-                neighborhoods near Naval Station Everett, current BAH rates, how VA loans work in this market, commute
-                realities, school districts, and what to know about buying from a distance. Plain language, honest take,
-                no fluff.
+                neighborhoods near Naval Station Everett, BAH questions to confirm with current official guidance, how VA loans work in this market, commute
+                realities, school districts, and what to know about buying from a distance. A starting point for the questions specific to your move.
               </p>
 
               <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
@@ -390,8 +393,7 @@ const Relocation = () => {
                 </h2>
                 <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                   Whether you have a firm report date or you're still in the early research phase, let's talk. Share a
-                  few details below and I'll follow up to find a time that works, including evenings and weekends, and
-                  across time zones.
+                  few details below and I'll follow up so we can compare schedules and time zones.
                 </p>
               </div>
 
diff --git a/src/pages/Selling.tsx b/src/pages/Selling.tsx
index 75cdbb1..2a39cf3 100644
--- a/src/pages/Selling.tsx
+++ b/src/pages/Selling.tsx
@@ -1,3 +1,4 @@
+import { Link } from "react-router-dom";
 import Navigation from "@/components/Navigation";
 import Footer from "@/components/Footer";
 import SEO from "@/components/SEO";
@@ -78,15 +79,15 @@ const Selling = () => {
   const sellingSteps = [
     {
       number: "01",
-      title: "Start With an Honest Conversation",
+      title: "Start With Your Goals",
       description:
-        "We walk through your home together, in person or virtually, and talk about your goals, your timeline, and what's prompting the move. I'll tell you what I see, what I think will matter to buyers, and what we can realistically expect from the current Snohomish County market. No sugarcoating.",
+        "We walk through your home together, in person or virtually, and talk about your goals, your timeline, and what's prompting the move. I'll tell you what I see, what I think will matter to buyers, and what we can realistically expect from the current Snohomish County market. We use that conversation to set priorities.",
     },
     {
       number: "02",
       title: "Build a Prep Plan That Fits Your Reality",
       description:
-        "Not every home needs a full renovation before listing. Some need a deep clean and better photos. Some need one or two targeted updates. I'll tell you exactly what's worth doing and what you can skip based on your price point, your timeline, and what buyers in your area actually care about. I can also connect you with trusted stagers, cleaners, and contractors when needed.",
+        "Not every home needs a full renovation before listing. Some need a deep clean and better photos. Some need one or two targeted updates. We weigh possible improvements against their cost, your timeline, and comparable homes in your area. I can also connect you with trusted stagers, cleaners, and contractors when needed.",
     },
     {
       number: "03",
@@ -98,13 +99,13 @@ const Selling = () => {
       number: "04",
       title: "Market, Show, and Field Offers",
       description:
-        "Professional photos, a well-written listing, and targeted marketing help reach the right buyers. I'll manage showings and agent communication, then walk you through each offer in plain language, including the price, terms, contingencies, and fine print. You'll understand what you're actually agreeing to before you respond to anything.",
+        "Professional photos, a well-written listing, and targeted marketing help reach the right buyers. I'll manage showings and agent communication, then walk you through each offer in plain language, including price, financing, contingencies, and timing. We review the choices and your questions before you respond.",
     },
     {
       number: "05",
-      title: "From Contract to Close Without the Scramble",
+      title: "From Contract to Close",
       description:
-        "Once you're under contract, I manage inspections, appraisal, repair negotiations, lender deadlines, and escrow coordination. You'll always know what's happening, what's coming next, and what I need from you. No last-minute surprises.",
+        "Once you're under contract, I coordinate deadlines, repair negotiations, and communication with the inspection, lending, and escrow teams. We work through updates and changes as they arise.",
     },
   ];
 
@@ -112,32 +113,32 @@ const Selling = () => {
     {
       question: "When is the best time to sell my home?",
       answer:
-        "There are seasonal patterns in Snohomish County. Spring and early summer tend to bring more buyers, but inventory is also higher. The honest answer is that the best time to sell is when it makes sense for your life and when the current data supports it. We'll look at what's actually happening in your specific neighborhood and price range so you can make a decision based on real information, not general market headlines.",
+        "There are seasonal patterns in Snohomish County. Spring and early summer tend to bring more buyers, but inventory is also higher. The best time to sell is when it makes sense for your life and when the current data supports it. We'll look at what's happening in your specific neighborhood and price range so you can make a decision based on real information, not general market headlines.",
     },
     {
       question: "How do we decide on a listing price?",
       answer:
-        "We look at recent comparable sales, meaning homes similar to yours that have actually closed, not just listed. We also factor in current competition, your home's condition and specific features, and your goals for timing. Pricing too high can cost you as much as pricing too low. I'll walk you through the data and explain the reasoning behind any price I recommend, so you feel confident in the strategy.",
+        "We look at recent comparable sales, meaning homes similar to yours that have closed, not just listed. We also factor in current competition, your home's condition and specific features, and your goals for timing. Pricing too high can cost you as much as pricing too low. I'll walk you through the data and explain the reasoning behind any price I recommend, so you feel confident in the strategy.",
     },
     {
       question: "Do I have to do a lot of updates before listing?",
       answer:
-        "Not necessarily. I'll tell you honestly which updates are worth it and which aren't. Some homes need a deep clean, declutter, and better staging. Others benefit from one or two targeted repairs. A few genuinely need more work to compete. I'll give you a prioritized list based on likely return and your capacity, not a generic renovation checklist.",
+        "Not necessarily. We'll weigh the likely benefit and cost of possible updates. Some homes need a deep clean, declutter, and better staging. Others benefit from one or two targeted repairs. A few genuinely need more work to compete. I'll give you a prioritized list based on likely return and your capacity, not a generic renovation checklist.",
     },
     {
       question: "What should I expect during showings?",
       answer:
-        "We'll set a showing schedule that works as well as possible with your real life, including work, kids, pets, and everything else. I'll give you clear, simple guidelines for how ready the house needs to be for each showing, and we'll make a practical plan together. You won't be scrambling every time someone wants to see it.",
+        "We'll set a showing schedule that works as well as possible with your real life, including work, kids, pets, and everything else. I'll give you clear, simple guidelines for how ready the house needs to be for each showing, and we'll make a practical plan together. Planning ahead can make showing requests easier to manage.",
     },
     {
       question: "How long will it take to sell?",
       answer:
-        "It depends on your price point, location, condition, and what the market is doing. I'll pull days-on-market data for comparable homes so you have a realistic range going in. It will not be a guess or a promise, just an honest picture. Some homes move in days; others take a few weeks. We'll plan accordingly.",
+        "It depends on your price point, location, condition, and what the market is doing. I'll pull days-on-market data for comparable homes so you have a realistic range going in. It will not be a guess or a promise, an estimate based on comparable sales. Some homes move in days; others take a few weeks. We'll plan accordingly.",
     },
     {
       question: "What if the inspection turns up issues?",
       answer:
-        "It almost always turns up something. That's what inspections are for. The question is whether those findings are deal-breakers, negotiating points, or just normal wear and tear that buyers expect. I'll help you understand what you're actually looking at, talk through your options for responding, and negotiate on your behalf so you're not giving away more than you need to.",
+        "It almost always turns up something. That's what inspections are for. The question is whether those findings are deal-breakers, negotiating points, or just normal wear and tear that buyers expect. I'll help you understand the findings, talk through your options for responding, and negotiate on your behalf with your priorities in mind.",
     },
     {
       question: "How do I know what my Snohomish County home is worth?",
@@ -208,8 +209,7 @@ const Selling = () => {
               <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                 Selling a home you've lived in and cared for is not a small thing. It's a financial decision and an
                 emotional one, often happening at the same time as whatever comes next. I help Snohomish County sellers
-                get their homes ready, priced right, and sold well without the chaos, the pressure, or the surprises
-                that should have been mentioned earlier.
+                plan preparation, review pricing, and work through offers and the steps toward closing.
               </p>
             </motion.div>
           </div>
@@ -234,9 +234,8 @@ const Selling = () => {
 
               <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                 <p>
-                  What's my home actually worth right now? What do I need to do to get it ready? And how do I time this
-                  so I'm not caught between two moves with nowhere to land? Those deserve straight answers, not vague
-                  reassurances or a pitch to list immediately.
+                  What might my home sell for? What should I do to prepare it? How do I coordinate the sale with my next
+                  move? We start with those questions and the details of your situation.
                 </p>
                 <p>
                   I read complex documents carefully and explain them plainly to people who are under stress. We'll
@@ -244,6 +243,12 @@ const Selling = () => {
                 </p>
               </div>
             </motion.div>
+            <p className="mt-8 text-center text-foreground">
+              Further reading: {" "}
+              <Link to="/blog/sell-first-or-buy-first" className="text-secondary underline underline-offset-4 hover:text-primary">
+                Should I Sell First or Buy First in Snohomish County?
+              </Link>
+            </p>
           </div>
         </section>
 
@@ -261,7 +266,7 @@ const Selling = () => {
                 From walkthrough to close...
               </p>
               <h2 className="font-heading h-section text-primary">
-                What the Process Actually Looks Like
+                The Steps in Your Sale
               </h2>
             </motion.div>
 
@@ -303,7 +308,7 @@ const Selling = () => {
               className="max-w-4xl mx-auto"
             >
               <p className="eyebrow mb-4" aria-hidden="true">
-                The fine print matters...
+                The details matter...
               </p>
 
               <h2 className="font-heading h-section text-primary mb-8">
@@ -317,9 +322,8 @@ const Selling = () => {
                   how clearly you understand your options at every step.
                 </p>
                 <p>
-                  And if you need more than just an agent, whether you're sorting through decades of belongings,
-                  coordinating with out-of-state family, or just need a steady presence on a hard day, I show up for that
-                  too. That's not an add-on. It's just how I work.
+                  If your sale also involves decades of belongings or out-of-state family, we can discuss who will handle
+                  each task, what help you need, and any costs before making the preparation plan.
                 </p>
               </div>
             </motion.div>
@@ -346,8 +350,8 @@ const Selling = () => {
 
               <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                 Covers what to do and what to skip when preparing your home for the Snohomish County market.
-                Includes pricing strategy basics, what buyers actually notice during showings, how to read an offer, and
-                what to expect from inspection to close. Straightforward, practical, no fluff.
+                Includes pricing strategy basics, what buyers notice during showings, how to read an offer, and
+                what to expect from inspection to close. A practical reference for planning your sale.
               </p>
 
               <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
@@ -377,7 +381,7 @@ const Selling = () => {
                 <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                   Wondering what your home could realistically sell for right now? Share a few details below and I'll
                   put together a thoughtful evaluation based on your home, recent sales, and current market conditions.
-                  No obligation, no pressure to list.
+                  This is a market analysis, not an appraisal, and there is no obligation to list.
                 </p>
               </div>
 
diff --git a/src/pages/areas/Arlington.tsx b/src/pages/areas/Arlington.tsx
index 2abe397..4b482a8 100644
--- a/src/pages/areas/Arlington.tsx
+++ b/src/pages/areas/Arlington.tsx
@@ -70,7 +70,7 @@ const Arlington = () => {
         {/* Balanced */}
         <section className="section bg-warm-bg">
           <div className="container mx-auto px-4 max-w-6xl">
-            <h2 className="font-heading h-section text-primary mb-10 text-center">An Honest Look</h2>
+            <h2 className="font-heading h-section text-primary mb-10 text-center">Downtown, Smokey Point & Rural Edges</h2>
             <div className="grid md:grid-cols-2 gap-10">
               <div>
                 <h3 className="font-body text-2xl md:text-3xl font-semibold text-primary mb-5">Why Buyers Consider It</h3>
@@ -121,7 +121,7 @@ const Arlington = () => {
         {/* Housing and location */}
         <section className="section bg-background">
           <div className="container mx-auto px-4 max-w-3xl">
-            <h2 className="font-heading h-section text-primary mb-6">Housing and Location Considerations</h2>
+            <h2 className="font-heading h-section text-primary mb-6">In-Town Homes and Rural Property</h2>
             <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
               In-town Arlington tends toward established homes on smaller, platted lots with city water and
               sewer. Newer growth areas, particularly near Smokey Point, bring more recent construction and, in
@@ -140,7 +140,7 @@ const Arlington = () => {
 
         <section className="section bg-background">
           <div className="container mx-auto px-4 max-w-6xl">
-            <h2 className="font-heading h-section text-primary mb-8 text-center">Practical Notes for Buyers and Sellers</h2>
+            <h2 className="font-heading h-section text-primary mb-8 text-center">Preparing to Buy or Sell in Arlington</h2>
             <div className="grid md:grid-cols-2 gap-6">
               <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Buyers</h3><p className="copy text-foreground"><strong>Verify jurisdiction, utilities, and access early.</strong> Arlington addresses can represent in-city homes, newer development, or rural property. Wells, septic systems, private roads, airport proximity, and future land-use plans can matter as much as the house itself.</p></div>
               <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Sellers</h3><p className="copy text-foreground"><strong>Gather rural-property records before listing.</strong> Septic documents, well information, surveys, easements, permits, and private-road agreements help buyers understand the property and reduce avoidable delays once you are under contract.</p></div>
@@ -151,7 +151,7 @@ const Arlington = () => {
         {/* Community */}
         <section className="section bg-warm-bg">
           <div className="container mx-auto px-4 max-w-3xl">
-            <h2 className="font-heading h-section text-primary mb-6">Parks, Trails, and Everyday Life</h2>
+            <h2 className="font-heading h-section text-primary mb-6">Trails, Parks & Downtown Stops</h2>
             <p className="text-base md:text-lg text-foreground leading-relaxed">
               The Centennial Trail runs through the area and is a genuine daily-use amenity for walking, running,
               and cycling. The Airport Trail adds a shorter local loop, and Centennial Park along with the city's
diff --git a/src/pages/areas/BothellMillCreek.tsx b/src/pages/areas/BothellMillCreek.tsx
index ff9b6e4..90c46e2 100644
--- a/src/pages/areas/BothellMillCreek.tsx
+++ b/src/pages/areas/BothellMillCreek.tsx
@@ -71,7 +71,7 @@ const BothellMillCreek = () => {
         {/* Balanced */}
         <section className="section bg-warm-bg">
           <div className="container mx-auto px-4 max-w-6xl">
-            <h2 className="font-heading h-section text-primary mb-10 text-center">An Honest Look</h2>
+            <h2 className="font-heading h-section text-primary mb-10 text-center">Two Communities, Different Property Details</h2>
             <div className="grid md:grid-cols-2 gap-10">
               <div>
                 <h3 className="font-body text-2xl md:text-3xl font-semibold text-primary mb-5">Why Buyers Consider It</h3>
@@ -122,7 +122,7 @@ const BothellMillCreek = () => {
         {/* Housing and location */}
         <section className="section bg-background">
           <div className="container mx-auto px-4 max-w-3xl">
-            <h2 className="font-heading h-section text-primary mb-6">Housing and Location Considerations</h2>
+            <h2 className="font-heading h-section text-primary mb-6">County Lines, Associations & Housing Choices</h2>
             <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
               Because Bothell spans a county boundary and includes both older neighborhoods and newer infill,
               the same search can return very different properties. Some are inside city limits, some are in
@@ -140,7 +140,7 @@ const BothellMillCreek = () => {
 
         <section className="section bg-background">
           <div className="container mx-auto px-4 max-w-6xl">
-            <h2 className="font-heading h-section text-primary mb-8 text-center">Practical Notes for Buyers and Sellers</h2>
+            <h2 className="font-heading h-section text-primary mb-8 text-center">Planning a Bothell or Mill Creek Move</h2>
             <div className="grid md:grid-cols-2 gap-6">
               <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Buyers</h3><p className="copy text-foreground"><strong>Check the parcel, not just the mailing address.</strong> County, school district, taxes, utilities, HOA rules, and commute routes can change within a short distance. For condos and townhomes, review the association budget, reserves, insurance, and meeting minutes before committing.</p></div>
               <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Sellers</h3><p className="copy text-foreground"><strong>Make the location differences easy to understand.</strong> Clear information about schools, county, commuting options, nearby trails, association details, and recent improvements helps buyers compare your home accurately with properties carrying the same city name.</p></div>
diff --git a/src/pages/areas/EverettMukilteo.tsx b/src/pages/areas/EverettMukilteo.tsx
index c8d10fd..37d171a 100644
--- a/src/pages/areas/EverettMukilteo.tsx
+++ b/src/pages/areas/EverettMukilteo.tsx
@@ -50,8 +50,7 @@ const EverettMukilteo = () => {
               <p
                 className="photo-text-shadow font-heading text-xl md:text-2xl max-w-2xl mx-auto"
               >
-                Snohomish County's largest city is reinventing its waterfront and downtown. Mukilteo has always
-                been one of the most beautiful spots on Puget Sound.
+                Snohomish County's largest city is reinventing its waterfront and downtown. Mukilteo brings a shoreline setting, lighthouse park, and ferry connections on Puget Sound.
               </p>
             </motion.div>
           </div>
@@ -92,7 +91,7 @@ const EverettMukilteo = () => {
               variants={fadeInUp}
               transition={{ duration: 0.6 }}
             >
-              <p className="eyebrow mb-4">The honest breakdown...</p>
+              <p className="eyebrow mb-4">A closer look at Everett...</p>
               <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">Everett's Neighborhoods</h2>
 
               <div className="space-y-8 text-foreground text-base leading-relaxed">
@@ -139,7 +138,7 @@ const EverettMukilteo = () => {
                 <div>
                   <h3 className="font-heading text-xl font-bold text-primary mb-2">Lowell & the Snohomish River</h3>
                   <p>
-                    Quieter, more affordable, historic. The Lowell Riverfront Park trail runs along the river where the
+                    Historic homes and a riverfront setting. The Lowell Riverfront Park trail runs along the river where the
                     Snohomish meets the sloughs and wetlands of the delta. Water is always close in Everett, whether it is the river,
                     Union Slough, Port Gardner Bay, Possession Sound. It shapes how the city feels in ways that are hard
                     to describe until you've spent time here.
@@ -169,7 +168,7 @@ const EverettMukilteo = () => {
               transition={{ duration: 0.6 }}
             >
               <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
-                The Honest Pros and Cons
+                Waterfront Life & Practical Considerations
               </h2>
               <div className="grid md:grid-cols-2 gap-10">
                 <div>
@@ -253,8 +252,8 @@ const EverettMukilteo = () => {
                     <li className="flex gap-2">
                       <span className="text-secondary font-bold">•</span>
                       <span>
-                        <strong>Mukilteo view homes</strong> command a significant premium. Budget accordingly if
-                        waterfront is the goal.
+                        <strong>Mukilteo view homes</strong> vary in price by view, condition, location, and property type. Compare
+                        individual listings with your budget.
                       </span>
                     </li>
                   </ul>
@@ -310,10 +309,9 @@ const EverettMukilteo = () => {
               <h3 className="font-heading text-xl font-bold text-primary mb-3">Everett food & drink</h3>
               <p className="text-foreground text-base leading-relaxed mb-6">
                 The scene reflects the city's genuine diversity. Vietnamese, Mexican, Chinese, Filipino, and Italian
-                immigrant-owned restaurants throughout the city make Everett one of the most interesting places to eat
-                in the county. Craft breweries and taprooms have taken hold alongside wine bars and cocktail bars
+                restaurants are among the choices throughout the city. Craft breweries and taprooms have taken hold alongside wine bars and cocktail bars
                 following the downtown revitalization energy. Tacos and Beer, at 1405 Hewitt Avenue in downtown
-                Everett, is a longtime local favorite. Nothing overpriced or pretentious.
+                Everett, is a longtime local favorite. 
               </p>
 
               <h3 className="font-heading text-xl font-bold text-primary mb-3">Planned Downtown Event Center</h3>
@@ -373,13 +371,18 @@ const EverettMukilteo = () => {
                 </p>
                 <p>
                   The Sounder commuter rail station connects directly to King Street Station in Seattle, a genuinely
-                  good option if you're commuting south. Homes with water views command a premium. If schools are part of
+                  good option if you're commuting south. Prices vary by view, condition, and location. If schools are part of
                   your decision, review current district information and confirm the assignment for the exact address. The community is tight-knit and quiet. For most errands you're heading into
-                  Everett because Mukilteo is small by design. For buyers who want Puget Sound waterfront at a price point
-                  below King County, it deserves a serious look.
+                  Everett because Mukilteo is small by design. If shoreline access matters to you, compare the specific homes, routes, and services that fit your routine.
                 </p>
               </div>
             </motion.div>
+            <p className="mt-8 text-center text-foreground">
+              Further reading: {" "}
+              <Link to="/blog/va-home-buyers-naval-station-everett" className="text-secondary underline underline-offset-4 hover:text-primary">
+                What Should VA Buyers Know Before Shopping Near Naval Station Everett?
+              </Link>
+            </p>
           </div>
         </section>
 
diff --git a/src/pages/areas/LakeStevens.tsx b/src/pages/areas/LakeStevens.tsx
index 2b4b11d..8366883 100644
--- a/src/pages/areas/LakeStevens.tsx
+++ b/src/pages/areas/LakeStevens.tsx
@@ -21,7 +21,7 @@ const LakeStevens = () => {
     <div className="min-h-screen">
       <SEO
         title="Living in Lake Stevens, WA | Homes for Sale | Debbie Welch Homes"
-        description="Thinking about buying a home in Lake Stevens, WA? A lifelong local's honest take on the lake, the schools, the commute, and what daily life actually looks like here."
+        description="Thinking about buying a home in Lake Stevens, WA? A local guide to lake access, housing, school-assignment checks, and commute routes for everyday life."
         canonical="/areas/lake-stevens"
       />
       <Navigation />
@@ -91,7 +91,7 @@ const LakeStevens = () => {
               transition={{ duration: 0.6 }}
             >
               <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
-                The Honest Pros and Cons
+                Lake Access, Housing & Everyday Tradeoffs
               </h2>
               <div className="grid md:grid-cols-2 gap-10">
                 <div>
@@ -128,15 +128,13 @@ const LakeStevens = () => {
                       <span className="text-secondary font-bold">•</span>
                       <span>
                         <strong>Some neighborhoods carry their own private lake access through the HOA.</strong> This is
-                        separate from the four public parks. It isn't something you'll find by browsing listings. It is
-                        the kind of detail that comes from knowing the city's micro-neighborhoods, not just the big
-                        picture.
+                        separate from the four public parks. Confirm any access rights, rules, and dues in the association documents for the specific property.
                       </span>
                     </li>
                     <li className="flex gap-2">
                       <span className="text-secondary font-bold">•</span>
                       <span>
-                        <strong>More house for the money.</strong> Prices vary by neighborhood, home size and lot,
+                        <strong>Housing choices and lot sizes.</strong> Prices vary by neighborhood, home size and lot,
                         with established neighborhoods and room to spread out.
                       </span>
                     </li>
@@ -152,7 +150,7 @@ const LakeStevens = () => {
                       <span className="text-secondary font-bold">•</span>
                       <span>
                         <strong>Real community events.</strong> Aquafest, holiday markets, and the Farmer's Market are
-                        community events where people actually show up.
+                        part of the local calendar.
                       </span>
                     </li>
                   </ul>
@@ -184,8 +182,7 @@ const LakeStevens = () => {
                     <li className="flex gap-2">
                       <span className="text-secondary font-bold">•</span>
                       <span>
-                        <strong>Further from I-5</strong> than Marysville or Everett. The beauty-and-price tradeoff is
-                        real, but so is the distance.
+                        <strong>Further from I-5</strong> than Marysville or Everett. Consider the route from each home to the destinations you use.
                       </span>
                     </li>
                   </ul>
@@ -244,6 +241,12 @@ const LakeStevens = () => {
                 Lake Stevens School District →
               </a>
             </motion.div>
+            <p className="mt-8 text-center text-foreground">
+              Further reading: {" "}
+              <Link to="/blog/downsizing-sell-buy-snohomish-county" className="text-secondary underline underline-offset-4 hover:text-primary">
+                How Do I Coordinate Selling and Buying During a Downsizing Move?
+              </Link>
+            </p>
           </div>
         </section>
 
@@ -262,8 +265,7 @@ const LakeStevens = () => {
                 Homes for Sale in Lake Stevens
               </h2>
               <p className="text-foreground text-lg leading-relaxed mb-8">
-                Browse current listings or reach out and I'll put together a custom search. I know the neighborhoods
-                well enough to tell you which ones to look at first.
+                Browse current listings or reach out and I'll put together a custom search. We can narrow the options using your budget, commute, and property needs.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8" asChild>
diff --git a/src/pages/areas/Marysville.tsx b/src/pages/areas/Marysville.tsx
index 07e8d08..5c725fe 100644
--- a/src/pages/areas/Marysville.tsx
+++ b/src/pages/areas/Marysville.tsx
@@ -49,8 +49,8 @@ const Marysville = () => {
               <p
                 className="photo-text-shadow font-heading text-xl md:text-2xl max-w-2xl mx-auto"
               >
-                My hometown is Snohomish County's strawberry city, still growing and still genuinely affordable for the
-                right buyer.
+                My hometown is Snohomish County's strawberry city, with established neighborhoods, newer homes, and
+                local parks. Prices vary by home, location, and market conditions.
               </p>
             </motion.div>
           </div>
@@ -91,7 +91,7 @@ const Marysville = () => {
               transition={{ duration: 0.6 }}
             >
               <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
-                The Honest Pros and Cons
+                Housing, Parks & Getting Around
               </h2>
               <div className="grid md:grid-cols-2 gap-10">
                 <div>
@@ -127,7 +127,7 @@ const Marysville = () => {
                     <li className="flex gap-2">
                       <span className="text-secondary font-bold">•</span>
                       <span>
-                        <strong>Whiskey Ridge is worth serious attention if school district matters to you.</strong>{" "}
+                        <strong>Check school assignment by address in Whiskey Ridge.</strong>{" "}
                         This northwest growth area has added more than a thousand homes in recent years, and a
                         meaningful share of them fall within Lake Stevens School District boundaries rather than
                         Marysville's, even though they're inside Marysville city limits. If district assignment is part of your
@@ -213,7 +213,7 @@ const Marysville = () => {
               transition={{ duration: 0.6 }}
             >
               <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
-                Housing and Location Fit
+                Matching a Marysville Home to Your Routine
               </h2>
               <p className="text-foreground text-lg leading-relaxed text-center">
                 Marysville offers a range of established homes and newer construction with access to I-5, Highway 9,
@@ -222,6 +222,12 @@ const Marysville = () => {
                 District.
               </p>
             </motion.div>
+            <p className="mt-8 text-center text-foreground">
+              Further reading: {" "}
+              <Link to="/blog/first-time-home-buyers-marysville-wa" className="text-secondary underline underline-offset-4 hover:text-primary">
+                What Should First-Time Buyers Know About Buying a Home in Marysville?
+              </Link>
+            </p>
           </div>
         </section>
 
@@ -240,8 +246,8 @@ const Marysville = () => {
                 Homes for Sale in Marysville
               </h2>
               <p className="text-foreground text-lg leading-relaxed mb-8">
-                Browse current listings or reach out and I'll put together a custom search. This is my hometown. I know
-                it well enough to tell you exactly which areas and school boundaries fit what you're looking for.
+                Browse current listings or reach out and I'll put together a custom search. This is my hometown, and I can help you compare homes using your budget,
+                commute, and property needs. Confirm school assignment directly with the district.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8" asChild>
diff --git a/src/pages/areas/Snohomish.tsx b/src/pages/areas/Snohomish.tsx
index 7618535..1910604 100644
--- a/src/pages/areas/Snohomish.tsx
+++ b/src/pages/areas/Snohomish.tsx
@@ -69,7 +69,7 @@ const Snohomish = () => {
         {/* Balanced */}
         <section className="section bg-warm-bg">
           <div className="container mx-auto px-4 max-w-6xl">
-            <h2 className="font-heading h-section text-primary mb-10 text-center">An Honest Look</h2>
+            <h2 className="font-heading h-section text-primary mb-10 text-center">Historic Character & Property Questions</h2>
             <div className="grid md:grid-cols-2 gap-10">
               <div>
                 <h3 className="font-body text-2xl md:text-3xl font-semibold text-primary mb-5">Why Buyers Consider It</h3>
@@ -120,7 +120,7 @@ const Snohomish = () => {
         {/* Housing and location */}
         <section className="section bg-background">
           <div className="container mx-auto px-4 max-w-3xl">
-            <h2 className="font-heading h-section text-primary mb-6">Housing and Location Considerations</h2>
+            <h2 className="font-heading h-section text-primary mb-6">Older Homes, Acreage & City Limits</h2>
             <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
               Housing here ranges from older in-town homes on established streets, to newer subdivisions, to
               rural parcels with acreage. With the older stock, it is worth budgeting time for a thorough
@@ -130,15 +130,14 @@ const Snohomish = () => {
             </p>
             <p className="text-base md:text-lg text-foreground leading-relaxed">
               Outside the city, well and septic systems, private roads, easements, and land-use designations
-              come into play. Near the rivers, elevation and flood mapping matter. These are all answerable
-              questions. They just need to be answered for the specific parcel rather than the general area.
+              come into play. Near the rivers, elevation and flood mapping matter. Research these questions for the specific parcel; some findings may affect whether the property fits your plans.
             </p>
           </div>
         </section>
 
         <section className="section bg-background">
           <div className="container mx-auto px-4 max-w-6xl">
-            <h2 className="font-heading h-section text-primary mb-8 text-center">Practical Notes for Buyers and Sellers</h2>
+            <h2 className="font-heading h-section text-primary mb-8 text-center">Preparing an Older or Rural Home</h2>
             <div className="grid md:grid-cols-2 gap-6">
               <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Buyers</h3><p className="copy text-foreground"><strong>Plan for the age and setting of the property.</strong> Older systems, flood mapping, shoreline or river proximity, wells, septic systems, easements, and historic considerations all deserve address-specific review before an offer becomes firm.</p></div>
               <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Sellers</h3><p className="copy text-foreground"><strong>Documentation helps buyers see character instead of uncertainty.</strong> Permits, repair records, system ages, utility information, flood insurance history when applicable, and details about thoughtful updates can make an older or rural property easier to evaluate.</p></div>
diff --git a/src/pages/areas/SnohomishCounty.tsx b/src/pages/areas/SnohomishCounty.tsx
index 78ae71e..084f9d8 100644
--- a/src/pages/areas/SnohomishCounty.tsx
+++ b/src/pages/areas/SnohomishCounty.tsx
@@ -20,7 +20,7 @@ const areas = [
     name: "Everett & Mukilteo",
     path: "/areas/everett-mukilteo",
     blurb:
-      "The county's urban core plus a waterfront neighbor. The widest range of housing ages, price points, and city services in one place.",
+      "The county's urban core plus a waterfront neighbor. A varied mix of housing ages, price points, and city services.",
   },
   {
     name: "Marysville",
@@ -146,8 +146,8 @@ const SnohomishCounty = () => {
               with different services and permitting.
             </p>
             <p className="text-base md:text-lg text-foreground leading-relaxed">
-              This is not a warning meant to worry you. It is simply the reason I verify these details for the
-              specific parcel, every time, rather than relying on what the listing headline says.
+              We check the relevant records for the specific parcel, and confirm information with the district,
+              jurisdiction, or service provider rather than relying on the listing headline alone.
             </p>
           </div>
         </section>
@@ -182,6 +182,12 @@ const SnohomishCounty = () => {
                 <span><strong>Seller documentation.</strong> Permits, repair history, utility details, HOA records, and well or septic information can make a property easier to evaluate and help prevent closing delays.</span>
               </li>
             </ul>
+            <p className="mt-8 text-center text-foreground">
+              Further reading: {" "}
+              <Link to="/blog/relocating-guide" className="text-secondary underline underline-offset-4 hover:text-primary">
+                Relocating to Snohomish County: What I Tell My Military &amp; Out-of-Area Buyers
+              </Link>
+            </p>
           </div>
         </section>
 
diff --git a/src/pages/areas/StanwoodCamano.tsx b/src/pages/areas/StanwoodCamano.tsx
index c110623..7cc6cfe 100644
--- a/src/pages/areas/StanwoodCamano.tsx
+++ b/src/pages/areas/StanwoodCamano.tsx
@@ -59,8 +59,8 @@ const StanwoodCamano = () => {
               </p>
               <p className="text-base md:text-lg text-foreground leading-relaxed">
                 The most important practical distinction is jurisdictional. Stanwood is in Snohomish County.
-                Camano Island is in Island County. That single line changes taxes, services, permitting, school
-                districts, and sometimes insurance. People often shop both in one afternoon, which is exactly
+                Camano Island is in Island County. County jurisdiction affects taxes, services, and permitting. School assignment and insurance
+                need separate checks for the exact property. People often shop both in one afternoon, which is exactly
                 why it is worth being clear about which side of the water any given property sits on.
               </p>
             </div>
@@ -70,7 +70,7 @@ const StanwoodCamano = () => {
         {/* Balanced */}
         <section className="section bg-warm-bg">
           <div className="container mx-auto px-4 max-w-6xl">
-            <h2 className="font-heading h-section text-primary mb-10 text-center">An Honest Look</h2>
+            <h2 className="font-heading h-section text-primary mb-10 text-center">Mainland and Island Living</h2>
             <div className="grid md:grid-cols-2 gap-10">
               <div>
                 <h3 className="font-body text-2xl md:text-3xl font-semibold text-primary mb-5">Why Buyers Consider It</h3>
@@ -121,7 +121,7 @@ const StanwoodCamano = () => {
         {/* Housing and location */}
         <section className="section bg-background">
           <div className="container mx-auto px-4 max-w-3xl">
-            <h2 className="font-heading h-section text-primary mb-6">Housing and Location Considerations</h2>
+            <h2 className="font-heading h-section text-primary mb-6">Waterfront, Rural & In-Town Properties</h2>
             <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
               In Stanwood, you will find in-town homes with city utilities alongside rural and agricultural
               parcels just outside. On Camano Island, many properties rely on wells and septic systems, and
@@ -130,14 +130,14 @@ const StanwoodCamano = () => {
             </p>
             <p className="text-base md:text-lg text-foreground leading-relaxed">
               Many of these questions can be worked through, though some findings may change your decision. They take a slower, more document-driven process than a standard
-              in-city purchase, and it is far cheaper to ask the questions during inspection than after closing.
+              in-city purchase, and it helps to understand the findings and possible costs before committing.
             </p>
           </div>
         </section>
 
         <section className="section bg-background">
           <div className="container mx-auto px-4 max-w-6xl">
-            <h2 className="font-heading h-section text-primary mb-8 text-center">Practical Notes for Buyers and Sellers</h2>
+            <h2 className="font-heading h-section text-primary mb-8 text-center">Records to Gather and Questions to Ask</h2>
             <div className="grid md:grid-cols-2 gap-6">
               <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Buyers</h3><p className="copy text-foreground"><strong>Allow extra time for property-specific research.</strong> County jurisdiction, wells, septic systems, private roads, shared access, shoreline rules, drainage, bluff conditions, insurance, and travel time to daily services should all be understood before closing.</p></div>
               <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Sellers</h3><p className="copy text-foreground"><strong>Prepare the records that explain how the property works.</strong> Well and septic documents, road agreements, surveys, permits, maintenance history, shoreline information, and insurance details can prevent a distinctive property from feeling unnecessarily complicated.</p></div>
@@ -166,8 +166,8 @@ const StanwoodCamano = () => {
               <li className="flex gap-2">
                 <span className="text-secondary font-bold">•</span>
                 <span>
-                  Confirm school assignment with the correct district for the exact address, which differs
-                  across the two counties.
+                  Confirm school assignment directly with the district for the exact address; county lines do not
+                  establish school boundaries.
                 </span>
               </li>
               <li className="flex gap-2">
```
