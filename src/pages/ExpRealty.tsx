import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ExpRealty = () => {
  const storyRef = useRef(null);
  const whyRef = useRef(null);
  const entourageRef = useRef(null);
  const referralRef = useRef(null);
  const ctaRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const entourageInView = useInView(entourageRef, { once: true, margin: "-100px" });
  const referralInView = useInView(referralRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const expBenefits = [
    {
      title: "Commission Structure",
      description: "80/20 split until you cap, then 100% after that. No desk fees, no franchise fees, no royalties. The math is straightforward."
    },
    {
      title: "Revenue Share",
      description: "When agents you sponsor close transactions, eXp shares a portion of its company dollar with you - paid by eXp, not taken from your agents. It's optional, not required."
    },
    {
      title: "Stock Awards",
      description: "Agents can earn eXp stock (EXPI) through transactions and milestones. It's a real ownership stake in the company you work with."
    },
    {
      title: "Healthcare Access",
      description: "eXp offers group healthcare options through eXp Agent Healthcare - something most independent agents or small brokerages can't access."
    },
    {
      title: "Training & Education",
      description: "eXp University offers live and on-demand training on everything from contracts to lead generation. Weekly sessions, recorded archives, accessible anywhere."
    },
    {
      title: "Cloud-Based Model",
      description: "No required office. No geographic limitations. You work from where you work best - your home, a coffee shop, or anywhere with wifi."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Work With Me at eXp Realty | Debbie Welch Homes"
        description="Thinking about eXp Realty? Here's my honest story - why I joined, what Entourage offered that others didn't, and what it's actually been like as a Snohomish County broker."
        canonical="/about/exp-realty"
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                For fellow agents…
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Why I'm at eXp Realty. And Why You Might Be Too.
              </h1>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                This page isn't a recruiting pitch. I don't have a quota to hit and I'm not going to tell you eXp is right for every agent, because it isn't. What I can do is tell you my honest story - how I got here, what I was looking for, and what it's actually been like.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                If any of it resonates, let's talk. If it doesn't, no hard feelings. I'd rather you make the right call for your business than join because of a good pitch.
              </p>
            </motion.div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={storyRef}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                How I got here…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8">
                My Story With eXp
              </h2>

              <div className="text-foreground text-lg leading-relaxed space-y-5">
                <p>
                  I didn't start at eXp. I started somewhere else, and when my situation there changed and I needed a different kind of support structure, I started researching my options seriously.
                </p>
                <p>
                  What I kept coming back to was eXp - not because of the commission split or the stock program, but because of the agents I already knew who were there. I'm part of a nationwide women's real estate group, and several of the women leading it were eXp agents. I'd watched how they showed up - generous with their knowledge, supportive of agents at every brokerage, not just their own. They weren't recruiting. They were just being good agents and good people.
                </p>
                <p>
                  That mattered to me. When I started asking questions about eXp, they answered honestly. When I compared what eXp offered to what I had, the decision wasn't hard.
                </p>
                <p>
                  I've been here since, and I haven't regretted it.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why eXp Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={whyRef}
              initial="hidden"
              animate={whyInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                The structure…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8">
                What eXp Actually Offers
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-10">
                I'm not going to oversell this. Here's the straightforward version of what's on the table as an eXp agent.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {expBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate={whyInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                          <h3 className="font-heading text-xl font-bold text-primary">
                            {benefit.title}
                          </h3>
                        </div>
                        <p className="text-foreground leading-relaxed text-base pl-8">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Entourage Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={entourageRef}
              initial="hidden"
              animate={entourageInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                The group that matters…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8">
                Why Entourage Specifically
              </h2>

              <div className="text-foreground text-lg leading-relaxed space-y-5">
                <p>
                  Joining eXp is one decision. Choosing who you join under is a separate and equally important one. Your sponsor group shapes your day-to-day experience more than the brokerage itself does.
                </p>
                <p>
                  Entourage is a group within eXp built around agents who want to actually work alongside each other - not just be names on the same roster. That means weekly coaching calls and Zoom meetings where agents share what's working, what isn't, and what they're learning. It means a community that shows up when you have a question, a hard transaction, or just need to talk through a situation with someone who's been there.
                </p>
                <p>
                  eXp also provides its own company-wide training through eXp University - live and on-demand sessions covering everything from contracts to technology to building your business. Entourage layers additional support on top of that.
                </p>
                <p>
                  For me, the cloud brokerage model only works well if you're connected to real people. Entourage is where that connection lives.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Referral Network Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={referralRef}
              initial="hidden"
              animate={referralInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                The part I didn't expect…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8">
                A Referral Network You Can Actually Trust
              </h2>

              <div className="text-foreground text-lg leading-relaxed space-y-5">
                <p>
                  When I say I know agents in different markets and different states, I mean I've actually met them. Talked with them. Worked alongside them in our group calls and meetings. These are not names in a directory.
                </p>
                <p>
                  That matters a lot when a client needs to be referred out. When someone I've worked with in Snohomish County is moving to Arizona, or Texas, or Germany, I don't just Google "top agent" in that market and hope for the best. I reach out to someone I know personally - someone whose approach I've seen, whose integrity I trust, who I'm confident will take care of my client the way I would.
                </p>
                <p>
                  That network is one of the things I value most about where I ended up. It changed how I think about what it means to serve clients beyond my own backyard.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ctaRef}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                Curious? Let's talk…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
                No Pressure. Just a Real Conversation.
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                If you're researching eXp, thinking about making a change, or just want to understand what the cloud brokerage model actually looks like in practice - I'm happy to talk through it. I'll tell you what I know, what I don't, and what questions I'd be asking if I were in your position.
              </p>
              <p className="text-foreground text-lg leading-relaxed mb-10">
                My goal isn't to recruit you. It's to help you make the right decision for your business - whatever that turns out to be.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white px-8"
                  asChild
                >
                  
                    href="https://thebiggame.my.canva.site/debbie-welch-entourage-landing-page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More & Book a Call
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8"
                  asChild
                >
                  <a href="mailto:debbie@debbiewelchhomes.com">
                    Email Me Directly
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExpRealty;
