import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO, buildFaqSchema } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Got it - thank you.",
      description: "I'll follow up soon to find a time that works for you.",
    });
    setFormData({ name: "", email: "", phone: "", currentLocation: "", message: "" });
  };

  const relocationSteps = [
    {
      number: "01",
      title: "Get Oriented Before You Decide Anything",
      description:
        "We start with a phone or Zoom conversation about your timeline, budget, and what matters most - commute, schools, neighborhood feel, space, access to the base. I'll give you an honest picture of what different parts of Snohomish County are actually like, not just what the listings show.",
    },
    {
      number: "02",
      title: "Narrow Down the Right Areas",
      description:
        "Snohomish County covers a lot of ground. Lake Stevens feels different from Marysville, which feels different from Everett, which feels different from Bothell. I'll send you maps, notes, and my honest take on each area so you can make a real comparison - not just guess from Google Street View.",
    },
    {
      number: "03",
      title: "Tour Homes Virtually or In Person",
      description:
        "I do detailed video walkthroughs and live FaceTime tours - pointing out what you can't see in photos, what a neighborhood sounds like at 7am, what the street looks like when it rains. If you can visit, we'll tour in person. If you can't, I'll be your eyes and ears until you can.",
    },
    {
      number: "04",
      title: "Make a Smart, Confident Offer",
      description:
        "When you're ready, we'll build an offer that fits your budget, your timeline, and the current market - without overextending you. I'll explain every term in plain language before you sign anything, and manage the contract-to-close process so you're not chasing down paperwork from across the country.",
    },
    {
      number: "05",
      title: "Land Well and Get Connected",
      description:
        "Closing day isn't where my job ends. I'll follow up with local recommendations, connect you with people you'll actually need, and make sure you feel settled - not dropped. You moved here without knowing anyone. I want to help change that.",
    },
  ];

  const faqs = [
    {
      question: "What's it actually like to commute from Snohomish County to Seattle or the Eastside?",
      answer:
        "Honest answer: it depends a lot on where you live, where you're going, and when you leave. I-5 between Everett and Seattle can be brutal during peak hours. Highway 9, 522, and 2 offer alternatives depending on your destination. We'll look at your specific commute route and talk through realistic drive times, park-and-ride options, and which neighborhoods give you the best balance of commute and livability. I won't sugarcoat it - some commutes are tough. But there are areas that work well, and I'll help you find them.",
    },
    {
      question: "Can I buy a home here without seeing it in person?",
      answer:
        "Yes - several of my clients have done exactly that, including families buying from Germany and active duty service members who couldn't get here before their report date. It takes more preparation and clear communication, but it's very doable. I do detailed video walkthroughs, answer every question you have about condition and location, and we build in protective contingencies wherever possible. I won't let you commit to something I wouldn't feel good about if I were in your position.",
    },
    {
      question: "How does a VA loan work in this market?",
      answer:
        "VA loans are a strong financing tool and I'm comfortable working with them. The key is having a lender who actually knows VA loans - not just someone who offers them on a checklist. My preferred VA lender is Jared Paul at CrossCountry Mortgage. He's a Marine veteran, a Marysville native, and knows this market and VA financing well. We'll get you pre-approved properly so your offer is competitive from the start.",
    },
    {
      question: "What if I need to sell a home in another state before I can buy here?",
      answer:
        "You're not alone in that situation - it's actually very common with PCS moves. We'll coordinate timelines with your out-of-area agent and your lender, look at contingent offer options, and talk through temporary housing if there's a gap. It takes more planning but it's workable. The earlier we start talking, the more options we have.",
    },
    {
      question: "How far in advance should I reach out?",
      answer:
        "As early as you can. Ideally a few months before your report date or move date, and earlier if you also have a home to sell. That said, if you're working with a short timeline - which happens a lot with military orders - reach out anyway. I've helped people move quickly before and I know how to prioritize when time is tight.",
    },
    {
      question: "Do you work with non-military relocations too?",
      answer:
        "Yes. Military families are a specialty, but I work with all kinds of relocation clients - people moving here for work, moving closer to family, or starting fresh in the Pacific Northwest. The process is similar: you need someone on the ground who knows the area and can help you make good decisions from a distance. That's what I do.",
    },
  ];

  const testimonials = [
    {
      quote:
        "We found Debbie on the Internet and chose her because of the good reviews. I would give her 10 stars if possible - she was always a step ahead and treated the process like she was buying the house for herself. Even with a 9-hour time difference while we were in Germany, she managed to answer everything in time. She made videos of the properties and walked through them with us on video call. That kind of expertise was priceless.",
      attribution: "Vanessa Gerhard, Lake Stevens (PCS relocation from Germany)",
    },
    {
      quote:
        "Look no further and pick Debbie! She always exceeded my expectations - whether it was anticipating problems before they arose, expertly reacting to unusual situations, or just being the kind, friendly person she is. Her zealousness, competence, foresight, and above-and-beyond research are a rarity these days. I cannot recommend her more highly.",
      attribution: "Austen Swaim (PCS relocation, VA loan)",
    },
    {
      quote:
        "This was my first attempt at buying a home on my own and I knew absolutely nothing. Being a USAF Veteran using a VA loan during a hot sellers market didn't even phase her. She was so knowledgeable and caring, had a fantastic sense of humor, and was on top of everything for me. She was a great advocate for me and she will be for you as well.",
      attribution: "L. Lawless, Lake Stevens (USAF Veteran, VA loan buyer)",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={pageSEO.relocation.title}
        description={pageSEO.relocation.description}
        canonical="/services/relocation"
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
            aria-label="Military PCS and relocation to Snohomish County WA"
          />

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-backdrop"
            >
              <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary" aria-hidden="true">
                Welcome to the PNW…
              </p>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Military PCS & Relocation to Snohomish County
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                You got orders - or a job offer, or a life change - and now you need to figure out where to live in a
                county you may never have set foot in. That's a lot. I help military families and relocation clients
                find the right home in the right area without having to piece it together from internet research alone.
                I'll be your on-the-ground partner from the first conversation to the day you get your keys.
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
                This part matters…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-primary mb-8">
                Buying From a Distance Is a Different Kind of Hard
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>
                  You're trying to choose a home - and a neighborhood, and a commute, and schools, and proximity to the
                  base - without being able to just drive around on a Saturday and get a feel for things. You're making
                  a big financial decision based on listing photos, Google Maps, and whatever you can piece together
                  online.
                </p>
                <p>
                  My husband Todd is a retired Navy Veteran. I understand what PCS timelines actually look like - the
                  short notice, the hard deadlines, the pressure to decide fast. And I've helped enough military
                  families buy in Snohomish County to know what questions to ask, what to watch out for, and what areas
                  make sense depending on where you're reporting.
                </p>
                <p>
                  You deserve someone who will tell you the truth about a neighborhood, flag the things you can't see in
                  photos, and help you make a decision you'll feel good about after the boxes are unpacked.
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
                What the Process Actually Looks Like
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
                I Know This World From the Inside
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>
                  My husband Todd served in the Navy. I know what PCS season actually looks like - the orders that come
                  with six weeks notice, the decisions you have to make before you've had time to think, the pressure of
                  getting it right when you can't just "go look at a few more houses" this weekend.
                </p>
                <p>
                  I hold the MRP designation - Military Relocation Professional - which means I've specifically trained
                  to understand the VA loan process, BAH rates, military timelines, and the unique challenges of buying
                  from a distance. But more than the designation, I've just done this enough times to know how to make
                  it work even when the timeline is tight.
                </p>
                <p>
                  For VA financing, I work closely with Jared Paul at CrossCountry Mortgage. He's a Marine veteran and a
                  Marysville native - someone who actually understands VA loans and Snohomish County. Getting
                  pre-approved with the right lender makes a real difference in how your offer is received.
                </p>
                <p>
                  My goal is simple: by the time you show up with a moving truck, you should already feel like you know
                  where you landed.
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
                A good place to start…
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                The Snohomish County PCS & Relocation Guide
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                Built specifically for military families and out-of-area buyers coming to Snohomish County. Covers
                neighborhoods near Naval Station Everett, current BAH rates, how VA loans work in this market, commute
                realities, school districts, and what to know about buying from a distance. Plain language, honest take,
                no fluff.
              </p>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
                Get the Relocation Guide
              </Button>
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
                <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                  Let's connect…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl text-primary mb-6">
                  Request a Free Relocation Consult
                </h2>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  Whether you have a firm report date or you're still in the early research phase, let's talk. Share a
                  few details below and I'll follow up to find a time that works - including evenings and weekends, and
                  across time zones.
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
                        placeholder="Where are you coming from? (City, State, or Country)"
                        value={formData.currentLocation}
                        onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell me about your situation - timeline, report date, budget, military or civilian, what you're looking for. Whatever is helpful."
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
                  Relocation Questions I Hear All the Time
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

export default Relocation;
