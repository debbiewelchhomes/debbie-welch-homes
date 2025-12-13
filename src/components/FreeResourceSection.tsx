import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const FreeResourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section className="py-20 md:py-32 bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6
      }} className="max-w-3xl mx-auto text-center">
          <p className="font-script text-3xl text-secondary mb-6 md:text-6xl" aria-hidden="true">Steal this...</p>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            GET YOUR FREE MARKET REPORT
          </h2>

          <h3 className="font-heading text-2xl md:text-3xl text-primary mb-6">
            Curious about a Local Market or Area?
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-10 text-foreground">
            Get your free market report that outlines price reductions, new listings, comparable listings and more!
          </p>

          <div className="flex justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8" asChild>
              <a href="#">Get my report</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default FreeResourceSection;