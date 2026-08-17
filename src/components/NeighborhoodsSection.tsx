import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import lakeStevensImage from "@/assets/area-hero-lake-stevens.webp";
import everettImage from "@/assets/area-hero-everett-mukilteo.webp";
import marysvilleImage from "@/assets/area-hero-marysville.webp";
import bothellMillCreekImage from "@/assets/area-hero-bothell-mill-creek.webp";
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
    href: "/areas/lake-stevens",
    image: lakeStevensImage
  }, {
    name: "Everett",
    description: "Waterfront views, historic homes, and commuter-friendly locations near Paine Field, Naval Station Everett, and major employers.",
    altText: "Everett WA neighborhoods, waterfront, and homes",
    href: "/areas/everett-mukilteo",
    image: everettImage
  }, {
    name: "Marysville",
    description: "Growing neighborhoods, convenient shopping, and quick access north and south, with room to stretch out a bit more than the city core.",
    altText: "Marysville WA neighborhoods and parks",
    href: "/areas/marysville",
    image: marysvilleImage
  }, {
    name: "Mill Creek &\nBothell",
    description: "Established neighborhoods, convenient shopping, and strong commuter access toward the Eastside and Seattle.",
    altText: "Mill Creek and Bothell WA neighborhoods and homes",
    href: "/areas/bothell-mill-creek",
    image: bothellMillCreekImage
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
                    <div className="relative mb-4 h-36 overflow-hidden rounded-lg">
                      <img src={area.image} alt={area.altText} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 flex items-center justify-center bg-muted-foreground/75 px-3">
                        <h3 className="font-heading h-card text-primary-foreground text-center whitespace-pre-line">
                          {area.name}
                        </h3>
                      </div>
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