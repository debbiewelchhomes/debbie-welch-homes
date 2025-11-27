import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const posts = [{
    title: "Downsizing in Snohomish County: What You Need to Know",
    excerpt: "From timelines and tax questions to emotional goodbyes, here are the key things to think through before you sell and size down."
  }, {
    title: "Moving With a VA Loan: Military Relocation Tips",
    excerpt: "PCS orders, VA financing, and tight timelines do not have to break you. Here is how to plan your move in and out of Snohomish County with less stress."
  }, {
    title: "First-Time Buyer Tips for North Snohomish County",
    excerpt: "Where to start, what to ignore, and how to make a smart first purchase in Everett, Lake Stevens, Marysville, and beyond."
  }];
  return <section id="blog" className="py-20 md:py-32 bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <p className="font-script text-3xl text-secondary mb-6 md:text-6xl">
            Stay informed…
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Check Out My Blog
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            Real talk on downsizing, smart buying, and navigating the Snohomish County market without the hype. Think of it as a local guide with a few nerdy numbers sprinkled in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {posts.map((post, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
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
            </motion.div>)}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
            View All Posts
          </Button>
        </div>
      </div>
    </section>;
};
export default BlogSection;