import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BufferSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-script text-3xl md:text-5xl text-secondary mb-6">
            You deserve to understand every step…
          </p>
          <div className="w-32 h-px bg-secondary mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default BufferSection;
