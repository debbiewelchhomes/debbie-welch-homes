import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl flow-root">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.6 }}
            className="flow-root"
          >
            <h2 className="font-heading mb-6 text-primary">
              <span className="eyebrow">Hey there...</span>
              <span className="h-section block max-w-[12ch] text-secondary">I'm Debbie</span>
            </h2>


            <img
              alt="Debbie Welch, Snohomish County real estate broker"
              className="mx-auto mb-8 w-full max-w-[416px] rounded-lg shadow-md md:float-right md:ml-10 md:mb-6 md:w-[364px] lg:w-[416px]"
              src="/images/debbie-welch-homepage.webp"
              width="1100"
              height="1320"
              loading="lazy"
            />
            <div className="text-justify">
              <p className="copy text-foreground mb-4">
                I grew up in Marysville, raised my family in Lake Stevens, and now live in North Everett. I have spent more than 45 years watching Snohomish County change, and I bring that local perspective to every move.
              </p>
              <p className="copy text-foreground mb-4">
                Real estate does not have to feel pushy, confusing, or rushed. A lot of people come to me expecting the process to feel overwhelming. It can be, if no one takes the time to explain what is actually happening.
              </p>
              <p className="copy text-foreground mb-4">
                That is the part I care about most. I slow things down just enough for you to understand the numbers, the tradeoffs, and the fine print. The details buried in the middle of a document are usually the ones that matter most. I explain them in plain language and keep the process organized, so you can make a decision you fully understand.
              </p>
              <p className="copy text-foreground mb-6">
                I help buyers and sellers across the county, including first-time buyers, with a particular focus on senior transitions and downsizing, military PCS moves and Veterans, and people relocating to or from Snohomish County.
              </p>
            </div>
            <div className="clear-both flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Read More About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
