import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl flow-root">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.6 }}
            className="flow-root"
          >
            <h2 className="font-heading mb-6 text-primary">
              <span className="eyebrow">Hey there...</span>
              <span className="h-section block max-w-[12ch] text-secondary">I'm Debbie</span>
            </h2>


            <img
              alt="Debbie Welch, Snohomish County real estate broker"
              className="mx-auto mb-8 w-full max-w-[416px] rounded-lg shadow-md md:float-right md:ml-10 md:mb-6 md:w-[364px] lg:w-[416px]"
              src="/images/debbie-welch-homepage.webp"
              width="1100"
              height="1320"
              loading="lazy"
            />
            <div className="lg:text-justify lg:[hyphens:auto]">
              <p className="copy text-foreground mb-4">
                I'm a Snohomish County real estate broker, a lifelong floor-plan enthusiast, and currently in the middle of a live-in renovation in North Everett.
              </p>
              <p className="copy text-foreground mb-4">
                I like helping people work through the details: what a home will cost, how the timing could work, and which questions need answers before a decision.
              </p>
              <p className="copy text-foreground mb-4">
                My 30 years in healthcare, including coding, auditing, and education, taught me to read carefully and explain complex information. Those habits are part of how I work today.
              </p>
              <p className="copy text-foreground mb-6">
                I help buyers and sellers across the county, including first-time buyers, with a particular focus on senior transitions and downsizing, military PCS moves and Veterans, and people relocating to or from Snohomish County.
              </p>
            </div>
            <div className="clear-both flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Read More About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
