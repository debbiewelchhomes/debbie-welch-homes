import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const specialties = [
  { label: "Senior Housing Transitions & Downsizing", to: "/services/downsizing" },
  { label: "Military PCS & Veterans", to: "/services/relocation" },
  { label: "Relocation to and from Snohomish County", to: "/services/relocation" },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 parallax-section"
        style={{
          backgroundImage: `linear-gradient(rgba(225, 223, 220, 0.35), rgba(225, 223, 220, 0.35)), url(${heroImage})`,
        }}
        role="img"
        aria-label="Snohomish County WA home exterior, Debbie Welch local real estate agent"
      />

      <div className="relative z-10 container mx-auto flex min-h-[80vh] items-center justify-center px-4 pb-16 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-3xl"
        >
          <div className="text-backdrop text-center">
            <p className="eyebrow" aria-hidden="true">
              Welcome home…
            </p>

            <h1 className="font-heading h-display text-primary mb-4">
              Helping You Home in Snohomish County
            </h1>

            <p className="copy-lead text-primary/90 mx-auto measure mb-6">
              I grew up here, I have owned homes here, and I have spent 45+ years watching this
              county change. You get honest guidance, a calm and organized plan, and someone who
              actually picks up the phone.
            </p>

            <ul className="mb-8 flex flex-wrap justify-center gap-2">
              {specialties.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="block rounded-full border border-secondary/40 bg-white/70 px-4 py-1.5 text-sm text-primary transition-colors hover:border-secondary hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90" asChild>
                <a
                  href="https://cal.com/debbie.welch.homes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free Consult
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white"
                asChild
              >
                <Link to="/services">See How I Help</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary/80">
              Serving Lake Stevens, Everett, Marysville, Arlington, Snohomish, Stanwood, Camano
              Island, Bothell, Mill Creek, and Mukilteo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
