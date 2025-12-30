import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { mainBlogPosts, searchInsightsPosts } from "@/data/blogPosts";
import { pageSEO } from "@/data/seoData";

const Blog = () => {
  const recentPosts = mainBlogPosts.slice(0, 6);

  const categories = [
    "Buying",
    "Selling",
    "Relocation",
    "Downsizing",
    "Market Updates",
    "Local Life & Community"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={pageSEO.blog.title}
        description={pageSEO.blog.description}
        canonical="/blog"
      />
      <Navigation />
      <main className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="font-script text-3xl md:text-5xl text-secondary mb-6">Check these out…</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Real Estate Tips, Local Stories & Market Insights
            </h1>
            <p className="text-base md:text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              Browse articles about buying and selling in Snohomish County, downsizing, relocation, market updates, and everyday homeownership. I'll be adding new posts that mix education, real-life examples, and calm, clear guidance.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-2 space-y-12">
              {mainBlogPosts.map((post) => (
                <article key={post.id} className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] bg-warm-bg flex items-center justify-center">
                    <p className="text-muted-foreground">Snohomish County home exterior – blog article image</p>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <time dateTime={post.date}>{post.date}</time>
                      <span className="text-secondary">•</span>
                      <span className="text-secondary font-medium">{post.category}</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4 hover:text-secondary transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-foreground leading-relaxed mb-6">{post.excerpt}</p>
                    <Button asChild>
                      <Link to={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Search</h3>
                <div className="flex gap-2">
                  <Input type="search" placeholder="Search articles..." className="flex-1" />
                  <Button size="icon" variant="secondary">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link to={`/blog/${post.slug}`} className="text-sm text-foreground hover:text-secondary transition-colors leading-snug block">
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <span className="text-sm text-foreground flex items-center justify-between group">
                        <span>{category}</span>
                        <span className="text-muted-foreground">→</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* Search Insights Section */}
          <section className="max-w-7xl mx-auto mt-20 pt-16 border-t border-border">
            <div className="mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                Additional Articles & Resources
              </h2>
              <p className="text-foreground max-w-3xl">
                A curated collection of extra articles, guides, and resources related to Snohomish County real estate, gathered here for anyone who loves to dig a little deeper.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchInsightsPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-card rounded-lg border border-border p-5 hover:shadow-md hover:border-secondary/50 transition-all group"
                >
                  <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-secondary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
