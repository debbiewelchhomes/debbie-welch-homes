import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-home.jpg";
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
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "I'll be in touch soon to set up your property search.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const buyingSteps = [
    {
      number: "01",
      title: "Clarity & Pre-Approval",
      description: "We start with a strategy session to talk through your goals, timing, and non-negotiables. I'll connect you with trusted lenders (if needed), and we'll get you pre-approved so you're shopping with real numbers."
    },
    {
      number: "02",
      title: "Neighborhood Match & Home Search",
      description: "We'll narrow in on the Snohomish County areas that make sense for your lifestyle—whether that's Lake Stevens, Everett, Marysville, Snohomish, or nearby—and set up a curated search that doesn't waste your time."
    },
    {
      number: "03",
      title: "Touring & Evaluating Homes",
      description: "As we tour homes (in person or virtually), I'll walk you through both the highlights and the \"things to think about,\" so you can evaluate condition, layout, and long-term fit—not just pretty photos."
    },
    {
      number: "04",
      title: "Offer Strategy & Negotiation",
      description: "When you're ready, we'll build an offer that's competitive but thoughtful, reviewing terms like contingencies, timelines, and risk. I'll negotiate on your behalf and keep you fully informed throughout."
    },
    {
      number: "05",
      title: "From Contract to Keys",
      description: "Once you're under contract, I'll coordinate inspections, appraisals, paperwork, and communication with your lender and escrow so nothing slips through the cracks. My goal is a smooth, surprisingly calm path to closing."
    }
  ];

  const faqs = [
    {
      question: "How competitive is the market right now for buyers?",
      answer: "It depends on the price point and the specific area of Snohomish County. Some neighborhoods and price ranges still move quickly, while others give buyers a little more breathing room. I'll walk you through up-to-date data for the cities you're considering so you know what to expect before we start writing offers."
    },
    {
      question: "How much do I need for a down payment?",
      answer: "Many buyers purchase with less than 20% down, depending on the loan program and their overall financial picture. Your ideal down payment will depend on your goals, monthly comfort level, and lender recommendations. I'll connect you with trusted lenders who can explain your options clearly so we can search with real numbers."
    },
    {
      question: "Do I need to sell my current home before I buy?",
      answer: "Not always. Some buyers sell first, some buy first, and others use contingent offers or creative strategies. We'll look at your finances, timeline, and risk tolerance and decide together what makes the most sense for you."
    },
    {
      question: "What are the biggest 'hidden' costs of buying?",
      answer: "In addition to your down payment, you'll want to plan for closing costs, inspections, potential appraisal gaps, and move-in expenses like utilities, small repairs, or new furnishings. I'll outline these early so there are fewer surprises and we can budget realistically."
    },
    {
      question: "How long does it usually take to buy a home?",
      answer: "Once you're under contract, most purchases in our area close in roughly 30–45 days, depending on financing. The search phase can be very quick or take a bit longer based on your criteria and the market. I'll help you set a realistic timeline so you know what to expect."
    }
  ];

  const testimonials = [
    {
      quote: "Debbie made our first home purchase feel manageable instead of overwhelming. She explained everything in plain language and never made us feel rushed or pressured.",
      attribution: "– First-time buyers in Lake Stevens"
    },
    {
      quote: "We had very specific criteria and a tight budget. Debbie helped us find a home that checked all our boxes without compromising on what mattered most to our family.",
      attribution: "– Growing family in Marysville"
    },
    {
      quote: "Her knowledge of Snohomish County neighborhoods saved us so much time. She knew exactly which areas would fit our commute and lifestyle before we even started touring.",
      attribution: "– Relocating buyers in Everett"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 parallax-section" 
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${heroImage})`
            }}
            role="img"
            aria-label="Buying a home in Snohomish County"
          />
          
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary" aria-hidden="true">
                For Buyers
              </p>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Buying a Home in Snohomish County
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                Buying a home here isn't just about winning a bidding war—it's about choosing a place that actually fits your life. I help buyers in Lake Stevens, Everett, Marysville, Snohomish, and surrounding Snohomish County communities understand the market, compare neighborhoods, and move forward with clarity instead of panic.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Here's What I'll Help You With */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={introRef}
              initial={{ opacity: 0, y: 30 }}
              animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-5xl text-primary mb-8">
                Here's what I'll help you with…
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-4">
                <p>
                  From your very first search to the day you get keys, you shouldn't have to guess your way through the process. I'll help you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clarify your budget and comfort zone with your lender.</li>
                  <li>Understand how different areas compare for commute, schools, and amenities.</li>
                  <li>Read between the lines of listings and spot red flags early.</li>
                  <li>Craft smart, competitive offers that still respect your risk tolerance.</li>
                </ul>
                <p>
                  You'll always know what we're doing, why we're doing it, and what comes next.
                </p>
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
                The Buying Process
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
                          <h3 className="font-heading text-2xl md:text-3xl text-primary mb-4">
                            {step.title}
                          </h3>
                          <p className="font-body text-lg text-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Must-Have Guide Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={guideRef}
              initial={{ opacity: 0, y: 30 }}
              animate={guideInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                Must-have guide!
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                5 Things to Know Before Buying in Snohomish County
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                My Buyer Guide walks you through financing basics, local market norms, what to expect in inspections, and how to shop strategically in Snohomish County without losing your mind—or your budget.
              </p>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
                Get the Buyer Guide
              </Button>
            </motion.div>
          </div>
        </section>

        {/* What Makes Working With Me Different */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={differentRef}
              initial={{ opacity: 0, y: 30 }}
              animate={differentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                Soft landing…
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                What Makes Working With Me Different
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-4">
                <p>
                  I'm not here to drag you through as many homes as possible and push you into the first one you hesitate on. I'm here to help you understand the "why" behind each decision.
                </p>
                <p>You'll get:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Straight talk about conditions, pricing, and competition.</li>
                  <li>Calm, organized next steps instead of chaos.</li>
                  <li>Extra support for first-time buyers who want to ask "one more question" (or ten).</li>
                  <li>A partner who cares about how this home will feel to live in, not just whether it will close.</li>
                </ul>
              </div>
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
                <h2 className="font-heading text-3xl md:text-5xl text-primary mb-6">
                  Set Up a No-Obligation Property Search
                </h2>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  Wondering what's actually available in your price range? I'll create a custom search for you in the areas that fit your lifestyle and budget—no spam, no pressure.
                </p>
                <p className="font-body text-base text-muted-foreground">
                  Share a few details below and I'll set up a tailored search for you in Snohomish County.
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
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell me about your ideal home, preferred areas, timeline, and any questions you have..."
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
                      Set Up My Property Search
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
                  Still have questions?
                </p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                  About Buying Real Estate in Snohomish County
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
                  Don't just take my word for it…
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
                        <blockquote className="font-body text-lg text-foreground leading-relaxed mb-6 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="font-body text-base text-muted-foreground">
                          {testimonial.attribution}
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
