import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, BookOpen, ListChecks, MapPin, Heart, MessageCircle } from "lucide-react";

const BrandPromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const promises = [
    {
      icon: Shield,
      title: "Clarity Over Pressure",
      description: "I walk you through the 'why' behind every recommendation so you never feel pushed into a decision that does not sit right.",
    },
    {
      icon: BookOpen,
      title: "Education First",
      description: "You get plain language explanations about the market, pricing, and timelines so you can move forward with confidence.",
    },
    {
      icon: ListChecks,
      title: "Calm, Organized Process",
      description: "Checklists, timelines, and clear next steps keep everyone on track and cut down on last minute surprises.",
    },
    {
      icon: MapPin,
      title: "Local, Boots on the Ground Insight",
      description: "As a 40+ year Snohomish County local and multi-property owner, I have hands-on knowledge of our neighborhoods, schools, employers, and market cycles — not just what is written in online reports.",
    },
    {
      icon: Heart,
      title: "Heart-Led, No-Nonsense Support",
      description: "I care deeply about the people behind the transaction and I will always give you honest, straightforward advice.",
    },
    {
      icon: MessageCircle,
      title: "Steady Communication",
      description: "You will always know what is happening, what is coming next, and what I recommend — no ghosting, no guessing, no being left in the dark.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            My Brand Promise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 40, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border bg-card">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warm-bg mb-6">
                    <promise.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 text-primary">
                    {promise.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {promise.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPromiseSection;
