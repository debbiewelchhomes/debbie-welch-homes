import { Button } from "@/components/ui/button";
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
    description: "From first time buyers to seasoned movers, I help you understand the numbers, neighborhoods, and strategy so you do not overpay or second guess your decision.",
    cta: "Download the Buyer Guide"
  }, {
    icon: DollarSign,
    title: "Selling",
    description: "When it is time to sell, we build a custom plan for pricing, prep, and marketing that respects your timelines and maximizes your net without turning your life upside down.",
    cta: "Get the Selling Resource"
  }, {
    icon: Plane,
    title: "Relocation",
    description: "Relocating to or from Snohomish County? I help military families and out-of-area buyers get the lay of the land, match neighborhoods to lifestyle, and coordinate a smooth long-distance move.",
    cta: "Relocating to Snohomish County Guide"
  }, {
    icon: TrendingDown,
    title: "Downsizing",
    description: "Downsizing is about more than square footage. Together we will plan your timelines, prep your current home, and find the right next place for this season of life.",
    cta: "Download the Downsizing Guide"
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
          <p className="font-script text-3xl text-secondary mb-6 md:text-6xl">When it is time to move…</p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
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
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;