import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const FreeResourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl rounded-xl border border-border/70 bg-warm-bg px-6 py-10 text-center md:px-10 md:py-12"
        >
          <span className="eyebrow-caps">Free, No Obligation</span>

          <h2 className="font-heading h-section mx-auto mt-3 max-w-[22ch] text-primary">
            A Market Report for Any Area in Snohomish County
          </h2>

          <p className="copy mx-auto mt-4 max-w-[56ch] text-left text-foreground md:text-center">
            Tell me the area you are watching and I will pull the current numbers: new listings,
            price reductions, days on market, and recent sales. Real data for your neighborhood,
            not national headlines.
          </p>

          <div className="mt-8 flex justify-center">
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90" asChild>
              <Link to="/contact">Request My Market Report</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeResourceSection;
