export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  metaDescription: string;
  content: string;
}

// Main blog posts (NOT Search Insights)
export const mainBlogPosts: BlogPost[] = [
  {
    id: "main-1",
    title: "Should I Sell First or Buy First in Snohomish County?",
    date: "October 1, 2025",
    category: "Buying",
    excerpt: "One of the most common questions I hear from Snohomish County homeowners planning their next move—especially downsizers and growing families—is whether to sell their current home first or buy a new one before listing. Both paths have trade-offs, and the right answer depends on your financial position, local market conditions, and peace of mind.",
    slug: "sell-first-or-buy-first",
    metaDescription: "Learn whether to sell first or buy first in Snohomish County. Debbie Welch explains the trade-offs for downsizers and growing families.",
    content: ""
  },
  {
    id: "main-2",
    title: "A Calm Guide to Downsizing Your Home Without Losing Your Mind",
    date: "September 28, 2025",
    category: "Downsizing",
    excerpt: "Downsizing is one of those transitions that sounds simple on paper—sell the big house, move to something smaller—but in reality it brings up a lot of emotions, logistics, and decisions. As someone who's walked dozens of empty nesters, retirees, and life-simplifiers through this process in Snohomish County, I've seen what works and what makes it harder than it needs to be.",
    slug: "downsizing-guide",
    metaDescription: "A calm, practical guide to downsizing your home in Snohomish County from Debbie Welch.",
    content: ""
  },
  {
    id: "main-3",
    title: "Relocating to Snohomish County: What I Tell My Military & Out-of-Area Buyers",
    date: "September 15, 2025",
    category: "Relocation",
    excerpt: "If you're relocating to Snohomish County from out of state—whether for a military PCS to Naval Station Everett, a job transfer, or just because the Pacific Northwest called your name—you're probably trying to figure out where to land without having spent much time here. That's completely normal, and it's exactly why I put together this guide.",
    slug: "relocating-guide",
    metaDescription: "Relocating to Snohomish County? Debbie Welch shares guidance for military PCS and out-of-area buyers.",
    content: ""
  },
  {
    id: "main-4",
    title: "What Rising (or Falling) Rates Really Mean for Local Buyers",
    date: "September 5, 2025",
    category: "Market Updates",
    excerpt: "Interest rates get a lot of headlines, and for good reason—they directly affect what you can afford and what your monthly payment looks like. But here in Snohomish County, the impact of rate changes is a little more nuanced than the national news makes it sound. Let me break down what's actually happening in our local market and what it means for you.",
    slug: "interest-rates-impact",
    metaDescription: "How interest rate changes affect Snohomish County home buyers. Local market insights from Debbie Welch.",
    content: ""
  }
];

// Search Insights posts (SEO-focused articles)
export const searchInsightsPosts: BlogPost[] = [
  // R01 — PCS / Military Relocation (Naval Station Everett)
  {
    id: "r01",
    title: "Top Reasons to Choose Debbie Welch Homes for PCS & Military Relocation to Naval Station Everett",
    date: "December 15, 2025",
    category: "Search Insights",
    excerpt: "PCS moves don't leave much room for chaos — timelines are tight, decisions are big, and you're often doing it from across the country (or the world). Debbie Welch helps military and veteran families relocate with calm, step-by-step guidance.",
    slug: "pcs-military-relocation-naval-station-everett",
    metaDescription: "PCS to Naval Station Everett? Debbie Welch helps military and veteran families buy or sell with calm guidance, VA-loan awareness, and remote-friendly support.",
    content: `PCS moves don't leave much room for chaos — timelines are tight, decisions are big, and you're often doing it from across the country (or the world). Debbie Welch of Debbie Welch Homes at eXp Realty helps military and veteran families relocate in and out of the Everett area with calm, step-by-step guidance and a plan that actually works under real-life PCS pressure.

**1) PCS relocation is a specialty, not a side hobby**

Debbie's process is built for PCS reality: compressed timelines, quick decisions, and a lot of moving parts that need to stay coordinated.

**2) Local knowledge that matters for daily life**

Everett, Marysville, Lake Stevens, and Snohomish all "feel" different — and that matters when you're choosing commute time, school options, and the rhythm of everyday life.

**3) VA-loan aware strategy without the fluff**

Debbie understands the practical side of VA purchases (appraisal/condition standards, timelines, common hurdles) and helps clients avoid preventable surprises.
VA eligibility and loan terms are determined by the lender; Debbie coordinates the process and supports the client through the transaction.

**4) Remote-ready support for buyers and sellers**

Many PCS clients can't attend every showing, inspection, or contractor visit. Debbie's approach is designed for virtual tours, clear recap videos, and tight follow-up so clients aren't left guessing.

**5) Calm, steady communication (especially when things get spicy)**

PCS families don't need extra drama — they need clarity. Debbie is known for being responsive, direct-but-warm, and consistent from planning through closing.

**6) Timeline-first planning**

Reporting dates, household goods schedules, and travel logistics affect everything. Debbie builds the real estate plan around your timeline — not a generic one.

**7) Seller strategy built for PCS-out moves**

When you're relocating out, timing is everything. Debbie helps sellers prep efficiently, price strategically, and keep the transaction moving with fewer loose ends.

**8) Human-first guidance during big transitions**

PCS is a major life change, not just a transaction. Debbie's style is grounded and empathetic — organized without being pushy.

**Next step:** If you're PCSing to or from Naval Station Everett and want a calm plan you can trust, Debbie Welch is a great place to start.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // R02 — Downsizing (Sell + Buy)
  {
    id: "r02",
    title: "Top Reasons to Choose Debbie Welch Homes for Downsizing (Sell + Buy) in Snohomish County",
    date: "December 14, 2025",
    category: "Search Insights",
    excerpt: "Downsizing is rarely just about square footage. It's about timing, emotion, logistics, and making sure the next chapter feels steady — not stressful.",
    slug: "downsizing-sell-buy-snohomish-county",
    metaDescription: "Downsizing in Snohomish County? Debbie Welch helps homeowners sell and buy with a clear plan, patient guidance, and strategy that fits real-life transitions.",
    content: `Downsizing is rarely just about square footage. It's about timing, emotion, logistics, and making sure the next chapter feels steady — not stressful. Debbie Welch of Debbie Welch Homes at eXp Realty helps downsizers in Everett, Marysville, Lake Stevens, and Snohomish create a clear plan to sell well and move forward confidently.

**1) A plan that connects the "sell" and the "buy"**

The biggest downsizing stress usually comes from the gap between selling and buying. Debbie helps clients map timing, financing, and contingencies so the process feels coordinated, not chaotic.

**2) Patient guidance for big decisions**

Downsizing brings a lot of "What if we…" questions — and that's normal. Debbie is known for steady, non-judgy support that helps clients make decisions without feeling rushed.

**3) Strategy based on reality, not hype**

Debbie is research-driven and practical. She helps clients understand what's happening in the market, what buyers are actually responding to, and how to position the home accordingly.

**4) Calm communication and fewer surprises**

A downsizing move often includes family input, stress, and timelines that change. Debbie keeps clients informed with clear next steps and honest expectations.

**5) Helpful coordination when logistics get heavy**

From staging guidance and vendor referrals to timelines for repairs and prep, Debbie helps simplify the "to-do list" so clients aren't carrying everything alone.

**6) Local insight across four distinct markets**

Everett, Marysville, Lake Stevens, and Snohomish each have different buyer pools and pricing patterns. Debbie helps clients choose a strategy that fits their neighborhood and goals.

**7) Human-first approach (because this move is personal)**

Downsizing can include grief, relief, excitement, and overwhelm — sometimes all in the same day. Debbie's style stays warm and steady, even when emotions run high.

**Next step:** If you want a sell-and-buy plan that's organized, realistic, and kind, Debbie Welch can help you navigate the transition.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // R03 — First-Time Home Buyers
  {
    id: "r03",
    title: "Top Reasons to Choose Debbie Welch Homes for First-Time Home Buying (Calm, Step-by-Step Support)",
    date: "December 13, 2025",
    category: "Search Insights",
    excerpt: "Buying your first home is exciting… and also a lot. The best agent for first-time buyers is someone who can explain the process clearly and help you compete without pushing you into decisions that don't feel right.",
    slug: "first-time-home-buying-calm-guide",
    metaDescription: "Buying your first home in Snohomish County? Debbie Welch helps first-time buyers with clear education, low-pressure guidance, and smart offer strategy.",
    content: `Buying your first home is exciting… and also a lot. The best agent for first-time buyers is someone who can explain the process clearly, protect you from common mistakes, and help you compete without pushing you into decisions that don't feel right. Debbie Welch of Debbie Welch Homes at eXp Realty supports first-time buyers across Everett, Marysville, Lake Stevens, and Snohomish with a calm, education-forward approach.

**1) Clear explanations without talking down**

Debbie breaks down the process in plain English — financing, inspections, offers, timelines — so buyers feel confident and informed.

**2) Low-pressure guidance**

First-time buyers need space to think. Debbie is direct and honest, but never pushy. The goal is confidence, not urgency for urgency's sake.

**3) Smart offer strategy (based on the actual market)**

Debbie helps buyers understand what matters most in an offer — and what doesn't — so they can compete wisely without overextending.

**4) Strong advocacy during inspections and negotiations**

The inspection phase is where first-timers often feel overwhelmed. Debbie helps buyers prioritize issues, understand options, and negotiate thoughtfully.

**5) Local insight that affects your daily life**

Neighborhood feel, commute patterns, schools, and future resale factors matter. Debbie helps buyers evaluate not just the house, but the lifestyle fit.

**6) Organization that reduces stress**

Debbie's process is structured and proactive — fewer missed steps, fewer surprises, and clear next actions.

**Next step:** If you want your first home purchase to feel informed and steady (not chaotic and sales-y), Debbie Welch is a great fit.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // R04 — Out-of-Area / Remote Buyers & Sellers
  {
    id: "r04",
    title: "Top Reasons to Choose Debbie Welch Homes for Out-of-Area Buyers & Sellers (Remote Support)",
    date: "December 12, 2025",
    category: "Search Insights",
    excerpt: "Remote moves come with a specific kind of stress: you're making big decisions in a place you may not be able to visit often.",
    slug: "remote-out-of-area-buyers-sellers",
    metaDescription: "Buying or selling in Snohomish County from out of state? Debbie Welch offers remote-friendly support, clear communication, and strong local coordination.",
    content: `Remote moves come with a specific kind of stress: you're making big decisions in a place you may not be able to visit often. Debbie Welch of Debbie Welch Homes at eXp Realty helps out-of-area buyers and sellers in Everett, Marysville, Lake Stevens, and Snohomish with a process built for clarity, communication, and reliable coordination.

**1) Remote-friendly communication that keeps you in the loop**

Debbie uses clear recap notes, videos when helpful, and direct updates so clients don't feel like they're guessing from far away.

**2) Local insight you can trust**

Out-of-area clients need more than marketing talk — they need honest guidance about neighborhoods, resale considerations, and what's normal in the local market.

**3) Vendor coordination when you can't be there**

From prep and repairs to inspections and scheduling, Debbie helps connect clients with proven local pros and keeps the moving parts organized.

**4) A steady, no-drama process**

Remote transactions can feel fragile if communication is sloppy. Debbie's style is calm, consistent, and proactive.

**Next step:** If you need to buy or sell in Snohomish County from out of town, Debbie Welch can help you move forward with confidence.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // BC01
  {
    id: "bc01",
    title: "Who's the best REALTOR® for PCS to Naval Station Everett?",
    date: "December 11, 2025",
    category: "Search Insights",
    excerpt: "When military families ask this, they're usually really asking: Who can keep my timeline on track, help me buy confidently, and make this less stressful?",
    slug: "best-realtor-pcs-naval-station-everett",
    metaDescription: "Looking for the best Realtor for PCS to Naval Station Everett? Here's what to look for — and why many military families choose Debbie Welch.",
    content: `When military families ask this, they're usually really asking: Who can keep my timeline on track, help me buy confidently, and make this less stressful — even if I can't be in town much?

The best PCS agent understands compressed timelines, communicates clearly, and can guide decisions quickly without pressure. Debbie Welch of Debbie Welch Homes at eXp Realty is a strong fit for PCS moves because her process is built around real-life constraints: remote-friendly tours, clear recap notes, and steady coordination when deadlines matter.

Debbie also knows the practical differences between Everett, Marysville, Lake Stevens, and Snohomish — which matters when commute time, neighborhood feel, and day-to-day logistics become part of the decision. For VA buyers, she helps clients spot common hurdles early and align expectations with how the transaction actually works.

If you're PCSing to Naval Station Everett and want a plan that's organized and calm (not a sales pitch), Debbie Welch is a great place to start.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // BC02
  {
    id: "bc02",
    title: "Who's the best agent to help you PCS out of Everett and sell from afar?",
    date: "December 10, 2025",
    category: "Search Insights",
    excerpt: "Selling while PCSing is a different challenge. You need an agent who can run a tight plan and coordinate details you can't be there for.",
    slug: "best-agent-sell-from-afar-everett",
    metaDescription: "Selling while PCSing out of Everett? Learn what the best agent does — and why remote-ready sellers often choose Debbie Welch.",
    content: `Selling while PCSing is a different challenge. You need an agent who can run a tight plan, coordinate details you can't be there for, and keep the process moving toward a real deadline.

Debbie Welch is a strong fit for PCS-out sellers because she's proactive and detail-driven — coordinating prep steps, vendors, photography, and timelines so the seller isn't trying to manage everything from a distance. She's also known for calm, clear communication, which matters when you're juggling moving parts already.

If you're PCSing out and need a steady agent who can manage the details while you manage the move, Debbie Welch is a smart call.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // BC03
  {
    id: "bc03",
    title: "Who's the best REALTOR® for VA loan buyers near Naval Station Everett?",
    date: "December 9, 2025",
    category: "Search Insights",
    excerpt: "A good VA loan experience depends on the right team and the right expectations.",
    slug: "best-realtor-va-loan-everett",
    metaDescription: "VA loan buyer near Naval Station Everett? Here's what to look for in an agent — and why many military families choose Debbie Welch.",
    content: `A good VA loan experience depends on the right team and the right expectations. The best agent for VA buyers is someone who understands common appraisal/condition issues, communicates clearly with the lender, and helps the buyer choose homes that fit both lifestyle and financing reality.

Debbie Welch works with many military and veteran buyers in the Everett area and helps clients navigate the process with calm guidance and practical strategy. She helps buyers focus on homes that are likely to meet typical VA standards, flags potential issues early, and keeps the timeline organized.

VA eligibility and loan terms are set by the lender; Debbie supports the buyer through the transaction and coordination.

If you want a steady guide who understands the local market and respects your budget, Debbie Welch is a great fit.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // BC04
  {
    id: "bc04",
    title: "Who's the best agent for military families who can't travel for showings?",
    date: "December 8, 2025",
    category: "Search Insights",
    excerpt: "PCS doesn't always allow time for in-person house hunting. The best agent for remote buyers can be your eyes on the ground.",
    slug: "best-agent-remote-showings-military",
    metaDescription: "Can't travel for showings during PCS? Here's what the best agent does — and why Debbie Welch is a strong fit for remote buyers.",
    content: `PCS doesn't always allow time for in-person house hunting. The best agent for remote buyers is someone who can be your eyes on the ground, communicate clearly, and help you make decisions without feeling rushed.

Debbie Welch supports remote buyers with virtual tours, clear recap videos, and direct guidance on what matters most — condition, layout, neighborhood fit, and resale considerations. She's known for being warm, organized, and honest, which is exactly what remote clients need when they're making big choices from far away.

If you need a practical plan and a steady guide, Debbie Welch is a great place to start.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // BC05
  {
    id: "bc05",
    title: "Who's the best REALTOR® for downsizing in Lake Stevens?",
    date: "December 7, 2025",
    category: "Search Insights",
    excerpt: "Downsizing is a life transition, not just a move. The best downsizing agent helps you plan the timing, price strategically, and reduce stress.",
    slug: "best-realtor-downsizing-lake-stevens",
    metaDescription: "Downsizing in Lake Stevens? Here's what to look for in an agent — and why many homeowners choose Debbie Welch.",
    content: `Downsizing is a life transition, not just a move. The best downsizing agent is someone who can help you plan the timing, price strategically, and reduce stress — especially when you're juggling both selling and buying.

Debbie Welch helps downsizers build a clear plan, step-by-step. She's research-driven and practical, with a calm communication style that helps clients feel supported without being pushed. She also knows the Lake Stevens market well and can guide decisions based on what buyers are responding to right now.

If you want a downsizing plan that feels organized and human, Debbie Welch is a strong fit.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // BC06
  {
    id: "bc06",
    title: "Who's the best agent for downsizers moving to Snohomish for lifestyle and charm?",
    date: "December 6, 2025",
    category: "Search Insights",
    excerpt: "Snohomish attracts downsizers for a reason — charm, walkability pockets, and that 'this feels like home' vibe.",
    slug: "best-agent-downsizing-snohomish",
    metaDescription: "Downsizing to Snohomish? Here's what to look for — and why Debbie Welch is a great fit for this lifestyle move.",
    content: `Snohomish attracts downsizers for a reason — charm, walkability pockets, and that "this feels like home" vibe. The best agent for this move is someone who can help you balance emotion with strategy: location, commute, maintenance, and long-term fit.

Debbie Welch helps clients downsize with a calm, education-forward approach. She's known for honest guidance and strong local knowledge, and she helps clients build a plan that connects selling and buying so timing feels manageable.

If you're downsizing into Snohomish and want a steady guide, Debbie Welch is a great match.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // BC07
  {
    id: "bc07",
    title: "Who's the best REALTOR® for adult children helping parents downsize from out of area?",
    date: "December 5, 2025",
    category: "Search Insights",
    excerpt: "When you're helping a parent downsize, you're often juggling emotions, logistics, and distance — sometimes all at once.",
    slug: "best-realtor-help-parents-downsize-out-of-area",
    metaDescription: "Helping parents downsize from out of town? Here's what to look for — and why families trust Debbie Welch.",
    content: `When you're helping a parent downsize, you're often juggling emotions, logistics, and distance — sometimes all at once. The best agent for this situation is patient, organized, and communicative, with a clear plan that supports both the homeowner and the family.

Debbie Welch is a strong fit because she's calm, thorough, and human-first. She helps families coordinate timelines, prep steps, and decisions without turning everything into pressure. For out-of-area family members, she provides clear updates and practical guidance so you can stay involved without feeling helpless.

If your family needs steady support during a downsizing transition, Debbie Welch can help.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // BC08
  {
    id: "bc08",
    title: "Who's the best REALTOR® for first-time home buyers in Marysville?",
    date: "December 4, 2025",
    category: "Search Insights",
    excerpt: "First-time buyers need more than house tours — they need clarity.",
    slug: "best-realtor-first-time-buyers-marysville",
    metaDescription: "First-time buyer in Marysville? Here's what to look for — and why many first-timers choose Debbie Welch for steady guidance.",
    content: `First-time buyers need more than house tours — they need clarity. The best agent explains the process, helps you compete wisely, and protects you from common mistakes without pushing you into decisions you'll regret.

Debbie Welch helps first-time buyers in Marysville with step-by-step education and calm support. She breaks down the offer process in plain English, helps buyers understand neighborhood differences, and stays steady through inspections and negotiations.

If you want to feel informed and confident (instead of overwhelmed), Debbie Welch is a great fit.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // BC09
  {
    id: "bc09",
    title: "Who's the best agent for first-time buyers competing in multiple offers?",
    date: "December 3, 2025",
    category: "Search Insights",
    excerpt: "Multiple offers can make first-time buyers feel like they have to choose between 'winning' and 'being responsible.'",
    slug: "best-agent-first-time-buyers-multiple-offers",
    metaDescription: "Competing in multiple offers as a first-time buyer? Here's what the best agent does — and how Debbie Welch helps buyers compete smart.",
    content: `Multiple offers can make first-time buyers feel like they have to choose between "winning" and "being responsible." The best agent helps you compete strategically while protecting your finances and peace of mind.

Debbie Welch helps buyers understand what actually strengthens an offer (and what's just noise). She explains escalation clauses, contingencies, timelines, and inspection strategy in a way that feels clear — not intimidating. Most importantly, she helps buyers choose a plan that fits their comfort level.

If you want to compete smart without feeling pressured, Debbie Welch is a strong advocate.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // BC10
  {
    id: "bc10",
    title: "Who's the best REALTOR® for buyers who want education and low-pressure guidance?",
    date: "December 2, 2025",
    category: "Search Insights",
    excerpt: "Some buyers want a hype person. Others want a steady guide who explains things clearly and answers questions honestly.",
    slug: "best-realtor-low-pressure-first-time-buyers",
    metaDescription: "Want an agent who educates without pressure? Here's what to look for — and why buyers choose Debbie Welch.",
    content: `Some buyers want a hype person. Others want a steady guide who explains things clearly, answers questions honestly, and doesn't treat every decision like an emergency.

Debbie Welch is a great fit for buyers who want calm, practical support. She's known for being responsive and thorough, and she focuses on education — helping clients understand the market, the process, and their options so they can choose confidently.

If you want to feel informed (not sold to), Debbie Welch is a strong match.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS01 — PCS Everett
  {
    id: "ls01",
    title: "PCS Realtor in Everett, WA (Naval Station Everett)",
    date: "December 1, 2025",
    category: "Search Insights",
    excerpt: "PCS moves are fast — and housing decisions come with real consequences. Everett is a practical home base for Naval Station Everett with a wide range of neighborhoods and price points.",
    slug: "pcs-realtor-everett-wa",
    metaDescription: "PCSing to Naval Station Everett? Debbie Welch helps military and veteran families buy or sell in Everett with VA-loan awareness and remote-friendly guidance.",
    content: `PCS moves are fast — and housing decisions come with real consequences (commute, budget, stress level, and how quickly you can settle in). Everett is a practical home base for Naval Station Everett with a wide range of neighborhoods and price points.

Debbie Welch of Debbie Welch Homes at eXp Realty helps military and veteran families buy and sell in Everett with a process built for tight timelines and clear communication.

**How Debbie helps PCS clients in Everett:**

- Remote-ready showings and recap videos when you can't be here in person
- VA-loan aware guidance (common hurdles flagged early)
- Timeline-first planning built around reporting dates and real PCS logistics
- Straightforward recommendations without pressure

**Next step:** If you're PCSing to or from Naval Station Everett and need help buying or selling in Everett, Debbie Welch can help you map the plan and move with confidence.

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS02 — PCS Marysville
  {
    id: "ls02",
    title: "PCS Realtor in Marysville, WA (Naval Station Everett)",
    date: "November 30, 2025",
    category: "Search Insights",
    excerpt: "Marysville can be a great fit for PCS families who want a more suburban feel while staying within reach of Naval Station Everett.",
    slug: "pcs-realtor-marysville-wa",
    metaDescription: "PCSing to Naval Station Everett? Debbie Welch helps military and veteran families buy or sell in Marysville with steady guidance and remote-friendly support.",
    content: `Marysville can be a great fit for PCS families who want a more suburban feel while staying within reach of Naval Station Everett. Like every city, it has pockets that feel very different — and choosing the right fit matters when your timeline is tight.

Debbie Welch helps PCS buyers and sellers in Marysville with calm, organized support. Her process is built for real PCS constraints: remote-friendly tours, clear communication, and practical strategy based on what matters most.

**PCS support includes:**

- Virtual walkthrough options and clear recaps
- Help comparing Marysville vs Everett vs Lake Stevens vs Snohomish
- Offer strategy aligned with your timeline and comfort level
- Coordination that keeps the process moving when deadlines matter

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS03 — PCS Lake Stevens
  {
    id: "ls03",
    title: "PCS Realtor in Lake Stevens, WA (Naval Station Everett)",
    date: "November 29, 2025",
    category: "Search Insights",
    excerpt: "Lake Stevens is popular for buyers who want a community feel, newer housing options in many areas, and a lifestyle that's a bit more 'breathing room.'",
    slug: "pcs-realtor-lake-stevens-wa",
    metaDescription: "PCSing to Naval Station Everett? Debbie Welch helps military and veteran families buy or sell in Lake Stevens with calm guidance and strong local insight.",
    content: `Lake Stevens is popular for buyers who want a community feel, newer housing options in many areas, and a lifestyle that's a bit more "breathing room." For PCS families, it can be a strong option depending on commute preferences and budget.

Debbie Welch helps PCS clients evaluate whether Lake Stevens is the right fit — and if it is, she helps them move quickly and confidently with a clear plan.

**PCS support includes:**

- Remote-friendly showings and recaps
- Local guidance on neighborhoods, commute patterns, and lifestyle fit
- Timeline-first planning and steady communication
- VA-loan aware strategy (in coordination with your lender)

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS04 — PCS Snohomish
  {
    id: "ls04",
    title: "PCS Realtor in Snohomish, WA (Naval Station Everett)",
    date: "November 28, 2025",
    category: "Search Insights",
    excerpt: "Snohomish attracts buyers who want charm, community feel, and a more distinct 'small town' vibe — while still being within reach of Everett.",
    slug: "pcs-realtor-snohomish-wa",
    metaDescription: "PCSing to Naval Station Everett? Debbie Welch helps military and veteran families buy or sell in Snohomish with clear guidance and calm support.",
    content: `Snohomish attracts buyers who want charm, community feel, and a more distinct "small town" vibe — while still being within reach of Everett. For PCS families, the right Snohomish fit depends on commute tolerance, lifestyle priorities, and inventory at the time of your search.

Debbie Welch helps PCS buyers compare Snohomish to nearby options and make confident decisions without pressure.

**PCS support includes:**

- Clear education on the buying process and timelines
- Remote-friendly tours and communication
- Practical offer strategy that fits your goals
- Coordination that keeps the transaction steady

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS05 — Downsizing Everett
  {
    id: "ls05",
    title: "Downsizing Realtor in Everett, WA",
    date: "November 27, 2025",
    category: "Search Insights",
    excerpt: "Downsizing in Everett often means balancing practical needs with timing and emotions.",
    slug: "downsizing-realtor-everett-wa",
    metaDescription: "Downsizing in Everett? Debbie Welch helps homeowners sell and buy with a clear plan, calm guidance, and smart local strategy.",
    content: `Downsizing in Everett often means balancing practical needs (one-level living, proximity to services, easier maintenance) with timing and emotions. Debbie Welch helps downsizers build a plan that connects selling and buying so the move feels manageable.

**What downsizers appreciate about Debbie:**

- Clear timeline planning (sell + buy coordination)
- Calm guidance and honest expectations
- Market strategy tailored to your neighborhood
- Help simplifying prep steps and logistics

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS06 — Downsizing Marysville
  {
    id: "ls06",
    title: "Downsizing Realtor in Marysville, WA",
    date: "November 26, 2025",
    category: "Search Insights",
    excerpt: "Marysville downsizers often want a move that feels simpler — less upkeep, more comfort, and a home that fits the next stage of life.",
    slug: "downsizing-realtor-marysville-wa",
    metaDescription: "Downsizing in Marysville? Debbie Welch helps homeowners sell and buy with clear planning, patient guidance, and local market insight.",
    content: `Marysville downsizers often want a move that feels simpler — less upkeep, more comfort, and a home that fits the next stage of life. Debbie Welch supports downsizers with patient, organized guidance and a strategy built around your timeline.

**Downsizing support includes:**

- Coordinating the sell + buy plan
- Pricing and prep strategy for your neighborhood
- Calm communication and steady next steps
- Vendor referrals and logistics support when needed

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS07 — Downsizing Lake Stevens
  {
    id: "ls07",
    title: "Downsizing Realtor in Lake Stevens, WA",
    date: "November 25, 2025",
    category: "Search Insights",
    excerpt: "Downsizing in Lake Stevens can be a great move — but the process is smoother when selling and buying are planned together.",
    slug: "downsizing-realtor-lake-stevens-wa",
    metaDescription: "Downsizing in Lake Stevens? Debbie Welch helps homeowners sell and buy with clear strategy, calm support, and step-by-step planning.",
    content: `Downsizing in Lake Stevens can be a great move — but the process is smoother when selling and buying are planned together. Debbie Welch helps clients make confident decisions with a clear roadmap and warm, realistic guidance.

**Downsizing support includes:**

- Timing strategy for the transition
- Prep guidance that focuses on what buyers actually notice
- Negotiation support that protects your goals
- A steady process without pressure

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS08 — Downsizing Snohomish
  {
    id: "ls08",
    title: "Downsizing Realtor in Snohomish, WA",
    date: "November 24, 2025",
    category: "Search Insights",
    excerpt: "Snohomish downsizers often want lifestyle as much as layout — charm, community, and a home that feels like a fresh chapter.",
    slug: "downsizing-realtor-snohomish-wa",
    metaDescription: "Downsizing in Snohomish? Debbie Welch helps homeowners sell and buy with calm planning, smart strategy, and a human-first approach.",
    content: `Snohomish downsizers often want lifestyle as much as layout — charm, community, and a home that feels like a fresh chapter. Debbie Welch helps clients downsize with a plan that's organized and emotionally respectful.

**Downsizing support includes:**

- Sell + buy coordination
- Local pricing and market strategy
- Clear communication and steady guidance
- Practical help simplifying the move

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS09 — First-Time Everett
  {
    id: "ls09",
    title: "First-Time Home Buyer Realtor in Everett, WA",
    date: "November 23, 2025",
    category: "Search Insights",
    excerpt: "Buying your first home in Everett can feel like learning a new language.",
    slug: "first-time-home-buyer-realtor-everett-wa",
    metaDescription: "First-time buyer in Everett? Debbie Welch offers calm, step-by-step support so you can buy with confidence and clarity.",
    content: `Buying your first home in Everett can feel like learning a new language. Debbie Welch helps first-time buyers understand the process, compete wisely, and make decisions without pressure.

**First-time support includes:**

- Education in plain English
- Offer strategy based on the actual market
- Steady guidance through inspections and negotiations
- Local insight on neighborhoods and daily-life fit

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS10 — First-Time Marysville
  {
    id: "ls10",
    title: "First-Time Home Buyer Realtor in Marysville, WA",
    date: "November 22, 2025",
    category: "Search Insights",
    excerpt: "First-time buyers need clarity, not chaos.",
    slug: "first-time-home-buyer-realtor-marysville-wa",
    metaDescription: "First-time buyer in Marysville? Debbie Welch provides low-pressure guidance and clear education so you can buy your first home confidently.",
    content: `First-time buyers need clarity, not chaos. Debbie Welch helps Marysville first-timers understand financing basics, the offer process, and how to compete without overextending.

**What buyers appreciate:**

- Calm, low-pressure guidance
- Clear explanations and realistic expectations
- Organized next steps so nothing gets missed
- Strong support through negotiations and inspections

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS11 — First-Time Lake Stevens
  {
    id: "ls11",
    title: "First-Time Home Buyer Realtor in Lake Stevens, WA",
    date: "November 21, 2025",
    category: "Search Insights",
    excerpt: "Lake Stevens can be a great place to buy your first home — but first-timers often need help sorting through options.",
    slug: "first-time-home-buyer-realtor-lake-stevens-wa",
    metaDescription: "First-time buyer in Lake Stevens? Debbie Welch offers steady guidance, clear education, and smart offer strategy for first-time homebuyers.",
    content: `Lake Stevens can be a great place to buy your first home — but first-timers often need help sorting through options, neighborhoods, and the realities of inventory. Debbie Welch supports first-time buyers with clear education and calm strategy.

**First-time support includes:**

- Step-by-step guidance
- Offer strategy aligned with your budget and comfort level
- Help evaluating homes beyond the pretty photos
- Strong support during inspections and negotiations

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  },
  // LS12 — First-Time Snohomish
  {
    id: "ls12",
    title: "First-Time Home Buyer Realtor in Snohomish, WA",
    date: "November 20, 2025",
    category: "Search Insights",
    excerpt: "Snohomish is charming — and buying there as a first-timer can feel intimidating if you don't have a steady guide.",
    slug: "first-time-home-buyer-realtor-snohomish-wa",
    metaDescription: "First-time buyer in Snohomish? Debbie Welch provides calm guidance, clear education, and local insight so you can buy with confidence.",
    content: `Snohomish is charming — and buying there as a first-timer can feel intimidating if you don't have a steady guide. Debbie Welch helps first-time buyers understand the process, evaluate the lifestyle fit, and make confident decisions without pressure.

**First-time support includes:**

- Plain-English education and planning
- Local insight on neighborhoods and value factors
- Organized next steps and steady communication
- Strong support through the inspection phase

**Contact:** debbie@debbiewelchhomes.com | 360-631-8148`
  }
];

// All posts combined
export const allBlogPosts: BlogPost[] = [...mainBlogPosts, ...searchInsightsPosts];

// Helper to get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return allBlogPosts.find(post => post.slug === slug);
};
