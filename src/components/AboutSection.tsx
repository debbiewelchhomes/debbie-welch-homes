import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import debbiePortrait from "@/assets/debbie-portrait.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-16 md:py-24 bg-warm-bg">
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
      }} className="text-center mb-12">
          <p className="font-script text-3xl text-secondary mb-4 md:text-6xl" aria-hidden="true">Hey there…</p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
            I'm Debbie
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[55%_42%] gap-8 items-start max-w-5xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -40
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="order-2 md:order-1">
            <div className="prose prose-lg max-w-md">
              <p className="text-foreground leading-relaxed mb-4">
                I'm a lifelong Snohomish County resident, homeowner, and real estate broker who's walked through many of the same transitions my clients are facing. I've raised my family here, owned both personal and investment properties, and watched Lake Stevens, Everett, Marysville, and the surrounding communities grow and change over the years.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                My sweet spot is helping people through big life changes — especially empty nesting, downsizing, and relocation (including military moves). I blend market data, neighborhood insight, and detailed research so you understand what's happening with prices, inventory, and trends before you make any big decisions. Every move has real-life impact, so I stay responsive, keep you updated, and make sure you always know what's coming next.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                As a wife, mom, "Gramma," and partner to a retired Navy Veteran, I deeply understand the importance of home and community. When I'm not working with clients, I'm often involved with the Lake Stevens Education Foundation, spending time with family, or exploring our local restaurants, breweries, and day-trip spots around the Pacific Northwest.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                My goal is simple: to be your calm, honest guide — someone who will tell you the truth, lay out your options, and help you home in a way that feels steady and doable, not rushed or overwhelming.
              </p>
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8" asChild>
              <Link to="/services">See How We Can Work Together</Link>
            </Button>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 40
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 40
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="order-1 md:order-2">
            <img src={debbiePortrait} alt="Debbie Welch, Snohomish County real estate broker and local expert" className="rounded-lg shadow-2xl w-full" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;