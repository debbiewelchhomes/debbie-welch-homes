import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import debbiePortrait from "@/assets/debbie-portrait.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="font-script text-3xl text-secondary mb-4 md:text-6xl"
            aria-hidden="true"
          >
            Hey there…
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
            I'm Debbie
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[52%_45%] gap-6 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="prose prose-lg max-w-lg">
              <p className="text-foreground leading-relaxed mb-4 text-justify text-lg">
                I grew up in Marysville, raised my family in Lake Stevens, and
                I've been buying, selling, and renovating property in Snohomish
                County for decades. This is my backyard. I know which
                neighborhoods are changing, which ones have held steady for
                thirty years, and where the actual value is hiding in this
                market right now.
              </p>
              <p className="text-foreground leading-relaxed mb-4 text-justify text-lg">
                Before real estate, I spent 30 years in healthcare -- medical
                coding, auditing, and education. That work taught me to read
                the fine print, catch the things that get buried on page four,
                and explain complicated information in plain language. Those
                habits follow me into every transaction.
              </p>
              <p className="text-foreground leading-relaxed mb-4 text-justify text-lg">
                Most of my clients are going through something big -- downsizing
                after the kids leave, relocating for military orders, buying for
                the first time and not sure where to start. I've been through
                versions of all of it. My husband Todd is a retired Navy
                veteran. We're currently doing a live-in renovation in North
                Everett. I'm not just talking about this stuff from a distance.
              </p>
              <p className="text-foreground leading-relaxed mb-6 text-justify text-lg">
                I also serve on the Lake Stevens Education Foundation board and
                the Everett Community Development Advisory Council. This
                community matters to me. I'm not going anywhere.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8"
              asChild
            >
              <Link to="/contact" className="text-lg font-normal">
                Let's Talk
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <img
              alt="Debbie Welch, Snohomish County real estate broker and local expert"
              className="rounded-lg shadow-2xl w-full"
              src="/lovable-uploads/73b3d770-6a81-4f42-b1a2-76049a58e3b2.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
