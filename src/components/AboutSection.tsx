import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section bg-warm-bg">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-[1fr_360px] md:items-center max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <p className="eyebrow mb-4" aria-hidden="true">Hey there…</p>
            <h2 className="font-heading h-section text-primary mb-6">I'm Debbie</h2>
            <div className="measure">
              <p className="copy text-foreground mb-4">
                I grew up in Marysville, raised my family in Lake Stevens, and now live in North Everett. I have spent more than 45 years watching Snohomish County change, and I bring that local perspective to every move.
              </p>
              <p className="copy text-foreground mb-6">
                I read the fine print, explain the tradeoffs in plain language, and keep the process organized. My work is especially focused on downsizing, military PCS and VA clients, first-time buyers, and people relocating into or out of the county.
              </p>
            </div>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Read More About Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2 mx-auto w-full max-w-[360px]"
          >
            <img
              alt="Debbie Welch, Snohomish County real estate broker"
              className="rounded-lg shadow-md w-full object-cover"
              src="/images/debbie-welch-homepage.webp"
              width="1100"
              height="1320"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
