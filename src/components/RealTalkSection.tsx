import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import calmInterior from "@/assets/calm-interior.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const RealTalkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative section overflow-hidden parallax-section"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url(${calmInterior})`,
      }}
    >
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-backdrop"
        >
          <p className="eyebrow text-center" aria-hidden="true">
            Real talk…
          </p>

          <h2 className="font-heading h-section mb-6 text-center text-primary">
            Real estate does not have to feel pushy, confusing, or rushed.
          </h2>

          <div className="copy measure mx-auto space-y-4 text-left text-foreground">
            <p>
              A lot of people come to me expecting this process to feel overwhelming. Honestly, it
              can be, if no one takes the time to explain what is actually happening.
            </p>
            <p>
              That is the part I care about most. I slow things down just enough for you to
              understand what you are looking at: the numbers, the tradeoffs, the fine print on page
              four. The details buried in the middle of a document are usually the ones that matter
              most.
            </p>
            <p>You will never feel pushed into a decision you do not fully understand.</p>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90" asChild>
              <Link to="/services">See How I Help</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealTalkSection;
