import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const posts = [
    {
      title: "Washington's Medicaid Estate Recovery Rule -- What Every Family Should Know",
      excerpt:
        "Most people have never heard of it until it's too late. If a parent received Medicaid long-term care, the state can make a claim against their estate after they pass. Here's what that means for your family and your home.",
      href: "/blog/medicaid-estate-recovery-washington",
    },
    {
      title: "Moving to Snohomish County on Military Orders -- A Practical Guide",
      excerpt:
        "PCS timelines are tight and there's a lot of ground to cover. Here's an honest look at neighborhoods near Naval Station Everett, how VA financing works in this market, and what to know before you sign anything.",
      href: "/blog/military-pcs-relocation-snohomish-county",
    },
    {
      title: "Downsizing in Snohomish County: Where to Start When It All Feels Like Too Much",
      excerpt:
        "The house is too big. The kids are gone. You know you need to make a move -- but the thought of going through 30 years of stuff is genuinely overwhelming. Let's talk about what the process actually looks like, step by step.",
      href: "/blog/downsizing-snohomish-county",
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-32 bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="font-script text-3xl text-secondary mb-6 md:text-6xl"
            aria-hidden="true"
          >
            Stay informed…
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            From the Blog
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            Real talk on downsizing, buying, selling, and what's actually
            happening in the Snohomish County market. A few nerdy numbers
            included, because honestly -- the numbers matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={post.href}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border bg-card cursor-pointer">
                  <CardContent className="p-6">
                    <div className="h-40 bg-accent rounded-lg mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-3 text-primary">
                      {post.title}
                    </h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Button variant="link" className="text-secondary p-0">
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white text-lg font-normal"
            asChild
          >
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
