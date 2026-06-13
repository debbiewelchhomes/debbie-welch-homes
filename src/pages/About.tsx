import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import debbiePortrait from "@/assets/debbie-blazer.png";
import aboutInterior from "@/assets/about-interior.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { pageSEO, realEstateAgentSchema } from "@/data/seoData";
import TestimonialSection from "@/components/TestimonialSection";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={pageSEO.about.title}
        description={pageSEO.about.description}
        canonical="/about"
        jsonLd={realEstateAgentSchema}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-warm-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.6 }}>
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">Hey there…</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                I'm Debbie. Snohomish County is My Backyard, Not Just My Market.
              </h1>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                I grew up in Marysville. Lived in Lake Stevens for about ten years. Now I'm in the middle of a live-in
                renovation in North Everett. This isn't a county I moved to for the real estate market. It's home. I've
                watched the traffic patterns shift, the neighborhoods change, the school districts rise and fall. I know
                where the hidden parking is at the Farmer's Market and which parts of town look different after dark.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                That's the kind of local I am. And it's exactly the kind of broker I try to be.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={debbiePortrait}
                alt="Debbie Welch, Snohomish County real estate broker"
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-3xl md:text-5xl text-secondary mb-4 text-center">A little backstory…</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8 text-center">
              Thirty Years Reading the Fine Print
            </h2>
            <div className="space-y-5 text-foreground text-lg leading-relaxed">
              <p>
                Before real estate, I spent 30 years in healthcare - medical coding, auditing, and education. My job was
                to read documents other people skimmed, catch the detail that changed everything, and explain complex
                information in plain language to people who were already overwhelmed.
              </p>
              <p>
                Real talk: I brought that same brain to real estate. The clause on page 4 of a purchase agreement that
                nobody reads? That's the one I flag. The inspection report that's 40 pages long and written in a way
                that makes everything sound catastrophic? I'll walk you through what actually matters and what doesn't.
              </p>
              <p>
                I'm not trying to rush you through a transaction. I'm trying to make sure you actually understand what
                you're signing, what you're buying, and what comes next. That's what I know how to do.
              </p>
              <p>
                My husband Todd is a retired Navy Veteran and Systems Engineer - so military families, PCS moves, and VA
                loans are genuinely close to home for us. We know what it feels like to make big decisions on a tight
                timeline with a lot of unknowns.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 md:py-32 bg-warm-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <img
                src={aboutInterior}
                alt="Debbie with clients in Snohomish County WA"
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">What to expect…</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">When We Work Together</h2>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                I'm a details person and a big-picture thinker. That means I'm watching the market and your stress level
                at the same time. Here's what working together actually looks like:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    Plain-language explanations - no jargon, no "trust me," no skipping the parts that matter.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    Proactive communication. You will not be left wondering what's happening or waiting for a callback.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    Honest pros and cons, even when the easy answer would be "you're fine, just sign here."
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    Hands-on support for big transitions - I've helped clients with everything from donation runs to
                    staging coordination to just being a calm presence on a hard day.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">
                    A steady advocate who remembers this is your life, not just another transaction.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">
              A Little About Me Off the Clock
            </h2>
            <p className="text-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Because a real estate relationship is a real relationship, and you should know who you're working with.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-warm-bg p-8 rounded-lg"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Floor Plan Obsessed</h3>
              <p className="text-foreground leading-relaxed">
                I have been fascinated by floor plans since I was a kid. Seriously. If you hand me a listing with a
                weird layout, I will absolutely think about it longer than is probably normal.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-warm-bg p-8 rounded-lg"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">The Most Important People</h3>
              <p className="text-foreground leading-relaxed">
                Todd, my husband and best person. Our blended family of six adult kids. Cooper the Goldendoodle, who has
                very strong opinions about when it's walk time. And an iced sweet tea, always.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-warm-bg p-8 rounded-lg"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Lifelong Local</h3>
              <p className="text-foreground leading-relaxed">
                Marysville, Lake Stevens, North Everett - that's my actual history here. When I talk about what a
                neighborhood feels like, it's because I've lived in it, not just sold in it.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-warm-bg p-8 rounded-lg"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Research Is My Love Language</h3>
              <p className="text-foreground leading-relaxed">
                I go deep on things. Market trends, neighborhood data, local policies, ADU rules - if it's relevant to
                your situation, I've probably already pulled it up. Checklists help me sleep at night.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-warm-bg p-8 rounded-lg"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Ocean Person, Always</h3>
              <p className="text-foreground leading-relaxed">
                Mountains are beautiful. But the water is where I exhale. Day trips to the coast, ferry rides, anything
                near Puget Sound - that's my reset button.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-warm-bg p-8 rounded-lg"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">The Moment That Makes It Worth It</h3>
              <p className="text-foreground leading-relaxed">
                When a client exhales. When the offer gets accepted, when the downsizing plan finally starts to feel
                possible instead of paralyzing, when someone says "I didn't know it could feel this manageable." That's
                the part I'm here for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-20 md:py-32 bg-warm-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-script text-3xl md:text-5xl text-secondary mb-4">Let me introduce you…</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
              To My Trusted Local Partners
            </h2>
            <p className="text-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              I'm a solo agent, but I'm not doing this alone. Over the years I've built a circle of local lenders,
              inspectors, stagers, and title partners who genuinely care about people. When it makes sense, I'll connect
              you with the right folks so you're supported from every angle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-6 rounded-lg text-center"
            >
              <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-secondary">💼</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Local Lender Partner</h3>
              <p className="text-foreground text-sm leading-relaxed">
                Trusted mortgage pros who understand Snohomish County, VA loans, and the real difference between a
                pre-qual and a solid pre-approval.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-6 rounded-lg text-center"
            >
              <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-secondary">🔍</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Home Inspection Partner</h3>
              <p className="text-foreground text-sm leading-relaxed">
                Detail-oriented inspectors who explain what they found in plain language, not just a 40-page PDF that
                makes every house sound like a teardown.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background p-6 rounded-lg text-center"
            >
              <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-secondary">✨</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Staging & Prep Support</h3>
              <p className="text-foreground text-sm leading-relaxed">
                Stagers and prep pros who know how to highlight what's great about your home without making it feel like
                a hotel nobody actually lives in.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background p-6 rounded-lg text-center"
            >
              <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-secondary">📋</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Escrow & Title Team</h3>
              <p className="text-foreground text-sm leading-relaxed">
                Behind-the-scenes pros who keep the paperwork and timelines on track from contract to closing without
                the last-minute scrambles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-script text-3xl md:text-5xl text-secondary mb-4">Let's talk…</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
              Ready to Figure Out Your Next Move?
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-8">
              Whether you're thinking about selling, buying, downsizing, or relocating to Snohomish County - we can
              start with a simple conversation. No perfect plan required. Just tell me where you are and what's on your
              mind, and we'll go from there.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8" asChild>
              <Link to="/contact">Let's Have That Conversation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials - shared carousel component */}
      <TestimonialSection />

      <Footer />
    </div>
  );
};

export default About;
