import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { resourceLinks } from "@/config/resourceLinks";
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
            <span className="eyebrow">Market reports...</span>
            <span className="h-section-sm mx-auto block max-w-none text-secondary">for Snohomish County &amp; Surrounding Communities</span>
          </h2>

          <div className="mt-8 flex justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
              <a href={resourceLinks.marketReports} target="_blank" rel="noopener noreferrer">
                Find Your Report Here <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens eXp Realty in a new tab)</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeResourceSection;
