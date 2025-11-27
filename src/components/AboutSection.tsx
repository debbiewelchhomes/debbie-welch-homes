import { Button } from "@/components/ui/button";
import debbiePortrait from "@/assets/debbie-portrait.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-script text-3xl md:text-4xl text-secondary mb-4">
            hey there…
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
            I'm Debbie
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                I am a 40+ year Snohomish County resident, homeowner, and real estate broker who has walked through a lot of the same life transitions my clients are facing. I have raised my family here, owned multiple personal and investment properties, and watched our communities grow and change in real time.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Before real estate, I spent nearly three decades in healthcare as a medical coder, auditor, and educator. That background wired me to pay attention to details, ask good questions, and follow through — skills that now show up in careful research, clear explanations, and a steady, organized process for my clients.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Together with my husband Todd, a retired Navy Veteran and current systems administrator, we have raised our blended family of six in the Lake Stevens and Marysville areas. I serve on the Lake Stevens Education Foundation board and, when I am not working, you will usually find me visiting grandkids, exploring local wineries, breweries, and restaurants, sneaking off for a coastal or mountain day trip, or hanging out with Cooper — our demanding but very lovable Goldendoodle.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                All of that life experience shows up in how I work. I know a move is rarely just a transaction. It is memories, money, logistics, and a whole lot of feelings wrapped into one big decision. My role is to be your calm, informed guide — someone who tells you the truth, lays out your options, and walks beside you from first conversation to closing.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8"
            >
              See How We Can Work Together
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <img
              src={debbiePortrait}
              alt="Debbie Welch, Real Estate Broker"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
