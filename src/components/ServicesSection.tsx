import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, DollarSign, Plane, TrendingDown } from "lucide-react";
import type { ComponentType } from "react";

type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  titleSub?: string;
  description: string;
  cta: string;
  href: string;
};

const services: Service[] = [
  {
    icon: Home,
    title: "Buying",
    description:
      "Whether it is your first home or your next one, in Lake Stevens, Everett, Marysville, Snohomish, or nearby, I will help you understand the numbers, compare neighborhoods, and write offers that make sense for your budget.",
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
  {
    icon: TrendingDown,
    title: "Senior Housing",
    titleSub: "Transitions & Downsizing",
    description:
      "If your current home no longer fits the season you are in, I will help you plan the move step by step, honoring both the practical and the emotional parts of letting go.",
    cta: "Downsizing & Life Transitions",
    href: "/services/downsizing",
  },
  {
    icon: Plane,
    title: "Military & Veterans",
    titleSub: "PCS & Relocation",
    description:
      "Relocating for work or family, or moving on military PCS orders? We start with your move date, budget, and housing needs. PCS planning also considers report dates and military timelines. This pathway covers moves to or from Snohomish County.",
    cta: "Military PCS & Relocation",
    href: "/services/relocation",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="font-heading text-primary">
            <span className="eyebrow">
              When it's time...
            </span>
            <span className="h-section block text-secondary">Here's How We Can Work Together</span>
          </h2>

        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.4, delay: Math.min(index, 3) * 0.06, ease: "easeOut" }}
              className="card-surface flex h-full min-w-0 flex-col"
            >
              <div className="mb-3 flex items-start gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warm-bg">
                  <service.icon className="h-4 w-4 text-secondary" aria-hidden="true" />
                </span>
                <h3 className="font-heading h-card min-h-[3em] leading-normal text-primary">
                  {service.title}
                  {service.titleSub && (
                    <>
                      <br />
                      {service.titleSub}
                    </>
                  )}
                </h3>
              </div>
              <p className="copy mb-6 text-foreground">{service.description}</p>
              <Button
                variant="outline"
                className="mt-auto w-full sm:w-auto self-start border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
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
