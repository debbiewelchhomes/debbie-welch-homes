import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO, buildFaqSchema } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-downsizing.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendInquiry } from "@/lib/inquiry";
import InquiryFallback from "@/components/InquiryFallback";

const Downsizing = () => {
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
    currentHome: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await sendInquiry({
      formName: "Request a Free Downsizing Consult",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      fields: {
        "Where is your home": formData.currentHome,
        "Message": formData.message,
      },
    });
    setIsSubmitting(false);

    if (!result.ok) {
      toast({
        title: "That did not go through.",
        description: result.error,
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", currentHome: "", message: "", website: "" });
  };

  const downsizingSteps = [
    {
      number: "01",
      title: "Start With a Real Conversation",
      description:
        "We talk about what is prompting the move, what you want daily life to look like, and whether now is the right time. You may be ready to make a plan, or you may want to revisit the question later.",
    },
    {
      number: "02",
      title: "Understand What Your Home Is Worth",
      description:
        "Before you can make a plan, you need real numbers. I'll walk through your home and prepare a market analysis and discuss which preparation may help, what it could cost, and what can wait.",
    },
    {
      number: "03",
      title: "Build a Prep Plan That Fits",
      description:
        "We'll prioritize what needs attention and what doesn't. I can connect you with stagers, organizers, cleaners, and contractors who understand the downsizing process. In past moves, I've helped with donation runs and packing a POD. Those are individual examples; we discuss the support and any third-party costs for your move before making arrangements.",
    },
    {
      number: "04",
      title: "List and Market Your Home Well",
      description:
        "When you're ready, I'll position your home thoughtfully for the Snohomish County market with a pricing strategy, professional photos, and marketing that reaches the right buyers. We'll review offers, key terms, and your questions in plain language.",
    },
    {
      number: "05",
      title: "Coordinate the Transition",
      description:
        "Selling and moving at the same time is a lot. We'll work through the logistics together by timing the sale with your next move, exploring rent-backs or extended closings when needed, and tracking deadlines and planning for possible gaps between the sale and your next home.",
    },
  ];

  const faqs = [
    {
      question: "How do I know if it's the right time to downsize?",
      answer:
        "There's rarely a perfect time. Some real signs are worth paying attention to. The maintenance may feel like more than you want to manage, you may be paying for space you don't use, stairs may be becoming a concern, or your monthly costs may no longer match your priorities or income. We can talk through your specific situation and look at the numbers together. Sometimes the answer is 'yes, let's make a plan.' Sometimes it's 'you have more time than you think.' The choice depends on what works for your life now.",
    },
    {
      question: "Do I have to get rid of everything before I sell?",
      answer:
        "No. Trying to do it all at once is one of the fastest ways to burn out and stall the whole process. Most people do better working through belongings in stages, one room or category at a time. I can connect you with organizers who specialize in working with downsizers and are genuinely good at the emotional side of letting go. You don't have to figure this part out alone.",
    },
    {
      question: "Should I buy first or sell first?",
      answer:
        "It depends on your finances, your comfort with risk, and what you're moving into. Buying first gives you certainty about where you're going but can mean carrying two mortgages temporarily. Selling first gives you cash in hand but requires knowing where you'll land. We'll look at your specific numbers and timeline and talk through both options, including approaches like rent-backs that can give you more breathing room.",
    },
    {
      question: "What kinds of homes make sense for downsizing?",
      answer:
        "It varies a lot depending on what matters most to you. Many clients want single-level living, a smaller yard or no yard, and lower maintenance overall. Others want to stay in a neighborhood they know. Some are open to condos or townhomes; others aren't. We'll focus on homes that genuinely fit your life, not just something smaller on paper. I'll also ask about things like accessibility, proximity to family or medical care, and what you want to be able to do five or ten years from now.",
    },
    {
      question: "My adult kids have opinions about all of this. Can you help with that?",
      answer:
        "Yes, and you're not alone in navigating that dynamic. Downsizing decisions often involve family members who care deeply but may not all be on the same page. With your permission, I'm happy to include the family members you choose, answer their questions, and help everyone work from the same factual picture instead of assumptions. At the end of the day though, this is your home and your decision. My job is to support you.",
    },
    {
      question: "What does it cost to talk with you?",
      answer:
        "Nothing. The initial conversation is free and carries no obligation. If you decide to move forward, we'll review how compensation works and any preparation or third-party costs, such as repairs, cleaning, or moving help, before you commit. If you're not ready to sell, or it turns out this isn't the right move for you right now, that's completely okay. We can revisit the conversation when your circumstances change.",
    },
    {
      question: "What does the SRES® designation mean?",
      answer:
        "The Seniors Real Estate Specialist (SRES®) designation is specialized training for helping older adults and their families navigate real estate decisions. My role is to provide clear information, patience, and coordination while respecting that the timing and final decisions remain yours.",
    },
    {
      question: "How early should I begin planning a downsizing move?",
      answer:
        "Starting several months before you hope to move usually creates more choices and less pressure. We can begin with a conversation even if you are not ready to sell. Early planning helps separate immediate needs from decisions that can wait.",
    },
  ];

  const testimonials = [
    {
      quote:
        "We are currently living in another state and were not able to get back to Washington to prepare our home for sale. Debbie did everything - from selling unwanted items, to assisting with packing, to staging our home. The result was a SOLD sign in two days with multiple offers all over asking price. Debbie truly goes the extra mile.",
      attribution: "P. Davis, Lake Stevens (senior out-of-state seller)",
    },
    {
      quote:
        "From the beginning Debbie was there to offer what I needed to sell my condo. As a senior citizen moving out of state she guided me through the process. It was stress free and helpful. Instantly had multiple cash offers. The staging was perfection. Escrow was over and done in record time.",
      attribution: "M. Cornell, Marysville (senior out of state seller)",
    },
    {
      quote:
        "She was responsive, great communication and had excellent negotiation skills. She got our home sold in less than a month - and she also helped us pack our POD, clean our home, and did dump and donation runs for us. I would use Debbie again and highly recommend her to anyone selling in Snohomish County.",
      attribution: "K. Bryar, Snohomish County (Veteran seller)",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={pageSEO.downsizing.title}
        description={pageSEO.downsizing.description}
        canonical="/services/downsizing"
        jsonLd={buildFaqSchema(faqs)}
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[58vh] lg:min-h-[62vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 parallax-section"
            style={{
              backgroundImage: `linear-gradient(rgba(225, 223, 220, 0.35), rgba(225, 223, 220, 0.35)), url(${heroImage})`,
            }}
            role="img"
            aria-label="Downsizing and life transitions in Snohomish County"
          />

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-backdrop"
            >
              <p className="eyebrow mb-4" aria-hidden="true">
                A new chapter...
              </p>

              <h1 className="font-heading h-section text-primary mb-6">
                Downsizing & Life Transitions in Snohomish County
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                You've taken care of this home for years. Maybe decades. And now something has shifted: the
                maintenance, the space, the stairs, the cost, the season of life. Figuring out what comes next is a big
                decision, and it deserves time and thoughtful planning. I help Snohomish County homeowners consider their options
                and work through the next steps when they are ready.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={introRef}
              initial={{ opacity: 0, y: 16 }}
              animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="eyebrow mb-4" aria-hidden="true">
                The bigger picture...
              </p>
              <h2 className="font-heading h-section text-primary mb-8">
                Downsizing Is Rarely Just About the House
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>
                  It's about 30 years of accumulated life in the garage. The kitchen where you raised your kids. Whether
                  you can afford to stay, or whether the equity in this house could fund something better. Family
                  members with strong opinions and a timeline that feels impossible.
                </p>
                <p>
                  For some people, sorting belongings is the hardest part. For others, it is the finances, the logistics,
                  or deciding where to go next. We start with what feels difficult for you and what support would help,
                  then build the plan around that.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 bg-warm-bg border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="eyebrow mb-3">Specialized support for a significant transition...</p>
            <h2 className="font-heading h-card text-primary mb-4">Seniors Real Estate Specialist (SRES®)</h2>
            <p className="copy text-foreground">My SRES® credential reflects specialized training in the housing decisions that often affect older adults and their families. That includes timing, downsizing, accessibility, family communication, financial considerations, and coordinating a move that may involve decades of belongings. It does not replace legal, tax, medical, or financial advice, but it helps me recognize when those professionals should be part of the conversation.</p>
          </div>
        </section>

        {/* The Downsizing Process - 5 Steps */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={processRef}
              initial={{ opacity: 0, y: 16 }}
              animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="eyebrow mb-4" aria-hidden="true">
                One step at a time...
              </p>
              <h2 className="font-heading h-section text-primary">
                Planning Your Downsizing Move
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-8">
              {downsizingSteps.map((step, index) => (
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
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={differentRef}
              initial={{ opacity: 0, y: 16 }}
              animate={differentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="eyebrow mb-4" aria-hidden="true">
                Support for your move...
              </p>

              <h2 className="font-heading h-section text-primary mb-8">
                A Plan for More Than the Sale
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>Selling the house is only one piece. I also help you plan the move around it: the timing, the belongings, and the next place you'll call home.</p>
                <p>
                  For clients who need it, I've helped coordinate donation runs, packed boxes, arranged junk hauling,
                  managed staging logistics, and been a point of contact during a difficult transition. These are examples
                  from past moves, not guaranteed included services. We agree on responsibilities and any outside costs for your situation.
                </p>
                <p>
                  I am careful with complex documents, I look for the details that are easy to miss, and I explain things
                  clearly to people who are already stressed. I'll walk you through contracts in plain language, flag the clauses that matter, and answer
                  your questions before you decide what to sign.
                </p>
                <p>
                  I won't rush you, and I won't judge your stuff, your timeline, or your questions.
                  We move at the pace that makes sense for your life.
                </p>
              </div>
            </motion.div>
            <p className="mt-8 text-center text-foreground">
              Further reading: {" "}
              <Link to="/blog/downsizing-guide" className="text-secondary underline underline-offset-4 hover:text-primary">
                A Practical Guide to Downsizing Your Home Without Losing Your Mind
              </Link>
            </p>
          </div>
        </section>

        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading h-section text-primary mb-6">Helping a Parent From Out of Town?</h2>
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Coordinating a move from another city or state can leave you wondering who can help locally and where to
              begin. With your parent's permission, I can include the family members they choose, help coordinate
              agreed-upon details, and keep everyone informed.
            </p>
            <Link to="/blog/help-parents-downsize-out-of-area" className="text-secondary font-medium underline underline-offset-4 hover:text-primary">
              Read: Helping a Parent Downsize From Out of Area
            </Link>
          </div>
        </section>

        {/* Must-Have Guide Section */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={guideRef}
              initial={{ opacity: 0, y: 16 }}
              animate={guideInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="eyebrow mb-4" aria-hidden="true">
                Take it with you...
              </p>

              <h2 className="font-heading h-section text-primary mb-8">
                The Snohomish County Downsizing Guide
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                Not sure where to begin? This guide walks through what to think about before you decide anything, including the
                financial questions worth asking, how to approach the sorting and prep process without burning out, and
                what to look for in your next home. A practical reference to return to as you plan. A good starting point whether you're six
                months out or two years away.
              </p>

              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-white text-base sm:text-lg px-4 sm:px-8 py-6 whitespace-nowrap max-w-full">
                <a href="https://debbiewelchhomes.myflodesk.com/thinking-about-downsizing" target="_blank" rel="noopener noreferrer">
                  Get Your Downsizing Guide Here
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Downsizing Consult Form */}
        <section id="consult-request" className="section bg-background scroll-mt-28">
          <div className="container mx-auto px-4">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 16 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="eyebrow mb-4" aria-hidden="true">
                  Let's talk it through...
                </p>
                <h2 className="font-heading h-section text-primary mb-6">
                  Request a Free Downsizing Consult
                </h2>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  A free, no-obligation conversation about where you are, what you're thinking about, and
                  whether this is the right time to make a move. Share a few details below and I'll follow up to find a
                  time that works.
                </p>
              </div>

              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="website-hp">Website</label>
                      <Input
                        type="text"
                        id="website-hp"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        aria-label="Your name"
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
                        aria-label="Your email"
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
                        aria-label="Phone number, optional"
                        placeholder="Phone Number (optional)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        aria-label="Current home location"
                        placeholder="Where is your home? (City or neighborhood)"
                        value={formData.currentHome}
                        onChange={(e) => setFormData({ ...formData, currentHome: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Textarea
                        aria-label="Downsizing consultation details"
                        placeholder="What's on your mind? Share your timeline, questions, what is prompting the conversation, or whatever feels useful."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="font-body"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg"
                    >
                      {isSubmitting ? "Sending…" : "Send My Request"}
                    </Button>
                    <InquiryFallback />
                  </form>
                  ) : (
                    <div role="status" className="py-12 text-center">
                      <p className="text-xl font-body text-foreground mb-2">Thank you for reaching out!</p>
                      <p className="text-base font-body text-foreground">I’ll be in touch within one business day.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={faqRef}
              initial={{ opacity: 0, y: 16 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="eyebrow mb-4" aria-hidden="true">
                  Downsizing questions...
                </p>
                <h2 className="font-heading h-section text-primary">
                  Downsizing Questions I Hear All the Time
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
              <p className="mt-8 text-center">
                <a href="/resources/faq" className="font-medium text-secondary hover:underline">
                  Read more frequently asked questions
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={testimonialRef}
              initial={{ opacity: 0, y: 16 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="eyebrow mb-4" aria-hidden="true">
                  From downsizing clients...
                </p>
                <h2 className="font-heading h-section text-primary">
                  What My Clients Have to Say
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
        </section>      </main>
      <Footer />
    </div>
  );
};

export default Downsizing;

