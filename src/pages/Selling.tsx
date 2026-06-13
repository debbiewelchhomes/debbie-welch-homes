import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO, buildFaqSchema } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-selling.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Selling = () => {
  const introRef = useRef(null);
  const processRef = useRef(null);
  const guideRef = useRef(null);
  const differentRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);
  const testimonialRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const guideInView = useInView(guideRef, { once: true, margin: "-100px" });
  const differentInView = useInView(differentRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const testimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Got it - thank you.",
      description: "I'll follow up soon to put together your home evaluation.",
    });
    setFormData({ name: "", email: "", phone: "", address: "", message: "" });
  };

  const sellingSteps = [
    {
      number: "01",
      title: "Start With an Honest Conversation",
      description:
        "We walk through your home together - in person or virtually - and talk about your goals, your timeline, and what's prompting the move. I'll tell you what I see, what I think will matter to buyers, and what we can realistically expect from the current Snohomish County market. No sugarcoating.",
    },
    {
      number: "02",
      title: "Build a Prep Plan That Fits Your Reality",
      description:
        "Not every home needs a full renovation before listing. Some need a deep clean and better photos. Some need one or two targeted updates. I'll tell you exactly what's worth doing and what you can skip - based on your price point, your timeline, and what buyers in your area actually care about. I can also connect you with trusted stagers, cleaners, and contractors when needed.",
    },
    {
      number: "03",
      title: "Price It Right From the Start",
      description:
        "Pricing is a strategy, not a guess. We'll look at recent comparable sales, current inventory, your home's specific features, and your goals for timing and net proceeds. I'll explain the data and walk you through the tradeoffs so you understand the reasoning - not just the number.",
    },
    {
      number: "04",
      title: "Market, Show, and Field Offers",
      description:
        "Professional photos, a well-written listing, and targeted marketing to reach the right buyers. I'll manage showings and agent communication, then walk you through each offer in plain language - the price, the terms, the contingencies, the fine print. You'll understand what you're actually agreeing to before you respond to anything.",
    },
    {
      number: "05",
      title: "From Contract to Close - Without the Scramble",
      description:
        "Once you're under contract, I manage the timeline - inspections, appraisal, any repair negotiations, lender deadlines, and escrow coordination. You'll always know what's happening, what's coming next, and what I need from you. No last-minute surprises.",
    },
  ];

  const faqs = [
    {
      question: "When is the best time to sell my home?",
      answer:
        "There are seasonal patterns in Snohomish County - spring and early summer tend to bring more buyers, but inventory is also higher. The honest answer is that the best time to sell is when it makes sense for your life and when the current data supports it. We'll look at what's actually happening in your specific neighborhood and price range so you can make a decision based on real information, not general market headlines.",
    },
    {
      question: "How do we decide on a listing price?",
      answer:
        "We look at recent comparable sales - homes similar to yours that have actually closed, not just listed. We also factor in current competition, your home's condition and specific features, and your goals for timing. Pricing too high can cost you as much as pricing too low. I'll walk you through the data and explain the reasoning behind any price I recommend, so you feel confident in the strategy.",
    },
    {
      question: "Do I have to do a lot of updates before listing?",
      answer:
        "Not necessarily - and I'll tell you honestly which updates are worth it and which aren't. Some homes need a deep clean, declutter, and better staging. Others benefit from one or two targeted repairs. A few genuinely need more work to compete. I'll give you a prioritized list based on likely return and your capacity, not a generic renovation checklist.",
    },
    {
      question: "What should I expect during showings?",
      answer:
        "We'll set a showing schedule that works as well as possible with your real life - work, kids, pets, all of it. I'll give you clear, simple guidelines for how ready the house needs to be for each showing, and we'll make a practical plan together. You won't be scrambling every time someone wants to see it.",
    },
    {
      question: "How long will it take to sell?",
      answer:
        "It depends on your price point, location, condition, and what the market is doing. I'll pull days-on-market data for comparable homes so you have a realistic range going in - not a guess, not a promise, just an honest picture. Some homes move in days; others take a few weeks. We'll plan accordingly.",
    },
    {
      question: "What if the inspection turns up issues?",
      answer:
        "It almost always turns up something. That's what inspections are for. The question is whether those findings are deal-breakers, negotiating points, or just normal wear and tear that buyers expect. I'll help you understand what you're actually looking at, talk through your options for responding, and negotiate on your behalf so you're not giving away more than you need to.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Debbie is amazing! We worked with her when the market took a turn downwards and we needed to sell our home and move for work. It was a very stressful time and Debbie was so kind, helpful, communicative, aggressive when we needed her to be, firm, and just incredible to work with. You definitely can't go wrong with Debbie.",
      attribution: "Hill Hansen, Arlington (seller, tough market)",
    },
    {
      quote:
        "Debbie Welch was amazing to work with! She was very knowledgeable about the selling process and answered all our questions in a professional and timely manner. We were able to sell our home quickly and got $60k over asking price! I would highly recommend Debbie if you're looking to sell your home.",
      attribution: "Shawn Frederick, Lake Stevens ($60k over asking)",
    },
    {
      quote:
        "Your dedication, expertise, and unwavering support made all the difference. Your guidance on preparing our home for sale was invaluable, and your tireless commitment to negotiating on our behalf exceeded our expectations. Thank you for your professionalism, kindness, friendship, and for going above and beyond.",
      attribution: "Stacie Filler, Stanwood (Veteran seller)",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={pageSEO.selling.title}
        description={pageSEO.selling.description}
        canonical="/services/selling"
        jsonLd={buildFaqSchema(faqs)}
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 parallax-section"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${heroImage})`,
            }}
            role="img"
            aria-label="Selling a home in Snohomish County WA"
          />

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-backdrop"
            >
              <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary" aria-hidden="true">
                Time to sell…
              </p>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Selling Your Home in Snohomish County
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                Selling a home you've lived in - and cared for - is not a small thing. It's a financial decision and an
                emotional one, often happening at the same time as whatever comes next. I help Snohomish County sellers
                get their homes ready, priced right, and sold well - without the chaos, the pressure, or the surprises
                that should have been mentioned earlier.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={introRef}
              initial={{ opacity: 0, y: 30 }}
              animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                Three questions first…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-primary mb-8">
                Most Sellers Have the Same Three Questions
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>
                  What's my home actually worth right now? What do I need to do to get it ready? And how do I time this
                  so I'm not caught between two moves with nowhere to land? Those deserve straight answers - not vague
                  reassurances or a pitch to list immediately.
                </p>
                <p>
                  I spent 30 years in healthcare reading complex documents and explaining them to people under stress. I
                  brought that same approach here. You'll understand every offer, every contract term, every clause
                  before you sign anything.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Selling Process - 5 Steps */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={processRef}
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                From walkthrough to close…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                What the Process Actually Looks Like
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-8">
              {sellingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex gap-6 items-start">
                        <div className="font-heading text-5xl md:text-6xl text-secondary opacity-50 flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-2xl md:text-3xl text-primary mb-4">{step.title}</h3>
                          <p className="font-body text-lg text-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Working With Me Different */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={differentRef}
              initial={{ opacity: 0, y: 30 }}
              animate={differentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                The fine print matters…
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                Detail-Oriented. Straight-Talking. In Your Corner.
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>
                  After 30 years reading healthcare documents for a living, I'm not going to miss the clause on page 4
                  of a purchase agreement or let a buyer's inspection addendum slide by without explaining what you're
                  giving up. The market moves the way it moves - what I control is how well your home is positioned and
                  how clearly you understand your options at every step.
                </p>
                <p>
                  And if you need more than just an agent - if you're sorting through decades of belongings,
                  coordinating with out-of-state family, or just need a calm presence on a hard day - I show up for that
                  too. That's not an add-on. It's just how I work.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Must-Have Guide Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={guideRef}
              initial={{ opacity: 0, y: 30 }}
              animate={guideInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                Take it with you…
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                The Snohomish County Seller Guide
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                Covers what to do - and what to skip - when preparing your home for the Snohomish County market.
                Includes pricing strategy basics, what buyers actually notice during showings, how to read an offer, and
                what to expect from inspection to close. Straightforward, practical, no fluff.
              </p>

              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
                <a href="https://heyzine.com/flip-book/0f267477d7.html" target="_blank" rel="noopener noreferrer">
                  Get the Seller Guide
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Home Evaluation Form */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                  Let's start with the numbers…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl text-primary mb-6">Request a Free Home Evaluation</h2>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  Wondering what your home could realistically sell for right now? Share a few details below and I'll
                  put together a thoughtful evaluation based on your home, recent sales, and current market conditions.
                  No obligation, no pressure to list.
                </p>
              </div>

              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number (optional)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Property Address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Anything helpful to know - timeline, your situation, questions you already have. Whatever feels relevant."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="font-body"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg"
                    >
                      Request My Home Evaluation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={faqRef}
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                  Seller questions…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                  Selling Questions I Hear All the Time
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border bg-card rounded-lg px-6"
                  >
                    <AccordionTrigger className="font-heading text-xl md:text-2xl text-primary hover:text-secondary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-lg text-foreground leading-relaxed pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={testimonialRef}
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                  From seller clients…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                  What My Seller Clients Have to Say
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border bg-card hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-secondary text-xl">
                              ★
                            </span>
                          ))}
                        </div>
                        <blockquote className="font-body text-lg text-foreground leading-relaxed mb-6 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="font-body text-base text-muted-foreground font-medium">
                          - {testimonial.attribution}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Selling;
