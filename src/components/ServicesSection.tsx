import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, DollarSign, Plane, TrendingDown } from "lucide-react";
const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const services = [{
    icon: Home,
    title: "Buying",
    description: "Looking for your next home in Lake Stevens, Everett, Marysville, Snohomish, or nearby communities? I'll help you understand the numbers, compare neighborhoods, and write offers that make sense for both your budget and your stress levels.",
    cta: "Explore Buying Services",
    href: "/services/buying"
  }, {
    icon: DollarSign,
    title: "Selling",
    description: "From pricing strategy and home prep to marketing and negotiation, I'll help you position your Snohomish County home so it stands out in today's market—without burning yourself out in the process.",
    cta: "Explore Selling Services",
    href: "/services/selling"
  }, {
    icon: Plane,
    title: "Relocation",
    description: "Moving to Snohomish County from out of the area or on military orders? I'll be your on-the-ground partner, sharing honest insight on neighborhoods, commute options, and homes so you can make confident decisions from a distance.",
    cta: "Explore Relocation Services",
    href: "/services/relocation"
  }, {
    icon: TrendingDown,
    title: "Downsizing",
    description: "If you're entering a new season and your current home no longer fits, I'll help you right-size into something more manageable—step by step—while honoring both the practical and emotional parts of letting go.",
    cta: "Explore Downsizing Services",
    href: "/services/downsizing"
  }];
  return <section id="services" className="py-20 md:py-32 bg-background">
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
      }} className="text-center mb-16">
          <p className="font-script text-3xl text-secondary mb-6 md:text-6xl" aria-hidden="true">When it's time…</p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary">
            Here's How We Can Work Together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50,
          scale: 0.9
        }} animate={isInView ? {
          opacity: 1,
          y: 0,
          scale: 1
        } : {
          opacity: 0,
          y: 50,
          scale: 0.9
        }} transition={{
          duration: 0.6,
          delay: index * 0.15,
          type: "spring",
          stiffness: 100
        }}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border bg-card group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-warm-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white" asChild>
                    <Link to={service.href}>{service.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;