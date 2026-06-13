import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-services.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { pageSEO } from "@/data/seoData";

const Services = () => {
  const introRef = useRef(null);
  const approachRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const approachInView = useInView(approachRef, { once: true, margin: "-100px" });
  const quoteInView = useInView(quoteRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <SEO title={pageSEO.services.title} description={pageSEO.services.description} canonical="/services" />
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
            aria-label="Debbie Welch real estate services - Snohomish County"
          />

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-backdrop"
            >
              <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary" aria-hidden="true">
                How I can help…
              </p>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Real Estate Services in Snohomish County
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                Buying, selling, downsizing, relocating - whatever brought you here, the goal is the same. You deserve
                clear information, honest guidance, and someone in your corner who actually knows this county. Not a
                sales pitch. A real plan.
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
              className="max-w-4xl mx-auto text-center"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                Here's the thing…
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                Real Estate Is Rarely Just About the House
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
                It's about the job that moved you here, the parent who needs to be closer, the stairs that aren't
                working anymore, the PCS orders that gave you six weeks to figure everything out. I've been working with
                Snohomish County buyers and sellers long enough to know that the best real estate advice starts with
                understanding what's actually going on in someone's life - not just what they're looking for in a
                listing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={approachRef}
              initial={{ opacity: 0, y: 30 }}
              animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                  What you can count on…
                </p>

                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                  How I Work With Every Client
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-background p-8 rounded-lg">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">Clarity</h3>
                  <p className="text-foreground leading-relaxed">
                    Plain-language explanations at every step. No jargon, no skipping the parts that matter, no "just
                    trust me." You'll always know what's happening and why.
                  </p>
                </div>
                <div className="bg-background p-8 rounded-lg">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">Honesty</h3>
                  <p className="text-foreground leading-relaxed">
                    The real numbers, the real tradeoffs, and the real risks - even when the easy answer would be
                    "you're fine, just move forward." You deserve accurate information, not reassurance.
                  </p>
                </div>
                <div className="bg-background p-8 rounded-lg">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">Follow-Through</h3>
                  <p className="text-foreground leading-relaxed">
                    Proactive updates, organized timelines, and a steady presence from first conversation to closing
                    day. You won't be left wondering what's happening or waiting for a callback.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Cards Section */}
        <ServicesSection />

        {/* Quote Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={quoteRef}
              initial={{ opacity: 0, y: 30 }}
              animate={quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                What they've said…
              </p>

              <blockquote className="font-body text-xl md:text-2xl text-primary leading-relaxed mb-8 italic">
                "Debbie always exceeded my expectations - whether it was anticipating problems before they arose,
                expertly reacting to unusual situations, or just being the kind, friendly person she is. Her
                zealousness, competence, foresight, and above-and-beyond research are a rarity these days."
              </blockquote>

              <p className="font-body text-lg text-foreground">– A. Swaim, PCS active duty relocation client</p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ctaRef}
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                No pressure, just a conversation…
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                Not Sure Where to Start?
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                That's actually a fine place to begin. Tell me what's going on in your life and what's prompting the
                question, and we'll figure out together whether now is the right time, what your options are, and what a
                realistic next step might look like.
              </p>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6" asChild>
                <Link to="/contact">Let's Talk It Through</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
