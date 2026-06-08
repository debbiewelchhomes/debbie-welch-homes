import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FreeResourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p
            className="font-script text-3xl text-secondary mb-6 md:text-6xl"
            aria-hidden="true"
          >
            Steal this...
          </p>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Free Market Report for Any Area in Snohomish County
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-10 text-foreground">
            Curious what's actually happening with prices in Lake Stevens right
            now? Wondering how long homes are sitting in Marysville, or whether
            Arlington is cooling off? I'll pull a custom report for whatever
            area you're watching -- new listings, price reductions, days on
            market, recent sales. Real numbers, not headlines. No obligation.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8"
              asChild
            >
              <a href="#" className="text-lg font-normal">
                Get My Free Report
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeResourceSection;
