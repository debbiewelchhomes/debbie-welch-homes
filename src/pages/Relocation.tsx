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
import heroImage from "@/assets/hero-relocation.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendInquiry } from "@/lib/inquiry";
import InquiryFallback from "@/components/InquiryFallback";

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
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await sendInquiry({
      formName: "Request a Free Relocation Consult",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      fields: {
        "Coming from": formData.currentLocation,
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

    toast({
      title: "Got it. Thank you.",
      description: "Thanks for reaching out. I'll follow up soon to find a time that works for you.",
    });
    setFormData({ name: "", email: "", phone: "", currentLocation: "", message: "", website: "" });
  };

  const relocationSteps = [
    {
      number: "01",
      title: "Get Oriented Before You Decide Anything",
      description:
        "We start with a phone or Zoom conversation about your timeline, budget, and what matters most, such as commute, space, services, and access to the base if relevant. We compare locations using your priorities and verify school assignment with the district for any specific home.",
    },
    {
      number: "02",
      title: "Compare Areas Against Your Priorities",
      description:
        "Snohomish County covers a lot of ground. Lake Stevens feels different from Marysville, which feels different from Everett, which feels different from Bothell. Maps, property information, and local context help us compare housing, routes, and services.",
    },
    {
      number: "03",
      title: "Tour Homes Virtually or In Person",
      description:
        "I offer video walkthroughs and live FaceTime tours to show layout, visible condition, and surroundings beyond the listing photos. We discuss what can be observed and what still needs a professional inspection. If you can visit, we can tour in person.",
    },
    {
      number: "04",
      title: "Make a Smart, Confident Offer",
      description:
        "When you're ready, we'll build an offer that fits your budget, your timeline, and the current market and your comfort with risk. We review key terms and your questions before you sign, then coordinate the real estate deadlines with your lender and escrow team.",
    },
    {
      number: "05",
      title: "Land Well and Get Connected",
      description:
        "As you settle in, you can ask me about local services and recommendations. We can discuss the contacts or information that would be useful for your situation.",
    },
  ];

  const faqs = [
    {
      question: "What's it like to commute from Snohomish County to Seattle or the Eastside?",
      answer:
        "It depends a lot on where you live, where you're going, and when you leave. I-5 between Everett and Seattle can be brutal during peak hours. Highway 9, 522, and 2 offer alternatives depending on your destination. We'll look at your specific commute route and talk through realistic drive times, park-and-ride options, and which locations give you the best balance of commute and daily priorities. Test the route during the hours you expect to travel before relying on a drive-time estimate.",
    },
    {
      question: "Can I buy a home here without seeing it in person?",
      answer:
        "Yes. Several of my clients have done exactly that, including buyers purchasing from Germany and active duty service members who couldn't get here before their report date. It takes more preparation and clear communication, but it's very doable. Video walkthroughs and property records help you ask better questions. Professional inspections still matter, and we discuss the protections available under the proposed contract before you decide.",
    },
    {
      question: "How does a VA loan work in this market?",
      answer:
        "VA loans are a strong financing tool and I'm comfortable working with them. A VA-experienced lender can explain eligibility, underwriting, and the costs for your situation. My preferred VA lender is Jared Paul at CrossCountry Mortgage. He's a Marine Veteran, a Marysville native, and knows this market and VA financing well. Your lender handles pre-approval and explains the financing requirements; I help you evaluate the property and offer terms.",
    },
    {
      question: "What if I need to sell a home in another state before I can buy here?",
      answer:
        "You're not alone in that situation. It is common with PCS moves. We'll coordinate timelines with your out-of-area agent and your lender, look at contingent offer options, and talk through temporary housing if there's a gap. The available options depend on both transactions and your financing. The earlier we start talking, the more options we have.",
    },
    {
      question: "How far in advance should I reach out?",
      answer:
        "As early as you can. Ideally a few months before your report date or move date, and earlier if you also have a home to sell. That said, if you're working with a short timeline, which happens often with military orders, reach out anyway. I've helped people move quickly before and I know how to prioritize when time is tight.",
    },
    {
      question: "Do you work with non-military relocations too?",
      answer:
        "Yes. Civilian relocation may involve work, family, or another change; military PCS moves also involve orders and report dates. For a move into Snohomish County, we compare housing, budget, and daily routines. If you are leaving the county, we discuss the local sale and how it fits your next move. Support outside the area depends on the professionals involved.",
    },
    {
      question: "Can you help with military PCS moves to Naval Station Everett?",
      answer:
        "Absolutely. I am a Military Relocation Professional (MRP) and a longtime Navy spouse. My husband is retired from the Navy, so I understand the timelines, uncertainty, and stress that can come with a PCS. I live just a couple of miles from Naval Station Everett and know the surrounding communities well.",
    },
    {
      question: "What does the MRP certification mean?",
      answer:
        "The Military Relocation Professional certification is specialized real estate training focused on the needs of military servicemembers and their families. It supports my practical experience as a Navy spouse and helps me coordinate the real estate side of PCS moves, VA-financed purchases, and relocations.",
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
        <section className="relative min-h-[58vh] lg:min-h-[62vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 parallax-section"
            style={{
              backgroundImage: `linear-gradient(rgba(225, 223, 220, 0.35), rgba(225, 223, 220, 0.35)), url(${heroImage})`,
            }}
            role="img"
            aria-label="Military PCS and relocation to Snohomish County WA"
          />

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-backdrop"
            >
              <p className="eyebrow mb-4" aria-hidden="true">
                Welcome to the PNW...
              </p>

              <h1 className="font-heading h-section text-primary mb-6">
                Military PCS & Relocation to or from Snohomish County
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                A move for work or family starts with your housing needs and timeline. A military PCS adds orders and
                a report date to that planning. I help buyers moving into Snohomish County compare homes and locations,
                and sellers leaving the area plan the local sale around their next move.
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
                Buying from a distance...
              </p>
              <h2 className="font-heading h-section text-primary mb-8">
                Buying From a Distance Is a Different Kind of Hard
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>
                  You're choosing a home, a neighborhood, a commute, schools, and proximity to the base without being
                  able to drive around on a Saturday and get a feel for things. Big financial decisions made from
                  listing photos and Google Maps.
                </p>
                <p>
                  My husband Todd is a retired Navy Veteran. I understand what PCS timelines look like, including the
                  short notice, the hard deadlines, the pressure to decide fast. I've helped enough military families
                  buy in Snohomish County to know what questions to ask, what to watch out for, and what areas make
                  sense depending on where you're reporting.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 bg-warm-bg border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="eyebrow mb-3">Military moves have their own moving parts...</p>
            <h2 className="font-heading h-card text-primary mb-4">Military Relocation Professional (MRP)</h2>
            <p className="copy text-foreground">My MRP credential reflects specialized training in the real estate needs of active-duty service members, Veterans, and military families. It supports the practical work around PCS timelines, VA financing, remote home searches, coordinating across time zones, and helping clients connect with professionals who understand military moves. As the wife of a retired Navy Veteran, I also understand that the logistics affect the whole family.</p>
          </div>
        </section>

        {/* The Relocation Process - 5 Steps */}
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
                Before you pack a box...
              </p>
              <h2 className="font-heading h-section text-primary">
                Planning a Home Purchase From Out of Area
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
                Close to home...
              </p>

              <h2 className="font-heading h-section text-primary mb-8">
                I Know This World From the Inside
              </h2>

              <div className="font-body text-lg md:text-xl text-foreground leading-relaxed space-y-5">
                <p>
                  Todd served in the Navy. I know what PCS season looks like, including orders with six weeks notice and decisions
                  before you've had time to think, pressure to get it right when you can't just look at a few more
                  houses this weekend. I hold the MRP certification and help clients identify priorities and backup options when
                  the timeline is tight.
                </p>
                <p>
                  For VA financing, I work closely with Jared Paul at CrossCountry Mortgage, a Marine Veteran and
                  Marysville native who specializes in VA loans and Snohomish County. Your lender explains
                  qualification and loan costs. I help you compare homes and contract choices using that information.
                </p>
              </div>
            </motion.div>
            <p className="mt-8 text-center text-foreground">
              Further reading: {" "}
              <Link to="/blog/relocating-guide" className="text-secondary underline underline-offset-4 hover:text-primary">
                Relocating to Snohomish County: What I Tell My Military &amp; Out-of-Area Buyers
              </Link>
            </p>
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
                The Snohomish County PCS & Relocation Guide
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-6">
                I'm putting together a guide for military families and out-of-area buyers moving to Snohomish County.
                It will cover local communities, questions to ask about VA loans and housing allowances, commutes,
                schools, and buying from a distance.
              </p>

              <p className="font-body text-lg font-semibold text-foreground">Coming soon</p>
            </motion.div>
          </div>
        </section>

        {/* Relocation Consult Form */}
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
                  Let's connect...
                </p>
                <h2 className="font-heading h-section text-primary mb-6">
                  Request a Free Relocation Consult
                </h2>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  Whether you have a firm report date or you're still in the early research phase, let's talk. Share a
                  few details below and I'll follow up so we can compare schedules and time zones.
                </p>
              </div>

              <Card className="border-border bg-card">
                <CardContent className="p-8">
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
                        aria-label="Current location"
                        placeholder="Where are you coming from? (City, State, or Country)"
                        value={formData.currentLocation}
                        onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div>
                      <Textarea
                        aria-label="Relocation consultation details"
                        placeholder="Tell me about your timeline, report date, budget, whether your move is military or civilian, and what you're looking for. Whatever is helpful."
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
                  Relocation questions...
                </p>
                <h2 className="font-heading h-section text-primary">
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
                  From relocation clients...
                </p>
                <h2 className="font-heading h-section text-primary">
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
        </section>      </main>
      <Footer />
    </div>
  );
};

export default Relocation;

