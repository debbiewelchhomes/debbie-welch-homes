import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialSection from "@/components/TestimonialSection";
import { z } from "zod";

const propertySearchSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  priceRange: z.string().trim().max(100).optional(),
  areas: z.string().trim().max(500).optional(),
  message: z.string().trim().max(1000).optional(),
});

const Buying = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    priceRange: "",
    areas: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      propertySearchSchema.parse(formData);
      
      toast({
        title: "Request submitted!",
        description: "I'll set up your custom property search and be in touch soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        priceRange: "",
        areas: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Please check your information",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/src/assets/hero-home.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/40" aria-hidden="true" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-script text-4xl md:text-6xl text-secondary mb-6" aria-hidden="true">
            For Buyers
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Buying a Home in Snohomish County
          </h1>
          <p className="text-lg md:text-xl text-primary max-w-3xl mx-auto leading-relaxed">
            Buying a home here isn't just about winning a bidding war—it's about choosing a place that actually fits your life. I help buyers in Lake Stevens, Everett, Marysville, Snohomish, and surrounding Snohomish County communities understand the market, compare neighborhoods, and move forward with clarity instead of panic.
          </p>
        </div>
      </section>

      {/* Here's What I'll Help You With */}
      <section className="py-20 bg-warm-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
              Here's what I'll help you with…
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                From your very first search to the day you get keys, you shouldn't have to guess your way through the process. I'll help you:
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Clarify your budget and comfort zone with your lender.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Understand how different areas compare for commute, schools, and amenities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Read between the lines of listings and spot red flags early.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Craft smart, competitive offers that still respect your risk tolerance.</span>
                </li>
              </ul>
              <p className="text-foreground leading-relaxed mt-6">
                You'll always know what we're doing, why we're doing it, and what comes next.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Buying Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
              How it works…
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary">
              The Buying Process
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Clarity & Pre-Approval",
                content: "We start with a strategy session to talk through your goals, timing, and non-negotiables. I'll connect you with trusted lenders (if needed), and we'll get you pre-approved so you're shopping with real numbers."
              },
              {
                step: "02",
                title: "Neighborhood Match & Home Search",
                content: "We'll narrow in on the Snohomish County areas that make sense for your lifestyle—whether that's Lake Stevens, Everett, Marysville, Snohomish, or nearby—and set up a curated search that doesn't waste your time."
              },
              {
                step: "03",
                title: "Touring & Evaluating Homes",
                content: "As we tour homes (in person or virtually), I'll walk you through both the highlights and the \"things to think about,\" so you can evaluate condition, layout, and long-term fit—not just pretty photos."
              },
              {
                step: "04",
                title: "Offer Strategy & Negotiation",
                content: "When you're ready, we'll build an offer that's competitive but thoughtful, reviewing terms like contingencies, timelines, and risk. I'll negotiate on your behalf and keep you fully informed throughout."
              },
              {
                step: "05",
                title: "From Contract to Keys",
                content: "Once you're under contract, I'll coordinate inspections, appraisals, paperwork, and communication with your lender and escrow so nothing slips through the cracks. My goal is a smooth, surprisingly calm path to closing."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border bg-card">
                  <CardContent className="p-8">
                    <div className="flex gap-6">
                      <div className="font-heading text-5xl font-bold text-secondary flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-foreground leading-relaxed">
                          {step.content}
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

      {/* Buyer Guide */}
      <section className="py-20 bg-warm-bg">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
              Must-have guide!
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
              5 Things to Know Before Buying in Snohomish County
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              My Buyer Guide walks you through financing basics, local market norms, what to expect in inspections, and how to shop strategically in Snohomish County without losing your mind—or your budget.
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Get the Buyer Guide
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What Makes Working With Me Different */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-3xl md:text-5xl text-secondary mb-6 text-center" aria-hidden="true">
              Soft landing…
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8 text-center">
              What Makes Working With Me Different
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                I'm not here to drag you through as many homes as possible and push you into the first one you hesitate on. I'm here to help you understand the "why" behind each decision.
              </p>
              <p className="text-foreground font-semibold mb-4">You'll get:</p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Straight talk about conditions, pricing, and competition.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Calm, organized next steps instead of chaos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Extra support for first-time buyers who want to ask "one more question" (or ten).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>A partner who cares about how this home will feel to live in, not just whether it will close.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Search Form */}
      <section className="py-20 bg-warm-bg">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Set Up a No-Obligation Property Search
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-2 text-center">
              Wondering what's actually available in your price range? I'll create a custom search for you in the areas that fit your lifestyle and budget—no spam, no pressure.
            </p>
            <p className="text-sm text-muted-foreground mb-8 text-center">
              Share a few details below and I'll set up a tailored search for you in Snohomish County.
            </p>

            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      maxLength={20}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="priceRange" className="block text-sm font-medium text-foreground mb-2">
                      Price Range
                    </label>
                    <Input
                      id="priceRange"
                      type="text"
                      maxLength={100}
                      placeholder="e.g., $400,000 - $550,000"
                      value={formData.priceRange}
                      onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="areas" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Areas
                    </label>
                    <Input
                      id="areas"
                      type="text"
                      maxLength={500}
                      placeholder="e.g., Lake Stevens, Marysville"
                      value={formData.areas}
                      onChange={(e) => setFormData({ ...formData, areas: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      id="message"
                      maxLength={1000}
                      rows={4}
                      placeholder="Any specific must-haves or questions?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Set Up My Property Search
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-3xl md:text-5xl text-secondary mb-6 text-center" aria-hidden="true">
              Still have questions?
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-12 text-center">
              About Buying Real Estate in Snohomish County
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-xl text-primary hover:no-underline">
                  How competitive is the market right now for buyers?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  It depends on the price point and the specific area of Snohomish County. Some neighborhoods and price ranges still move quickly, while others give buyers a little more breathing room. I'll walk you through up-to-date data for the cities you're considering so you know what to expect before we start writing offers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-xl text-primary hover:no-underline">
                  How much do I need for a down payment?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  Many buyers purchase with less than 20% down, depending on the loan program and their overall financial picture. Your ideal down payment will depend on your goals, monthly comfort level, and lender recommendations. I'll connect you with trusted lenders who can explain your options clearly so we can search with real numbers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-xl text-primary hover:no-underline">
                  Do I need to sell my current home before I buy?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  Not always. Some buyers sell first, some buy first, and others use contingent offers or creative strategies. We'll look at your finances, timeline, and risk tolerance and decide together what makes the most sense for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-xl text-primary hover:no-underline">
                  What are the biggest "hidden" costs of buying?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  In addition to your down payment, you'll want to plan for closing costs, inspections, potential appraisal gaps, and move-in expenses like utilities, small repairs, or new furnishings. I'll outline these early so there are fewer surprises and we can budget realistically.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-xl text-primary hover:no-underline">
                  How long does it usually take to buy a home?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  Once you're under contract, most purchases in our area close in roughly 30–45 days, depending on financing. The search phase can be very quick or take a bit longer based on your criteria and the market. I'll help you set a realistic timeline so you know what to expect.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      <Footer />
    </div>
  );
};

export default Buying;
