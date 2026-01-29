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
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "I'll be in touch soon to schedule your downsizing consult.",
    });
    setFormData({ name: "", email: "", phone: "", currentHome: "", message: "" });
  };

  const downsizingSteps = [
    {
      number: "01",
      title: "Clarify Your Next Chapter",
      description: "We start with a conversation about what you want this next season to look like—budget, preferred locations, stairs vs. single-level, yard vs. low-maintenance, and your ideal timing."
    },
    {
      number: "02",
      title: "Evaluate Your Current Home",
      description: "I'll walk through your home (in person or virtually) to identify what truly needs attention and what doesn't. You'll get a prioritized list of prep items based on likely return and your capacity."
    },
    {
      number: "03",
      title: "Prep, Support & Staging Plan",
      description: "We'll bring in any needed support—organizers, cleaners, minor repairs—and determine whether full staging or partial styling makes sense for your price point and target buyer."
    },
    {
      number: "04",
      title: "List, Market & Navigate Offers",
      description: "Once your home is ready, I'll position it thoughtfully for the current Snohomish County market, manage showings, and help you evaluate offers based on both price and terms that support your next-step timeline."
    },
    {
      number: "05",
      title: "Transition Smoothly to Your Next Home",
      description: "We'll coordinate your sale with your next purchase or move, work through logistics like rent-backs or extended closings when possible, and keep communication clear so you know exactly what's happening from contract to keys."
    }
  ];

  const faqs = [
    {
      question: "How do I know if it's the right time to downsize?",
      answer: "Signs it may be time include feeling overwhelmed by maintenance, unused space, stairs that are getting harder, or monthly costs that no longer match your income or priorities. We can talk through your situation and see whether a move now—or a phased plan—makes the most sense."
    },
    {
      question: "Do I have to get rid of everything at once?",
      answer: "Not at all. Downsizing is often easier when it's done in stages. I can connect you with organizers and other professionals who specialize in helping homeowners sort, donate, sell, and simplify over time instead of all at once."
    },
    {
      question: "Should I buy my next place before I sell, or sell first?",
      answer: "Both options can work; it depends on your finances, comfort level, and the type of home you're moving into. We'll look at your numbers and timeline and talk through the pros and cons of each approach so you can choose what feels most secure."
    },
    {
      question: "What kinds of homes work best for downsizing?",
      answer: "Many downsizers prefer single-level homes, townhomes, or condos with minimal yard work and easy access to services. We'll focus on homes that support your health, hobbies, and long-term plans—not just something smaller on paper."
    },
    {
      question: "Can you work with my adult children too?",
      answer: "Absolutely. Downsizing often involves family members, and I'm happy to keep everyone in the loop while still centering your needs and preferences. Clear communication can make this process much smoother for everyone."
    }
  ];

  const testimonials = [
    {
      quote: "Debbie helped us let go of our family home without feeling rushed or guilty. She understood both the practical and emotional sides of downsizing.",
      attribution: "– Empty nesters in Lake Stevens"
    },
    {
      quote: "We weren't sure if we were ready, but Debbie helped us see that downsizing was the right move. Her step-by-step approach made it so much easier.",
      attribution: "– Retirees downsizing in Marysville"
    },
    {
      quote: "She connected us with organizers and movers who understood our needs. The whole process felt supportive instead of overwhelming.",
      attribution: "– Downsizing couple in Everett"
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
            aria-label="Downsizing in Snohomish County"
          />
          
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-backdrop"
            >
              <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary" aria-hidden="true">
                For Downsizing
              </p>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Downsizing in Snohomish County
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                Letting go of a long-time home is rarely just about square footage. It's about memories, energy, and what you want this next season of life to feel like. I help Snohomish County homeowners—often empty nesters and near-retirees—right-size into homes that better match their current lifestyle, without feeling rushed or pressured into decisions they're not ready for.
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
                  Downsizing touches your finances, family, and daily routines all at once. My job is to make the process less overwhelming and more step-by-step.
                </p>
                <p>We'll work through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clarifying your next-step vision—staying local vs. moving closer to family, single-level living, low-maintenance communities, or lock-and-leave options.</li>
                  <li>Preparing your current home with a realistic plan for decluttering, light updates, and repairs that will actually move the needle.</li>
                  <li>Pricing and timing strategically so you're not scrambling between two moves.</li>
                  <li>Connecting you to trusted stagers, organizers, cleaners, and contractors who understand the needs of downsizers.</li>
                </ul>
                <p>
                  You'll always know what's next and why we're doing it.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Downsizing Process - 5 Steps */}
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
                The Downsizing Process
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
                The Snohomish County Downsizing Guide
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                My Snohomish County Downsizing Guide walks you through what to tackle first, how to prep your home without burning out, and what to consider when choosing your next place—whether that's a condo, smaller single-family home, or something else entirely.
              </p>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
                Get the Downsizing Guide
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
                  Downsizing is emotional as much as it is practical. I approach it with a mix of empathy, realism, and clear communication.
                </p>
                <p>You can expect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No pressure, ever. My job is to lay out your options and timing, not push you into moving before you're ready.</li>
                  <li>Step-by-step planning that breaks an overwhelming project into smaller, doable pieces.</li>
                  <li>An understanding of accessibility and long-term livability, so your next home actually works for you five or ten years from now.</li>
                  <li>Steady communication so you and your family feel informed, even if multiple decision-makers are involved.</li>
                </ul>
                <p>
                  You'll never be shamed for your stuff or your timeline. We move at the pace that respects your reality.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Downsizing Consult Form */}
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
                  Set Up a No-Obligation Downsizing Consult
                </h2>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  Thinking about downsizing in the next year or two, but not sure where to begin? Let's talk through your goals, timing, and questions. We'll map out a rough plan so you know what to expect—whether you're ready to list soon or just starting to explore options.
                </p>
                <p className="font-body text-base text-muted-foreground">
                  Share a few details below and I'll follow up with a time that works for you.
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
                        placeholder="Current Home Location (City, Neighborhood)"
                        value={formData.currentHome}
                        onChange={(e) => setFormData({ ...formData, currentHome: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell me about your downsizing goals, timeline, and any questions you have..."
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
                      Request a Downsizing Consult
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
                  Still feeling unsure?
                </p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                  About Downsizing in Snohomish County
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
                  What My Downsizing Clients Have to Say
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

export default Downsizing;
