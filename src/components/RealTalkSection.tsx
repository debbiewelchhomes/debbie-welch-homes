import { Button } from "@/components/ui/button";
import calmInterior from "@/assets/calm-interior.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const RealTalkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section className="relative py-32 overflow-hidden parallax-section" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${calmInterior})`
  }}>
      <div className="relative z-10 container mx-auto px-4">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 40
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto text-center text-white">
          <p className="font-script text-3xl mb-6 md:text-6xl">Real talk…</p>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
            Real estate does not have to feel pushy, confusing, or rushed.
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-10 text-white/90">
            A lot of people brace themselves for this process to feel stressful and salesy. That is not how I work. I slow things down just enough so you understand your options, the numbers, and the tradeoffs before you make a move. My job is to protect your best interests, keep you informed, and make sure every decision lines up with your real life — not just the market headlines.
          </p>

          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
            Let's Talk About Your Next Move
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default RealTalkSection;