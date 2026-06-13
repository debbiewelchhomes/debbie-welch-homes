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
      className="relative py-32 overflow-hidden parallax-section"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${calmInterior})`,
      }}
    >
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-backdrop"
        >
          <p
            className="font-script text-3xl mb-6 md:text-6xl text-secondary"
            aria-hidden="true"
          >
            Real talk…
          </p>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary">
            Real estate does not have to feel pushy, confusing, or rushed.
          </h2>

          <div className="text-lg md:text-xl leading-relaxed mb-10 text-foreground space-y-6">
            <p>
              A lot of people come to me expecting this process to feel
              overwhelming. And honestly, it can be - if no one takes the time
              to explain what's actually happening.
            </p>
            <p>
              That's the part I care about
              most. I slow things down just enough for you to understand what
              you're looking at: the numbers, the tradeoffs, the fine print on
              page four. Thirty years reading healthcare contracts taught me that
              the details buried in the middle of a document are usually the ones
              that matter most. That same habit follows me into every
              transaction. You will never feel pushed into a decision you don't
              fully understand.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6"
            asChild
          >
            <Link to="/services" className="font-normal text-lg">
              Let's Talk About Your Next Move
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RealTalkSection;
