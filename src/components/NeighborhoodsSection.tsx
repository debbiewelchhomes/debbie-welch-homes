import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
const NeighborhoodsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const neighborhoods = [{
    name: "Lake Stevens",
    description: "Lakeside living, established neighborhoods, and new construction options with a strong community feel and easy access to Everett and Highway 9.",
    altText: "Lake Stevens WA lakefront homes and community",
    href: "/areas/lake-stevens"
  }, {
    name: "Everett",
    description: "Waterfront views, historic homes, and commuter-friendly locations near Paine Field, Naval Station Everett, and major employers.",
    altText: "Everett WA neighborhoods, waterfront, and homes",
    href: "/areas/everett-mukilteo"
  }, {
    name: "Marysville",
    description: "Growing neighborhoods, convenient shopping, and quick access north and south, with room to stretch out a bit more than the city core.",
    altText: "Marysville WA neighborhoods and parks",
    href: "/areas/marysville"
  }, {
    name: "Mill Creek &\nBothell",
    description: "Established neighborhoods, convenient shopping, and strong commuter access toward the Eastside and Seattle.",
    altText: "Mill Creek and Bothell WA neighborhoods and homes",
    href: "/areas/bothell-mill-creek"
  }];
  return <section id="neighborhoods" className="section bg-background">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 16
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 16
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <p className="eyebrow mb-4" aria-hidden="true">Let me show you around…</p>
          <h2 className="font-heading h-section text-primary">Featured Areas</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {neighborhoods.map((area, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 16
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 16
        }} transition={{
          duration: 0.5,
          delay: index * 0.08
        }}>
              <Link to={area.href}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border bg-card group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-28 items-center justify-center rounded-lg bg-warm-bg" role="img" aria-label={area.altText}>
                      <h3 className="font-heading h-card text-primary text-center px-2 whitespace-pre-line">
                        {area.name}
                      </h3>
                    </div>
                    <p className="copy text-foreground text-left">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default NeighborhoodsSection;