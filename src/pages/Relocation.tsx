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
import heroImage from "@/assets/hero-relocation.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Relocation = () => {
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
    currentLocation: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "I'll be in touch soon to schedule your relocation consult.",
    });
    setFormData({ name: "", email: "", phone: "", currentLocation: "", message: "" });
  };

  const relocationSteps = [
    {
      number: "01",
      title: "Get Oriented",
      description: "We start with a Zoom or phone consult to talk through your timeline, budget, must-haves, and concerns. I'll walk you through current Snohomish County market conditions and help you prioritize which areas fit best."
    },
    {
      number: "02",
      title: "Area & Home Matchmaking",
      description: "I'll create a curated list of cities, neighborhoods, and sample homes, then send you maps, videos, and notes so you can compare options side-by-side—no more guessing from Google Street View."
    },
    {
      number: "03",
      title: "Virtual Touring & Shortlist",
      description: "When you're ready, we'll tour homes virtually or in person (if you can visit), and I'll point out both the highlights and the \"real life\" details you can't see in photos. Together we'll build a realistic shortlist."
    },
    {
      number: "04",
      title: "Offer Strategy & Contract-to-Close",
      description: "Once you've chosen a home, I'll help you craft a competitive, thoughtful offer that respects your budget and risk tolerance. From there, I'll manage deadlines, inspections, paperwork, and communication with your lender and escrow so you can focus on the logistics of moving."
    },
    {
      number: "05",
      title: "Welcome Home & Local Support",
      description: "After closing, I'll stay in your corner with recommendations for local pros, services, and favorite spots—plus ongoing check-ins so you never feel like you were dropped the day you got your keys."
    }
  ];

  const faqs = [
    {
      question: "Is Snohomish County a good fit for my commute to Seattle or the Eastside?",
      answer: "It can be, depending on where you live and when you commute. We'll look at options along I-5, Highway 2, 9, and 522 and talk honestly about drive times, traffic patterns, and park-and-ride options so you can balance budget, lifestyle, and commute."
    },
    {
      question: "Can I buy a home here without seeing it in person first?",
      answer: "Yes, many relocators do, but it requires extra care. I'll provide detailed virtual tours, photos, and notes, and we'll build in protections like inspections and clear contingencies whenever possible so you feel confident in your decision."
    },
    {
      question: "What if I need to sell in another state before I buy here?",
      answer: "You're not alone in that. I'll coordinate with your out-of-area agent and your lender to line up timelines as best we can. We'll talk through contingent offers, temporary housing options, and other strategies so you don't feel stuck."
    },
    {
      question: "How far in advance should I start planning my move?",
      answer: "Ideally, we start a few months before you need to be here, and even earlier if you have a home to sell or a complex timeline. The sooner we connect, the more options we'll have to design a plan that feels manageable."
    },
    {
      question: "Do you work with VA buyers and military relocations?",
      answer: "Yes. As a Navy spouse, I understand the realities of PCS moves and VA financing. I'm comfortable helping VA buyers compete thoughtfully while protecting their benefits and budget."
    }
  ];

  const testimonials = [
    {
      quote: "Debbie helped us find a home from across the country. Her virtual tours were so detailed we felt like we'd already walked through the house. The whole process felt surprisingly calm.",
      attribution: "– Military family relocating to Marysville"
    },
    {
      quote: "She knew exactly which neighborhoods would work for our commute and budget. We saved so much time not having to research everything ourselves.",
      attribution: "– Corporate relocation to Lake Stevens"
    },
    {
      quote: "Moving with three kids and two dogs felt impossible until Debbie walked us through each step. She made the whole thing manageable and even enjoyable.",
      attribution: "– Growing family relocating to Everett"
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
            aria-label="Relocating to Snohomish County"
          />
          
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-backdrop"
            >
              <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary" aria-hidden="true">
                For Relocating
              </p>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Relocating to Snohomish County, WA
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                Moving to a new area is exciting—and a little overwhelming. Whether you're PCS'ing with the military, relocating for work, or starting fresh in the Pacific Northwest, my job is to help you feel grounded long before the moving truck shows up. Together we'll narrow in on the right cities and neighborhoods, understand what your budget really buys here, and create a plan that makes your move to Snohomish County feel calm, not chaotic.
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
                  Most relocators don't just need a house—they need context. I'll help you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Compare cities and neighborhoods like Lake Stevens, Everett, Marysville, and surrounding Snohomish County communities.</li>
                  <li>Understand commute routes, schools, amenities, and the "feel" of different areas.</li>
                  <li>Tour homes virtually with honest commentary, not just listing photos.</li>
                  <li>Make offers and decisions from afar with clear information and realistic expectations.</li>
                </ul>
                <p>
                  You'll never be left piecing things together from internet searches alone—I'll be your eyes, ears, and boots on the ground here.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Relocation Process - 5 Steps */}
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
                The Relocation Process
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-8">
              {relocationSteps.map((step, index) => (
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
                Relocating to Snohomish County, WA
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                My upcoming Relocating to Snohomish County guide walks you through neighborhoods, commute considerations, local price points, and what to know about buying from out of the area—especially if you're military or relocating for work.
              </p>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
                Get the Relocation Guide
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
                  Relocation is a different animal than buying locally. You're making big decisions with less in-person time and more moving parts. I've helped many clients move into and around Snohomish County—often while they were still out of state or overseas.
                </p>
                <p>You can expect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Honest, context-rich feedback—not sugar-coated sales talk.</li>
                  <li>Flexible communication, including video updates and screen-shares.</li>
                  <li>Respect for your time zone and schedule, especially for military families and shift workers.</li>
                  <li>A calm, organized plan, so you know what's next and what's expected of you at each step.</li>
                </ul>
                <p>
                  My goal is for you to feel like you already know the area before you ever unpack a box.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Relocation Consult Form */}
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
                  Set Up a No-Obligation Relocation Consult
                </h2>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  Thinking about moving to Snohomish County but not quite ready to jump on a plane? Let's talk through your timing, budget, and options. We'll cover where your money goes the furthest, which areas might fit your lifestyle, and what a realistic plan could look like.
                </p>
                <p className="font-body text-base text-muted-foreground">
                  Share a few details below and I'll follow up to schedule a time that works for you.
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
                        placeholder="Current Location (City, State)"
                        value={formData.currentLocation}
                        onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell me about your move timeline, budget, preferred areas, and any questions you have..."
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
                      Request a Relocation Consult
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
                  About Relocating to Snohomish County
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
                  What My Relocation Clients Have to Say
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

export default Relocation;
