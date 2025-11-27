import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
const FreeResourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };
  return <section className="py-20 md:py-32 bg-warm-bg">
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
      }} className="max-w-3xl mx-auto text-center">
          <p className="font-script text-3xl text-secondary mb-6 md:text-6xl">Steal this!</p>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
            A Free Resource from My Toolbox
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-10 text-foreground">
            From downsizing roadmaps to buyer and relocation checklists, I am always creating practical resources for my clients. Pop your email in and I will send you whichever free guide I am sharing right now to help you plan your next move with more confidence.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 h-12 bg-background border-border" />
            <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
              Get the Free Guide
            </Button>
          </form>
        </motion.div>
      </div>
    </section>;
};
export default FreeResourceSection;