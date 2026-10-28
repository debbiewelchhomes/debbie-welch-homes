import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";




const HeroSection = () => {
  return (
    <section className="home-hero relative flex min-h-[68vh] lg:min-h-[72vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 parallax-section"
        style={{
          backgroundImage: `linear-gradient(rgba(225, 223, 220, 0.35), rgba(225, 223, 220, 0.35)), url(${heroImage})`,
        }}
        role="img"
        aria-label="Home exterior with illuminated windows and evergreen trees"
      />

      <div className="relative z-10 container mx-auto flex min-h-[68vh] lg:min-h-[72vh] items-center justify-center px-4 pb-16 pt-[6.5rem] md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-3xl"
        >
          <div className="hero-panel text-center">
            <h1 className="font-heading mb-3 md:mb-4 text-primary">
              <span className="eyebrow">
                Welcome home...
              </span>
              <span className="h-display mx-auto block max-w-none text-secondary">Helping You Home<br />in Snohomish County</span>
            </h1>



            <p className="copy-lead mx-auto mb-5 md:mb-6 max-w-[54ch] text-primary/90">
              I grew up in Marysville, lived and raised my family in Lake Stevens, and now call Everett home. After more than 45 years in Snohomish County, I know how much the right home and location can matter to everyday life. I’m here to help you understand your options and make a plan that works for you.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                asChild
              >
                <Link to="/services">See How I Can Help</Link>
              </Button>

            </div>

            <p className="mt-4 md:mt-6 text-[0.8125rem] leading-snug sm:text-sm sm:leading-normal text-primary/80">

              Serving Lake Stevens, Everett, Marysville, Arlington, Snohomish,
              <br />
              Stanwood-Camano Island, Bothell, Mill Creek, and Mukilteo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

