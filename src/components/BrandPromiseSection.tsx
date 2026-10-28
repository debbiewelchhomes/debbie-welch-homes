import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, ListChecks, MapPin, MessageCircle } from "lucide-react";

const BrandPromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const promises = [
    {
      icon: Shield,
      title: "Answers to Your Questions",
      description:
        "We talk through costs, choices, and contract terms in plain language.",
    },
    {
      icon: ListChecks,
      title: "Clear, Organized Process",
      description:
        "Timelines and checklists help us keep track of deadlines and next steps.",
    },
    {
      icon: MapPin,
      title: "Local Insight",
      description:
        "My local experience helps put commute routes, services, and housing choices in context.",
    },
    {
      icon: MessageCircle,
      title: "Communication Along the Way",
      description:
        "We discuss updates, questions, and changes as your move takes shape.",
    },
  ];

  return (
    <section className="section bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-5xl text-center"
        >
          <h2 className="font-heading text-primary">
            <span className="eyebrow">Our working relationship...</span>
            <span className="h-section mx-auto block max-w-2xl text-secondary">What You Can Expect</span>
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
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background">
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
