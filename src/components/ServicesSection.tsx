import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, DollarSign, Plane, TrendingDown } from "lucide-react";

const services = [
  {
    icon: TrendingDown,
    title: "Senior Housing Transitions & Downsizing",
    description:
      "If your current home no longer fits the season you are in, I will help you plan the move step by step, honoring both the practical and the emotional parts of letting go.",
    cta: "Downsizing & Life Transitions",
    href: "/services/downsizing",
  },
  {
    icon: Plane,
    title: "Military PCS & Veterans",
    description:
      "Orders move fast. I coordinate around your report date, share honest neighborhood insight, and keep things moving when you cannot be here in person.",
    cta: "Military PCS & Relocation",
    href: "/services/relocation",
  },
  {
    icon: Home,
    title: "Buying",
    description:
      "In Lake Stevens, Everett, Marysville, Snohomish, or nearby, I will help you understand the numbers, compare neighborhoods, and write offers that make sense for your budget.",
    cta: "Explore Buying",
    href: "/services/buying",
  },
  {
    icon: DollarSign,
    title: "Selling",
    description:
      "Pricing, home prep, marketing, and negotiation, handled with a clear plan so you know what is happening at each stage of the sale.",
    cta: "Explore Selling",
    href: "/services/selling",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="eyebrow" aria-hidden="true">
            When it's time…
          </p>
          <h2 className="font-heading h-section text-primary">Here's How We Can Work Together</h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.4, delay: Math.min(index, 3) * 0.06, ease: "easeOut" }}
              className="card-surface flex h-full flex-col"
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-warm-bg">
                <service.icon className="h-5 w-5 text-secondary" aria-hidden="true" />
              </span>
              <h3 className="font-heading h-card mb-3 text-primary">{service.title}</h3>
              <p className="copy mb-6 text-foreground">{service.description}</p>
              <Button
                variant="outline"
                className="mt-auto self-start border-secondary text-secondary hover:bg-secondary hover:text-white"
                asChild
              >
                <Link to={service.href}>{service.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
