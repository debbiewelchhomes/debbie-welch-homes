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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Got it - thank you.",
      description: "I'll follow up soon to find a time that works for you.",
    });
    setFormData({ name: "", email: "", phone: "", currentHome: "", message: "" });
  };

  const downsizingSteps = [
    {
      number: "01",
      title: "Start With a Real Conversation",
      description:
        "Not a sales pitch - a conversation. We talk through what's prompting the question, what you want your next chapter to feel like, and whether now is actually the right time. Sometimes it is. Sometimes the answer is 'let's come back to this in six months.' Either way, you'll leave with more clarity than you came in with.",
    },
    {
      number: "02",
      title: "Understand What Your Home Is Worth",
      description:
        "Before you can make a plan, you need real numbers. I'll walk through your home and give you an honest picture of current market value, what prep work would actually move the needle, and what you can skip. No pressure to list - just the information you need to make a good decision.",
    },
    {
      number: "03",
      title: "Build a Prep Plan You Can Actually Do",
      description:
        "We'll prioritize what needs attention and what doesn't. I can connect you with stagers, organizers, cleaners, and contractors who understand the downsizing process - and for clients who need more hands-on help, I've done everything from donation runs to helping pack a POD. We meet you where you are.",
    },
    {
      number: "04",
      title: "List and Market Your Home Well",
      description:
        "When you're ready, I'll position your home thoughtfully for the Snohomish County market - pricing strategy, professional photos, marketing that reaches the right buyers. You'll know exactly what's happening at every step, and I'll walk you through offers in plain language so you understand what you're actually agreeing to.",
    },
    {
      number: "05",
      title: "Coordinate the Transition",
      description:
        "Selling and moving at the same time is a lot. We'll work through the logistics together - timing the sale with your next move, exploring rent-backs or extended closings when needed, and keeping things organized so nothing falls through the cracks. The goal is a landing that feels like a landing, not a scramble.",
    },
  ];

  const faqs = [
    {
      question: "How do I know if it's actually the right time to downsize?",
      answer:
        "Honest answer: there's rarely a perfect time. But some real signs worth paying attention to - the maintenance feels like more than you want to manage, you're paying for space you don't use, stairs are becoming a concern, or your monthly costs no longer match your priorities or income. We can talk through your specific situation and look at the numbers together. Sometimes the answer is 'yes, let's make a plan.' Sometimes it's 'you have more time than you think.' I'd rather tell you the truth than push you toward a move that doesn't make sense yet.",
    },
    {
      question: "Do I have to get rid of everything before I sell?",
      answer:
        "No. And trying to do it all at once is one of the fastest ways to burn out and stall the whole process. Most people do better working through belongings in stages - a room or category at a time. I can connect you with organizers who specialize in working with downsizers and are genuinely good at the emotional side of letting go. You don't have to figure this part out alone.",
    },
    {
      question: "Should I buy first or sell first?",
      answer:
        "It depends on your finances, your comfort with risk, and what you're moving into. Buying first gives you certainty about where you're going but can mean carrying two mortgages temporarily. Selling first gives you cash in hand but requires knowing where you'll land. We'll look at your specific numbers and timeline and talk through both options honestly - including some in-between approaches like rent-backs that can give you more breathing room.",
    },
    {
      question: "What kinds of homes make sense for downsizing?",
      answer:
        "It varies a lot depending on what matters most to you. Many clients want single-level living, a smaller yard or no yard, and lower maintenance overall. Others want to stay in a neighborhood they know. Some are open to condos or townhomes; others aren't. We'll focus on homes that genuinely fit your life - not just something smaller on paper. I'll also ask about things like accessibility, proximity to family or medical care, and what you want to be able to do five or ten years from now.",
    },
    {
      question: "My adult kids have opinions about all of this. Can you help with that?",
      answer:
        "Yes - and you're not alone in navigating that dynamic. Downsizing decisions often involve family members who care deeply but may not all be on the same page. I'm happy to communicate with whoever needs to be in the loop, answer questions from adult children, and help everyone work from the same factual picture instead of assumptions. At the end of the day though, this is your home and your decision. My job is to support you.",
    },
    {
      question: "What does it cost to talk with you?",
      answer:
        "Nothing. An initial conversation is always free. If you decide you want to move forward, my commission is paid at closing - you don't pay anything out of pocket upfront. If you're not ready to sell, or it turns out this isn't the right move for you right now, that's completely okay. I'd rather be honest with you now than push you into something that doesn't fit.",
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
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 parallax-section"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${heroImage})`,
            }}
            role="img"
            aria-label="Downsizing and life transitions in Snohomish County"
          />

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-backdrop"
            >
              <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary" aria-hidden="true">
                A new chapter…
              </p>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Downsizing & Life Transitions in Snohomish County
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                You've taken care of this home for years. Maybe decades. And now something has shifted - the
                maintenance, the space, the stairs, the cost, the season of life. Figuring out what comes next is a big
                decision, and it deserves more than a sales pitch. I help Snohomish County homeowners think it through
                clearly, plan it carefully, and move when the time is actually right for them.
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
                Real talk…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-primary mb-8">
                Downsizing Is Rarely Just About the House
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>
                  It's about 30 years of accumulated life in the garage. The kitchen where you raised your kids. Whether
                  you can afford to stay, or whether the equity in this house could fund something better. Family
                  members with strong opinions and a timeline that feels impossible.
                </p>
                <p>
                  The practical part - the selling, the pricing, the logistics - is actually the easier part. The harder
                  part is figuring out what you actually want, what you can realistically do, and how to make a decision
                  you'll feel good about a year from now. That's where we start. Not with a listing appointment. With a
                  real conversation.
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
                One step at a time…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
                What the Process Actually Looks Like
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
                I Show Up. All the Way.
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>Most agents will help you list your home. I help you move your life. There's a difference.</p>
                <p>
                  For clients who need it, I've helped coordinate donation runs, packed boxes, arranged junk hauling,
                  managed staging logistics, and been the calm point of contact when everything feels like a lot. That's
                  not a formal service with a fee attached. It's just what I do when someone needs it.
                </p>
                <p>
                  I also came from 30 years in healthcare - reading complex documents, catching the details other people
                  miss, and explaining things clearly to people who are already stressed. That same approach applies
                  here. I'll walk you through contracts in plain language, flag the clauses that matter, and make sure
                  you understand what you're agreeing to before you sign anything.
                </p>
                <p>
                  You'll never feel rushed. You'll never feel judged for your stuff, your timeline, or your questions.
                  We move at the pace that makes sense for your actual life.
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
                The Snohomish County Downsizing Guide
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                Not sure where to begin? This guide walks through what to think about before you decide anything - the
                financial questions worth asking, how to approach the sorting and prep process without burning out, and
                what to look for in your next home. Plain language, no fluff. A good starting point whether you're six
                months out or two years away.
              </p>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
                Get the Downsizing Guide
              </Button>
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
                <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                  Let's talk it through…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl text-primary mb-6">
                  Request a Free Downsizing Consult
                </h2>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  No pressure, no obligation. Just a conversation about where you are, what you're thinking about, and
                  whether this is the right time to make a move. Share a few details below and I'll follow up to find a
                  time that works.
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
                        placeholder="Where is your home? (City or neighborhood)"
                        value={formData.currentHome}
                        onChange={(e) => setFormData({ ...formData, currentHome: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="What's on your mind? Timeline, questions, what's prompting the conversation - whatever feels useful to share."
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
                  Downsizing questions…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
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
                  From downsizing clients…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Downsizing;
