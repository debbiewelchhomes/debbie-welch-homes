import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-services.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const introRef = useRef(null);
  const signatureRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);
  
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const signatureInView = useInView(signatureRef, { once: true, margin: "-100px" });
  const quoteInView = useInView(quoteRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

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
            aria-label="Services - Debbie Welch real estate services"
          />
          
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-backdrop"
            >
              <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary" aria-hidden="true">
                Work with me
              </p>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                My Services
              </h1>

              <p className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
                Real estate doesn't have to feel pushy, confusing, or rushed. I help buyers, sellers, downsizers, and relocation clients across Snohomish County move through big life transitions with clarity and calm. Whether you're buying your first place, selling a long-time home, or moving here from out of the area, we'll build a plan that makes sense for your real life—not just the market headlines.
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
                Subheading goes here
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                Calm, Clear Real Estate Guidance in Snohomish County
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
                Real estate decisions are rarely just about bedrooms and bathrooms. They're about time, energy, family, and long-term plans. My role is to blend detailed market knowledge with real-life perspective so you always understand what's happening, what your options are, and what makes the most sense for your goals—without pressure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Signature System Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={signatureRef}
              initial={{ opacity: 0, y: 30 }}
              animate={signatureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6" aria-hidden="true">
                Introducing…
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                The Helping You Home Approach
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
                The Helping You Home approach is built around three things: clarity, calm, and communication. We'll start with a conversation about where you are now and where you're hoping to go, then create a step-by-step plan that fits your timeline and capacity. You'll get honest feedback, steady updates, and practical guidance whether you're buying, selling, relocating, or downsizing in Snohomish County.
              </p>
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
                "Debbie made a complicated move feel surprisingly manageable. She broke everything into small steps, told us the truth (even when it wasn't what we wanted to hear), and never made us feel rushed."
              </blockquote>

              <p className="font-body text-lg text-foreground">
                – Snohomish County buyer & seller clients
              </p>
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
                Ready to get started?
              </p>

              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-8">
                Let's Talk About Your Next Move
              </h2>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-10">
                Whether you're sure of your next step or just starting to explore options, we can talk through your timing, goals, and questions and see what makes sense. No pressure, no sales pitch—just real conversation about what's possible.
              </p>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6" asChild>
                <a href="https://cal.com/debbie-welch-t6p0dm" target="_blank" rel="noopener noreferrer">
                  Schedule a Conversation
                </a>
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
