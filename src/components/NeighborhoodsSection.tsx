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
    name: "Snohomish County",
    description: "A mix of charming small towns, established neighborhoods, and rural pockets, all within reach of major job centers and outdoor fun.",
    altText: "Snohomish County WA neighborhoods overview",
    href: "/areas/snohomish-county"
  }, {
    name: "Arlington",
    description: "A blend of small-town main street, newer neighborhoods, and rural acreage with quick access to I-5 and mountain adventures.",
    altText: "Arlington WA neighborhood homes - real estate",
    href: "/areas/arlington"
  }, {
    name: "Bothell &\nMill Creek",
    description: "Highly sought-after schools, established neighborhoods, and strong commuter access toward the Eastside and Seattle.",
    altText: "Bothell and Mill Creek WA neighborhoods - homes for sale",
    href: "/areas/bothell-mill-creek"
  }, {
    name: "Everett & Mukilteo",
    description: "Waterfront views, historic homes, and commuter-friendly locations near Paine Field, Naval Station Everett, and major employers.",
    altText: "Everett and Mukilteo WA coastline and homes",
    href: "/areas/everett-mukilteo"
  }, {
    name: "Lake Stevens",
    description: "Lakeside living, established neighborhoods, and new construction options with a strong community feel and easy access to Everett and Highway 9.",
    altText: "Lake Stevens WA lakefront homes and community",
    href: "/areas/lake-stevens"
  }, {
    name: "Marysville",
    description: "Growing neighborhoods, convenient shopping, and quick access north and south, with room to stretch out a bit more than the city core.",
    altText: "Marysville WA family neighborhoods and parks",
    href: "/areas/marysville"
  }, {
    name: "Snohomish",
    description: "Quaint historic downtown, scenic farmland, and neighborhoods that feel a little slower and more small-town while still being close in.",
    altText: "Snohomish WA historic homes and downtown",
    href: "/areas/snohomish"
  }, {
    name: "Stanwood & Camano",
    description: "Coastal views, island sunsets, and a quieter pace of life for people who want to feel a little more 'away' without being too far from services.",
    altText: "Stanwood and Camano Island WA coastal homes",
    href: "/areas/stanwood-camano"
  }];
  return <section id="neighborhoods" className="py-20 md:py-32 bg-background">
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
          <p className="font-script text-3xl text-secondary mb-6 md:text-6xl" aria-hidden="true">Let me show you around…</p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary">Explore Neighborhoods</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {neighborhoods.map((area, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.5,
          delay: index * 0.08
        }}>
              <Link to={area.href}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border bg-card group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="h-32 bg-warm-bg rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300" role="img" aria-label={area.altText}>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-primary text-center px-2 whitespace-pre-line">
                        {area.name}
                      </h3>
                    </div>
                    <p className="text-foreground leading-relaxed text-base text-left">
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