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
  return <section id="about" className="py-20 md:py-32 bg-warm-bg">
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
          <p className="font-script text-3xl text-secondary mb-4 md:text-6xl" aria-hidden="true">
            hey there…
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
            I'm Debbie
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
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
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                I'm a life-long Snohomish County resident, homeowner, and real estate broker who has walked through many of the same transitions my clients are facing. I've raised my family here, owned both personal and investment properties, and watched Lake Stevens, Everett, Marysville, and surrounding communities in Snohomish County grow and change over the years.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                My sweet spot is helping people through big life changes — especially empty nesting, downsizing, and relocation (including military moves). I bring a mix of market knowledge, neighborhood insight, and detailed research so you understand what's happening with prices, inventory, and trends before you make any big decisions.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Every real estate transaction is more than a business deal — it's a major life event. I'm committed to being responsive, providing regular updates, and making sure you feel informed and confident at each step. My approach is grounded in integrity and calm, and I adapt my service to each client's situation, because no two real estate journeys are exactly alike.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                As a wife, mom, and "Gramma," I deeply understand the importance of home. Together with my husband, a retired Navy Veteran, we raised our blended family of six children in the Lake Stevens and Marysville communities. When I'm not serving clients, you'll usually find me volunteering with the Lake Stevens Education Foundation, traveling, exploring new local restaurants, breweries, and wineries, spending time with family, or day-tripping to the Pacific Northwest's beautiful coastal and mountain areas.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Having owned multiple personal and investment properties in Snohomish County over the years, I bring both professional expertise and lived experience to the table. My goal is simple: to be your calm, honest guide — someone who will tell you the truth, lay out your options, and help you home in a way that feels steady and doable, not rushed or overwhelming.
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