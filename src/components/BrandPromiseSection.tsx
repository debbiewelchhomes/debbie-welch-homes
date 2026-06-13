import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  BookOpen,
  ListChecks,
  MapPin,
  Heart,
  MessageCircle,
} from "lucide-react";

const BrandPromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const promises = [
    {
      icon: Shield,
      title: "Clarity Over Pressure",
      description:
        "I walk you through the 'why' behind every recommendation so you understand what you're agreeing to - and why - before you sign anything.",
    },
    {
      icon: BookOpen,
      title: "Education First",
      description:
        "Plain language explanations of market conditions, pricing, and timelines. No jargon, no hand-waving. You should understand every step of what we're doing and why.",
    },
    {
      icon: ListChecks,
      title: "Calm, Organized Process",
      description:
        "Checklists, timelines, and clear next steps keep everyone on track and cut down on last-minute surprises. There will always be a plan.",
    },
    {
      icon: MapPin,
      title: "Local, Boots-on-the-Ground Insight",
      description:
        "I've lived in Snohomish County for over 45 years and have owned multiple properties here. I know what the online reports miss - the neighborhoods in transition, the roads that flood, the pockets of real value.",
    },
    {
      icon: Heart,
      title: "Honest, Straight Answers",
      description:
        "If a house has a problem, I'll tell you. If the timing isn't right, I'll say so. You'll always get my real opinion - not the one designed to move the transaction forward.",
    },
    {
      icon: MessageCircle,
      title: "Steady Communication",
      description:
        "You will always know what's happening, what's coming next, and what I recommend. No ghosting. No 'I'll circle back.' I pick up the phone.",
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
            What Working With Me Actually Looks Like
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
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-warm-bg flex-shrink-0 mt-1">
                      <promise.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-primary pt-1">
                      {promise.title}
                    </h3>
                  </div>
                  <p className="text-foreground leading-relaxed text-lg font-normal pl-16">
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
