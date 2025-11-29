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
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "I'll be in touch soon with your home evaluation.",
    });
    setFormData({ name: "", email: "", phone: "", address: "", message: "" });
  };

  const sellingSteps = [
    {
      number: "01",
      title: "Walkthrough & Strategy",
      description: "We start with a walkthrough (in person or virtual) and a conversation about your goals, timing, and concerns. I'll share honest feedback and a high-level plan for getting your home ready."
    },
    {
      number: "02",
      title: "Prep & Presentation Plan",
      description: "I'll outline which tweaks will have the most impact—whether that's decluttering, paint, small repairs, or staging—and connect you with trusted local pros if needed."
    },
    {
      number: "03",
      title: "Pricing & Listing Strategy",
      description: "Using recent data and an understanding of your ideal buyer, we'll set a pricing and launch strategy that fits both the market and your goals."
    },
    {
      number: "04",
      title: "Showings, Offers & Negotiation",
      description: "I'll handle marketing, showings, and communication with buyer agents, then walk you through each offer's strengths, weaknesses, and fine print so you can choose what's right for you."
    },
    {
      number: "05",
      title: "From Contract to Close",
      description: "Once under contract, I'll manage timelines, inspections, appraisal, and all the moving pieces so you always know what's happening and what's needed from you."
    }
  ];

  const faqs = [
    {
      question: "When is the best time to sell my home?",
      answer: "There are seasonal patterns in every market, but the right time to sell is the one that makes sense for your life and lines up with current local data. Together we'll look at what's happening in your specific neighborhood and price range so you can decide on timing that feels both practical and realistic."
    },
    {
      question: "Do I have to do a lot of updates before listing?",
      answer: "Not necessarily. Some homes benefit from strategic updates; others simply need a good clean, declutter, and a bit of styling. I'll show you which changes are likely to have the biggest impact and which projects you can comfortably skip."
    },
    {
      question: "How do we decide on a listing price?",
      answer: "We'll look at recent comparable sales, current inventory, your home's condition and features, and your goals for timing and net proceeds. Pricing is a strategy, not just a number—we'll walk through different options so you feel confident in the plan."
    },
    {
      question: "What should I expect during showings?",
      answer: "We'll talk about a showing schedule that works as well as possible with your day-to-day life. I'll give you simple guidelines for how 'ready' the house needs to be, and we'll make a plan for pets, kids, and work-from-home routines so it feels manageable."
    },
    {
      question: "How long will it take my home to sell?",
      answer: "That depends on your price point, location, condition, and the current market. We'll review days-on-market data for similar homes so you have a realistic range and aren't left guessing."
    }
  ];

  const testimonials = [
    {
      quote: "Debbie gave us realistic advice about what was worth fixing and what we could leave alone. We saved time and money, and the house still showed beautifully.",
      attribution: "– Downsizing sellers in Lake Stevens"
    },
    {
      quote: "She walked us through every offer in plain language and helped us understand the pros and cons. We never felt pressured or confused.",
      attribution: "– Growing family selling in Marysville"
    },
    {
      quote: "From pricing to closing, Debbie kept us informed and calm. Selling felt so much more manageable than we expected.",
      attribution: "– Relocating sellers in Everett"
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
            aria-label="Selling a home in Snohomish County"
          />
          
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary" aria-hidden="true">
                For Sellers
              </p>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Selling a Home in Snohomish County
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                Selling a home you've lived in—and poured time, money, and memories into—can feel huge. I help Snohomish County sellers prepare, price, and present their homes in a way that attracts the right buyers, protects their sanity, and supports their next step, whether that's upsizing, downsizing, or relocating.
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
                  Whether you're selling a long-time family home or a more recent move, you shouldn't have to guess what truly matters.
                </p>
                <p>I'll help you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Understand how your home fits into the current Snohomish County market.</li>
                  <li>Decide which updates, repairs, or staging efforts are actually worth the time and money.</li>
                  <li>Price strategically so you're competitive without leaving money on the table.</li>
                  <li>Navigate showings, offers, negotiations, and timelines with a clear plan.</li>
                </ul>
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
                How it works…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                The Selling Process
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
                5 Smart Steps to Selling in Snohomish County
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                My Seller Guide walks you through what to do (and what to skip) when preparing your home for the market, plus what to expect from pricing, showings, and offers in Snohomish County.
              </p>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
                Get the Seller Guide
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
                  You won't get a one-size-fits-all checklist or pressure to overhaul your house. Instead, you'll get:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A tailored prep plan based on your timeline, budget, and capacity.</li>
                  <li>Clear explanations of your options—not just "you should do this."</li>
                  <li>Strong advocacy in pricing and negotiations, paired with honest pros and cons.</li>
                  <li>A calm, detail-focused partner who knows your home is more than a line on a spreadsheet.</li>
                </ul>
              </div>
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
                <h2 className="font-heading text-3xl md:text-5xl text-primary mb-6">
                  Set Up a No-Obligation Home Evaluation
                </h2>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  Curious what your home could sell for in today's Snohomish County market? I'll prepare a thoughtful evaluation based on your home's features, recent sales, and current trends—and we can talk through potential strategies with zero pressure.
                </p>
                <p className="font-body text-base text-muted-foreground">
                  Share your details below and I'll follow up with a customized evaluation and next-step options.
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
                        placeholder="Tell me about your home, your timeline, and any questions you have..."
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
                  Still have questions?
                </p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                  About Selling Real Estate in Snohomish County
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

export default Selling;
