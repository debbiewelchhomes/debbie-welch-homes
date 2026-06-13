import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 parallax-section"
        style={{
          backgroundImage: `linear-gradient(rgba(225, 223, 220, 0.3), rgba(225, 223, 220, 0.3)), url(${heroImage})`,
        }}
        role="img"
        aria-label="Snohomish County WA home exterior - Debbie Welch local real estate agent"
      />

      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40 pb-20 text-center items-center justify-center min-h-[85vh] flex flex-row">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-backdrop px-5 py-6 md:px-8 md:py-8">
            <p
              className="font-script text-4xl md:text-5xl lg:text-6xl mb-6"
              style={{ color: "#6e808e" }}
            >
              Welcome home…
            </p>

            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-6">
              Helping You Home in Snohomish County
            </h1>

            <p className="text-xl md:text-2xl text-primary mb-8 max-w-3xl mx-auto font-light">
              Lifelong Local. Downsizing Specialist. Military & Relocation Expert.
            </p>

            <div className="prose prose-lg text-primary mb-10 max-w-3xl mx-auto">
              <p className="leading-relaxed text-xl">
                I grew up here. I've bought and sold here. I know which
                neighborhoods are changing, which ones have been steady for
                decades, which ones you may want to research a little more than
                others, and where the real value is in this market right now.
                If you want someone who will level with you, keep you organized,
                and actually pick up the phone - that's what I do.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6"
                asChild
              >
                <a
                  href="https://cal.com/debbie.welch.homes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-normal"
                >
                  Book a Free Consult
                </a>
              </Button>
            </div>

            <p className="text-sm text-primary max-w-2xl mx-auto">
              Serving Lake Stevens, Everett, Marysville, Arlington, Snohomish,
              Stanwood, Camano Island, Bothell, Mill Creek, and Mukilteo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
