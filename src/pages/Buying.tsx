import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO, buildFaqSchema } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-buying.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Buying = () => {
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
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Got it - thank you.",
      description: "I'll follow up soon to get your search set up.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const buyingSteps = [
    {
      number: "01",
      title: "Get Clear on What You Actually Want",
      description:
        "Before we look at a single listing, we talk. What does the right home actually look like for your life right now - and two or five years from now? Budget, location, commute, schools, yard, stairs, layout. I ask the questions most people forget to ask themselves until they're standing in a house they don't love.",
    },
    {
      number: "02",
      title: "Get Pre-Approved With the Right Lender",
      description:
        "A pre-approval isn't just paperwork - it tells you what you can actually afford, what your monthly payment looks like in real numbers, and whether there's a loan program that fits your situation better than you realized. I'll connect you with trusted lenders who explain your options clearly, not just hand you a number and move on.",
    },
    {
      number: "03",
      title: "Search Smart, Tour Well",
      description:
        "We'll focus on the Snohomish County areas that actually fit your criteria - Lake Stevens, Everett, Marysville, Snohomish, Arlington, Bothell, wherever makes sense. When we tour homes, I'll tell you what I see - the good, the things to think about, and the things that would make me pause. Not just listing-photo enthusiasm.",
    },
    {
      number: "04",
      title: "Make a Competitive, Thoughtful Offer",
      description:
        "When you find the right home, we'll build an offer that's grounded in data - recent sales, current competition, what the terms actually mean for your risk. I'll explain every part of the contract in plain language before you sign anything. No 'just trust me, this is standard.'",
    },
    {
      number: "05",
      title: "From Contract to Keys - Without the Chaos",
      description:
        "Once you're under contract, I manage the timeline - inspections, appraisals, deadlines, lender communication, escrow coordination. You'll always know what's happening and what's coming next. My job is to get you to closing day without last-minute scrambles or surprises you should have been warned about.",
    },
  ];

  const faqs = [
    {
      question: "How competitive is the Snohomish County market right now for buyers?",
      answer:
        "It varies a lot by price point and area. Some neighborhoods and price ranges still move fast with multiple offers; others give buyers more breathing room and room to negotiate. I'll walk you through current data for the specific areas you're considering before we start writing offers - so you know what you're walking into, not after the fact.",
    },
    {
      question: "How much do I actually need for a down payment?",
      answer:
        "Less than most people think, depending on your loan type and financial picture. Conventional loans can go as low as 3-5% down. FHA is 3.5%. VA loans for qualified veterans require zero down. Your ideal down payment depends on your goals, your monthly comfort level, and what your lender recommends for your situation. I'll connect you with someone who will explain this clearly so we can search with real numbers.",
    },
    {
      question: "Do I need to sell my current home before I buy?",
      answer:
        "Not necessarily. Some buyers sell first, some buy first, and others use contingent offers or bridge strategies. There's no universal right answer - it depends on your finances, your timeline, and how much risk you're comfortable with. We'll look at your specific situation and talk through the options honestly before you decide.",
    },
    {
      question: "What are the costs beyond the down payment I should plan for?",
      answer:
        "Good question to ask early. Plan for closing costs (typically 2-3% of the purchase price), inspection fees, a possible appraisal gap if the home doesn't appraise at purchase price, and move-in expenses like immediate repairs, utilities setup, and whatever the new place needs. I'll outline realistic numbers early so nothing blindsides you at the finish line.",
    },
    {
      question: "How long does buying a home usually take?",
      answer:
        "Once you're under contract, most purchases in Snohomish County close in 30-45 days depending on financing. The search phase varies - some buyers find their home in a few weeks, others take a few months. It depends on inventory, your criteria, and the market. I'll help you set a realistic timeline so you can plan around it.",
    },
    {
      question: "What if I find a home I love but something feels off?",
      answer:
        "Tell me. That feeling is worth paying attention to. Sometimes it's something fixable - a cosmetic issue, a negotiable repair. Sometimes it's a real red flag. My job is to help you figure out which is which, not to keep the deal moving at all costs. I'd rather you walk away from the wrong house than close on it.",
    },
  ];

  const testimonials = [
    {
      quote:
        "This was my first attempt at buying a home on my own and I knew absolutely nothing. Being a USAF Veteran using a VA loan during a hot sellers market didn't even phase her. She was so knowledgeable and caring, had a fantastic sense of humor, and was on top of everything for me. She was a great advocate for me and she will be for you as well.",
      attribution: "L. Lawless, Lake Stevens (USAF Veteran, first-time buyer)",
    },
    {
      quote:
        "We found Debbie on the Internet and chose her because of the good reviews. I would give her 10 stars if possible - she was always a step ahead and treated the process like she was buying the house for herself. She gave us the confidence to make the right decision even without seeing the house ourselves. That kind of expertise was priceless.",
      attribution: "Vanessa Gerhard, Lake Stevens (buyer, PCS from Germany)",
    },
    {
      quote:
        "Debbie and her team are amazing people! My first time buying a house - and with her it for sure won't ever be my last. I wouldn't hesitate to have her be my realtor again. She is patient, understanding, very nice and caring. A perfect example of what you'd dream of in a realtor.",
      attribution: "I. Monroe (active military, first-time buyer)",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={pageSEO.buying.title}
        description={pageSEO.buying.description}
        canonical="/services/buying"
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
            aria-label="Buying a home in Snohomish County WA"
          />

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-backdrop"
            >
              <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary" aria-hidden="true">
                Finding your place…
              </p>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Buying a Home in Snohomish County
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                Buying a home is one of the biggest financial decisions most people make. It deserves more than a rushed
                search and a stack of paperwork you don't fully understand. I help buyers in Lake Stevens, Everett,
                Marysville, Snohomish, Arlington, and surrounding communities move through the process with clear
                information, honest guidance, and someone in their corner who actually gives a damn about the outcome.
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
                Here's what I know…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-primary mb-8">The Search Is Only Part of It</h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>
                  Most people come into the buying process thinking it's mostly about finding the right house. It is -
                  but it's also about understanding what you can actually afford, what the inspection is really telling
                  you, what the contract terms mean, and whether the neighborhood is going to feel right six months
                  after you move in.
                </p>
                <p>
                  I came from 30 years in healthcare where my job was to read complex documents carefully and explain
                  them clearly to people who were already stressed. That's exactly what I do here. I'll walk you through
                  every step in plain language, flag the things worth paying attention to, and make sure you feel
                  informed - not just moved along.
                </p>
                <p>I'm not trying to close a deal. I'm trying to help you buy the right home.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Buying Process - 5 Steps */}
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
                How it works…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                What the Process Actually Looks Like
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-8">
              {buyingSteps.map((step, index) => (
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
                What's different here…
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                I'm Not in a Hurry. You Shouldn't Be Either.
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>
                  I'm not going to push you toward a home because the market is "moving fast" or because I need to close
                  a transaction this month. If a house isn't right, I'll tell you. If a contract term concerns me, I'll
                  flag it. If you need to slow down and think, we slow down and think.
                </p>
                <p>
                  I'm also a lifelong Snohomish County local. I grew up in Marysville, lived in Lake Stevens for years,
                  and I'm currently in the middle of a live-in renovation in North Everett. When I tell you what a
                  neighborhood is actually like - the schools, the traffic, the feel of the street - it's because I've
                  lived in this county my whole life, not because I pulled it from a market report.
                </p>
                <p>Ask me as many questions as you need. That's what I'm here for.</p>
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
                A good place to start…
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                The Snohomish County Home Buyer Guide
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                Covers what to know before you start your search - financing basics, how to read a listing, what
                inspections actually tell you, hidden costs to plan for, and how the Snohomish County market works.
                Written for people who want real information, not a glossy brochure.
              </p>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6" asChild>
                <a
                  href="https://debbiewelchhomes.myflodesk.com/home-buyer-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get the Buyer Guide
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Property Search Form */}
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
                  Let's get started…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl text-primary mb-6">
                  Set Up a No-Obligation Property Search
                </h2>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  Tell me what you're looking for and I'll put together a custom search for the areas and price ranges
                  that make sense for you. No spam, no pressure - just listings that are actually worth your time.
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
                      <Textarea
                        placeholder="What are you looking for? Budget, preferred areas, timeline, must-haves - whatever helps me point you in the right direction."
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
                      Send My Request
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
                  Good questions…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                  Buying Questions I Hear All the Time
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
                  In their own words…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                  What My Buyer Clients Have to Say
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

export default Buying;
