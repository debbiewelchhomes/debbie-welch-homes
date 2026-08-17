import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BufferSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-tight bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <p className="eyebrow" aria-hidden="true">
            You deserve to understand every step…
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-secondary/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default BufferSection;
