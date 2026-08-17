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
        "I walk you through the reasoning behind every recommendation, so you understand what you are agreeing to before you sign anything.",
    },
    {
      icon: BookOpen,
      title: "Education First",
      description:
        "Plain language explanations of market conditions, pricing, and timelines. No jargon and no hand-waving.",
    },
    {
      icon: ListChecks,
      title: "Calm, Organized Process",
      description:
        "Checklists, timelines, and clear next steps keep everyone on track and cut down on last-minute surprises.",
    },
    {
      icon: MapPin,
      title: "Local Insight",
      description:
        "I have lived in Snohomish County for 45+ years and have owned multiple properties here. I know what the online reports miss.",
    },
    {
      icon: Heart,
      title: "Honest, Straight Answers",
      description:
        "If a house has a problem, I will tell you. If the timing is not right, I will say so. You get my real opinion.",
    },
    {
      icon: MessageCircle,
      title: "Steady Communication",
      description:
        "You will always know what is happening, what is coming next, and what I recommend. I pick up the phone.",
    },
  ];

  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="eyebrow-caps">The Working Relationship</span>
          <h2 className="font-heading h-section mt-3 text-primary">
            What Working With Me Actually Looks Like
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.4, delay: Math.min(index, 3) * 0.06, ease: "easeOut" }}
              className="card-surface h-full"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-warm-bg">
                  <promise.icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                </span>
                <h3 className="font-heading h-card text-primary">{promise.title}</h3>
              </div>
              <p className="copy text-foreground">{promise.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPromiseSection;
