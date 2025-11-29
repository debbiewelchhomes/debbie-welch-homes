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

const homeEvaluationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  address: z.string().trim().min(1, "Address is required").max(200),
  message: z.string().trim().max(1000).optional(),
});

const Selling = () => {
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
    
    try {
      homeEvaluationSchema.parse(formData);
      
      toast({
        title: "Request submitted!",
        description: "I'll prepare your home evaluation and be in touch soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
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
            For Sellers
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Selling a Home in Snohomish County
          </h1>
          <p className="text-lg md:text-xl text-primary max-w-3xl mx-auto leading-relaxed">
            Selling a home you've lived in—and poured time, money, and memories into—can feel huge. I help Snohomish County sellers prepare, price, and present their homes in a way that attracts the right buyers, protects their sanity, and supports their next step, whether that's upsizing, downsizing, or relocating.
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
                Whether you're selling a long-time family home or a more recent move, you shouldn't have to guess what truly matters.
              </p>
              <p className="text-foreground font-semibold mb-4">I'll help you:</p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Understand how your home fits into the current Snohomish County market.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Decide which updates, repairs, or staging efforts are actually worth the time and money.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Price strategically so you're competitive without leaving money on the table.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Navigate showings, offers, negotiations, and timelines with a clear plan.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Selling Process */}
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
              The Selling Process
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Walkthrough & Strategy",
                content: "We start with a walkthrough (in person or virtual) and a conversation about your goals, timing, and concerns. I'll share honest feedback and a high-level plan for getting your home ready."
              },
              {
                step: "02",
                title: "Prep & Presentation Plan",
                content: "I'll outline which tweaks will have the most impact—whether that's decluttering, paint, small repairs, or staging—and connect you with trusted local pros if needed."
              },
              {
                step: "03",
                title: "Pricing & Listing Strategy",
                content: "Using recent data and an understanding of your ideal buyer, we'll set a pricing and launch strategy that fits both the market and your goals."
              },
              {
                step: "04",
                title: "Showings, Offers & Negotiation",
                content: "I'll handle marketing, showings, and communication with buyer agents, then walk you through each offer's strengths, weaknesses, and fine print so you can choose what's right for you."
              },
              {
                step: "05",
                title: "From Contract to Close",
                content: "Once under contract, I'll manage timelines, inspections, appraisal, and all the moving pieces so you always know what's happening and what's needed from you."
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

      {/* Seller Guide */}
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
              5 Smart Steps to Selling in Snohomish County
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              My Seller Guide walks you through what to do (and what to skip) when preparing your home for the market, plus what to expect from pricing, showings, and offers in Snohomish County.
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Get the Seller Guide
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
                You won't get a one-size-fits-all checklist or pressure to overhaul your house. Instead, you'll get:
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>A tailored prep plan based on your timeline, budget, and capacity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Clear explanations of your options—not just "you should do this."</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>Strong advocacy in pricing and negotiations, paired with honest pros and cons.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span>A calm, detail-focused partner who knows your home is more than a line on a spreadsheet.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Home Evaluation Form */}
      <section className="py-20 bg-warm-bg">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Set Up a No-Obligation Home Evaluation
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-2 text-center">
              Curious what your home could sell for in today's Snohomish County market? I'll prepare a thoughtful evaluation based on your home's features, recent sales, and current trends—and we can talk through potential strategies with zero pressure.
            </p>
            <p className="text-sm text-muted-foreground mb-8 text-center">
              Share your details below and I'll follow up with a customized evaluation and next-step options.
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
                    <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                      Home Address *
                    </label>
                    <Input
                      id="address"
                      type="text"
                      required
                      maxLength={200}
                      placeholder="Street address, City, State, ZIP"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
                      placeholder="Any specific questions or details about your home?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Request My Home Evaluation
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
              About Selling Real Estate in Snohomish County
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-xl text-primary hover:no-underline">
                  When is the best time to sell my home?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  There are seasonal patterns in every market, but the right time to sell is the one that makes sense for your life and lines up with current local data. Together we'll look at what's happening in your specific neighborhood and price range so you can decide on timing that feels both practical and realistic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-xl text-primary hover:no-underline">
                  Do I have to do a lot of updates before listing?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  Not necessarily. Some homes benefit from strategic updates; others simply need a good clean, declutter, and a bit of styling. I'll show you which changes are likely to have the biggest impact and which projects you can comfortably skip.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-xl text-primary hover:no-underline">
                  How do we decide on a listing price?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  We'll look at recent comparable sales, current inventory, your home's condition and features, and your goals for timing and net proceeds. Pricing is a strategy, not just a number—we'll walk through different options so you feel confident in the plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-xl text-primary hover:no-underline">
                  What should I expect during showings?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  We'll talk about a showing schedule that works as well as possible with your day-to-day life. I'll give you simple guidelines for how "ready" the house needs to be, and we'll make a plan for pets, kids, and work-from-home routines so it feels manageable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-xl text-primary hover:no-underline">
                  How long will it take my home to sell?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  That depends on your price point, location, condition, and the current market. We'll review days-on-market data for similar homes so you have a realistic range and aren't left guessing.
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

export default Selling;
