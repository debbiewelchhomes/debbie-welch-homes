import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, ListChecks, MapPin, MessageCircle } from "lucide-react";

const BrandPromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const promises = [
    {
      icon: Shield,
      title: "Clarity Over Pressure",
      description:
        "I explain the reasoning, tradeoffs, and fine print in plain language so you can make decisions with confidence.",
    },
    {
      icon: ListChecks,
      title: "Calm, Organized Process",
      description:
        "Clear timelines, practical checklists, and defined next steps keep the process moving without unnecessary surprises.",
    },
    {
      icon: MapPin,
      title: "Local Insight",
      description:
        "More than 45 years in Snohomish County gives me context that an online report cannot provide.",
    },
    {
      icon: MessageCircle,
      title: "Honest, Steady Communication",
      description:
        "You will know what is happening, what comes next, and what I honestly recommend for your situation.",
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

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
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
