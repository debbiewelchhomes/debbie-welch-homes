import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import debbiePortrait from "@/assets/debbie-portrait.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { pageSEO, realEstateAgentSchema } from "@/data/seoData";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                Hey there…
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                I'm Debbie, Your Snohomish County Real Estate Partner
              </h1>
              <p className="text-foreground text-lg leading-relaxed">
                I'm a full-service real estate broker based in Snohomish County, helping buyers, sellers, downsizers, and relocation clients in Lake Stevens, Everett, Marysville, Snohomish, Arlington, Bothell, Mill Creek, Stanwood & Camano. This isn't just where I work—it's where I've raised my family, invested in property, and built a life. My job is to help you move through big life transitions with calm, clarity, and practical guidance.
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

      {/* Attention-Grabbing Headline Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
              Soft landing…
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
              Helping You Home Through Life's Big Transitions
            </h2>
            <p className="text-foreground text-lg leading-relaxed">
              Real estate is rarely just about a house. It's about empty nests and new jobs, blended families and retirement plans, PCS orders and fresh starts. I specialize in working with downsizers, relocation and military families, and first-time buyers who want someone to walk beside them—not push from behind. You'll get honest insight, organized next steps, and a calm voice that keeps everyone grounded, even when the market feels anything but.
            </p>
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
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                What to expect…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
                When We Work Together
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                I'm a details person and a big-picture thinker. That means I'm always watching the market and your stress level at the same time. Here's what you can expect when we work together:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Clear, plain-language explanations so you always understand what's happening and why.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Regular updates and proactive check-ins—no wondering what's going on behind the scenes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Honest pros and cons, even when the easy answer would be "you're fine, just sign here."</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Calm, organized timelines so you're not scrambling at the last minute.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Extra support for big transitions like downsizing, relocating, or buying your first home.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">A steady advocate who remembers this is your life, not just another transaction.</span>
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
              Get to Know a Little About Me Behind the Scenes…
            </h2>
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
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                Real Estate Roots
              </h3>
              <p className="text-foreground leading-relaxed">
                Life-long Snohomish County local, floor-plan nerd since childhood, and the person who will absolutely send you too many listings with thoughtful notes attached.
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
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                My Life's Essentials
              </h3>
              <p className="text-foreground leading-relaxed">
                Todd (retired Navy), our blended family of six adult kids, a growing crew of grandkids, iced tea or a Starbucks Refresher, good pens, and a cozy corner to think and plan.
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
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                The Hood I Call Home
              </h3>
              <p className="text-foreground leading-relaxed">
                I've lived in Marysville, Lake Stevens, and now Everett—so when I say I know Snohomish County, it's because I've actually lived, worked, owned, and volunteered here.
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
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                My Real Estate "After Hours"
              </h3>
              <p className="text-foreground leading-relaxed">
                When I'm not helping clients, I'm learning—market stats, investing strategies, new tools, and better systems—so I can make your path simpler and more informed.
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
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                My Happy Places
              </h3>
              <p className="text-foreground leading-relaxed">
                Local coffee shops and breweries, weekend drives to the coast or mountains, and quiet evenings at home with family (or a good spreadsheet).
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
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                Heart & Heart Moments
              </h3>
              <p className="text-foreground leading-relaxed">
                The best part of my job is watching clients exhale—when the offer is accepted, the house finally closes, or the downsizing plan starts to feel possible instead of overwhelming.
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
            <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
              Let me introduce you…
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
              To My Trusted Local Partners
            </h2>
            <p className="text-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              While I'm a solo agent, I'm not doing this alone. Over the years I've built a small, trusted circle of local lenders, inspectors, stagers, and escrow/title partners who care about people as much as I do. When it makes sense, I'll connect you with the right folks so you're supported from every angle.
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
              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                Local Lender Partner
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                Trusted mortgage pros who understand Snohomish County, VA loans, and creative financing options.
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
              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                Home Inspection Partner
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                Detail-oriented inspectors who explain findings in plain language, not just dense PDFs.
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
              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                Staging & Prep Support
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                Stagers and home-prep pros who know how to highlight your home's strengths without making it feel like a showroom.
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
              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                Escrow & Title Team
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                Behind-the-scenes pros who keep the paperwork and timelines on track from contract to closing.
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
            <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
              Let's do this…
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
              Ready to Talk About Your Next Move?
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-8">
              Whether you're thinking about selling, buying, downsizing, or relocating to Snohomish County, we can start with a simple conversation. No pressure, no perfect plan required—just a real discussion about where you are now, where you'd like to be, and what might make sense in between.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8" asChild>
              <Link to="/">Schedule a Conversation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 md:py-32 bg-warm-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
              Hear what they have to say…
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary">
              Client Testimonials
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-8 rounded-lg shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-xl">★</span>
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                "Debbie kept us calm, informed, and supported from start to finish. We felt like we had a trusted neighbor in our corner the whole way."
              </p>
              <p className="text-sm text-muted-foreground">
                — Snohomish County Buyer
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary text-white p-8 rounded-lg shadow-lg md:scale-105"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-white text-xl">★</span>
                ))}
              </div>
              <p className="leading-relaxed mb-4">
                "Downsizing felt overwhelming until we met Debbie. She helped us see the process as a fresh start, not just a sale. Her calm approach made all the difference."
              </p>
              <p className="text-sm opacity-90">
                — Lake Stevens Downsizers
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background p-8 rounded-lg shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-xl">★</span>
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                "Our military relocation to Snohomish County was seamless because of Debbie. She understood our timeline and made everything happen without the stress."
              </p>
              <p className="text-sm text-muted-foreground">
                — Military Family Relocating to Everett
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
