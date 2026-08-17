import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { mainBlogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const posts = mainBlogPosts.slice(0, 3);

  return (
    <section id="blog" className="section bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4" aria-hidden="true">Stay informed…</p>
          <h2 className="font-heading h-section text-primary mb-6">From the Blog</h2>
          <p className="copy text-foreground max-w-2xl mx-auto">
            Real talk on downsizing, buying, selling, and what is actually happening in the Snohomish County market. A few useful numbers included, because the numbers matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border bg-card cursor-pointer overflow-hidden">
                  {post.image && (
                    <img src={post.image} alt={post.imageAlt || post.title} className="h-44 w-full object-cover" loading="lazy" />
                  )}
                  <CardContent className="p-6">
                    <h3 className="font-heading h-card mb-3 text-primary">{post.title}</h3>
                    <p className="copy text-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="text-secondary p-0">Read More →</Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white text-lg font-normal" asChild>
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
