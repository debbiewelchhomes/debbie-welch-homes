import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import calmInterior from "@/assets/calm-interior.jpg";

const FreeResourceSection = () => {

  return (
    <section className="relative section overflow-hidden bg-background">
      <div className="absolute inset-0 parallax-section market-report-photo" style={{ backgroundImage: `url(${calmInterior})` }} aria-hidden="true" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-backdrop text-center"
        >
          <h2 className="font-heading text-primary">
            <span className="eyebrow">Free, no obligation...</span>
            <span className="h-section mx-auto block max-w-[22ch] text-secondary">A Market Report for Any Area in Snohomish County</span>
          </h2>

          <p className="copy mx-auto mt-4 max-w-[56ch] text-left text-foreground md:text-center">
            Include the area and property type in your message and I will pull the current numbers: new listings,
            price reductions, days on market, and recent sales. Real data for your neighborhood,
            not national headlines.
          </p>

          <div className="mt-8 flex justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
              <Link to="/contact">Request My Market Report</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeResourceSection;
