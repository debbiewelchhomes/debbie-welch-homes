import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Can you help with military PCS moves to Naval Station Everett?",
    answer:
      "Absolutely. I am a Military Relocation Professional (MRP) and a longtime Navy spouse. My husband is retired from the Navy, so I understand the timelines, uncertainty, and stress that can come with a PCS. I live just a couple of miles from Naval Station Everett, know the surrounding communities well, and can connect you with experienced VA loan specialists when financing guidance is needed.",
  },
  {
    question: "Which areas of Snohomish County do you serve?",
    answer:
      "I work throughout Snohomish County, with particular familiarity in Lake Stevens, Everett, Mukilteo, Marysville, Mill Creek, Bothell, Snohomish, Arlington, Stanwood, and nearby communities. If your move reaches outside the area, I can also help you coordinate with a carefully selected real estate professional in your destination market.",
  },
  {
    question: "Do you help seniors who are downsizing or moving to a different type of housing?",
    answer:
      "Yes. As a Seniors Real Estate Specialist (SRES®), I help older adults and their families plan moves with patience, clear information, and respect for the decisions involved. We can work through timing, home preparation, belongings, trusted local resources, and the sale itself at a pace that feels manageable.",
  },
  {
    question: "Can you help me buy and sell a home at the same time?",
    answer:
      "Yes. The right plan depends on your finances, timing, comfort with risk, and the current market. I will help you compare options such as selling first, buying first, requesting a contingency, or arranging temporary housing so you can choose the approach that makes the most sense for you.",
  },
  {
    question: "How do I know what my Snohomish County home is worth?",
    answer:
      "An online estimate can be a useful starting point, but it cannot account for condition, updates, location within a neighborhood, views, lot characteristics, or current buyer behavior. I prepare a personalized market analysis using relevant nearby sales and the details that make your property different.",
  },
  {
    question: "Do I need to renovate my home before selling?",
    answer:
      "Not necessarily. Some improvements can make a home easier to market, while others may not return what they cost. I can walk through the property with you, separate worthwhile preparation from unnecessary projects, and help you focus on the work most likely to matter to buyers.",
  },
  {
    question: "Do you work with first-time homebuyers?",
    answer:
      "Yes. I explain each stage of the process, help you prepare for the costs beyond the down payment, coordinate with your lender, and make sure you understand the choices in an offer before you sign. Questions are expected, and you will not be rushed through them.",
  },
  {
    question: "Can you help me use a VA loan to buy a home?",
    answer:
      "Yes. I understand the real estate side of VA-financed purchases and work with lenders who are experienced with VA loans. Your lender will advise you on eligibility and loan terms, while I help with the home search, offer strategy, property considerations, inspections, and transaction coordination.",
  },
  {
    question: "What happens during a free consultation?",
    answer:
      "We talk about what is prompting your move, your ideal timing, your concerns, and what you need from an agent. I will explain the likely next steps and answer your initial questions. It is a conversation, not a commitment, and you can decide afterward whether working together feels right.",
  },
  {
    question: "Can you recommend local lenders, inspectors, stagers, and other professionals?",
    answer:
      "Yes. I maintain a list of trusted local professionals who can support different parts of a move. You are always free to choose any qualified provider, and I can share more than one option when possible so you remain in control of who earns your business.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Snohomish County Real Estate FAQ | Debbie Welch Homes"
      description="Answers to common questions about buying, selling, downsizing, VA loans, and military PCS moves in Snohomish County."
      canonical="/resources/faq"
      jsonLd={faqSchema}
    />
    <Navigation />

    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-warm-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">Straight answers for your next move…</p>
            <h1 className="font-heading h-section text-primary mb-6">Frequently Asked Questions</h1>
            <p className="copy-lead text-foreground">
              Real estate decisions bring up a lot of questions. These are some of the ones I hear most often from buyers, sellers, downsizers, and military families in Snohomish County.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <details key={item.question} className="group rounded-xl border border-border bg-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-medium text-primary focus-visible:outline-none">
                  <span className="font-body text-base md:text-lg">{item.question}</span>
                  <ChevronDown className="h-5 w-5 flex-none text-secondary transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="copy text-foreground">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-warm-bg">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="eyebrow mb-3">Still wondering about something?</p>
          <h2 className="font-heading h-section text-primary mb-5">Let’s Talk About Your Situation</h2>
          <p className="copy text-foreground mb-8">
            Your move will have details that a general answer cannot cover. Tell me what is on your mind, and we can talk through the options together.
          </p>
          <Button asChild className="bg-secondary text-white hover:bg-secondary/90">
            <Link to="/contact">Ask Debbie a Question</Link>
          </Button>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default FAQ;
