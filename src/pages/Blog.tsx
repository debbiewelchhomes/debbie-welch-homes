import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Should I Sell First or Buy First in Snohomish County?",
      date: "October 1, 2025",
      category: "Buying",
      excerpt: "One of the most common questions I hear from Snohomish County homeowners planning their next move—especially downsizers and growing families—is whether to sell their current home first or buy a new one before listing. Both paths have trade-offs, and the right answer depends on your financial position, local market conditions, and peace of mind.",
      slug: "sell-first-or-buy-first"
    },
    {
      id: 2,
      title: "A Calm Guide to Downsizing Your Home Without Losing Your Mind",
      date: "September 28, 2025",
      category: "Downsizing",
      excerpt: "Downsizing is one of those transitions that sounds simple on paper—sell the big house, move to something smaller—but in reality it brings up a lot of emotions, logistics, and decisions. As someone who's walked dozens of empty nesters, retirees, and life-simplifiers through this process in Snohomish County, I've seen what works and what makes it harder than it needs to be.",
      slug: "downsizing-guide"
    },
    {
      id: 3,
      title: "Relocating to Snohomish County: What I Tell My Military & Out-of-Area Buyers",
      date: "September 15, 2025",
      category: "Relocation",
      excerpt: "If you're relocating to Snohomish County from out of state—whether for a military PCS to Naval Station Everett, a job transfer, or just because the Pacific Northwest called your name—you're probably trying to figure out where to land without having spent much time here. That's completely normal, and it's exactly why I put together this guide.",
      slug: "relocating-guide"
    },
    {
      id: 4,
      title: "What Rising (or Falling) Rates Really Mean for Local Buyers",
      date: "September 5, 2025",
      category: "Market Updates",
      excerpt: "Interest rates get a lot of headlines, and for good reason—they directly affect what you can afford and what your monthly payment looks like. But here in Snohomish County, the impact of rate changes is a little more nuanced than the national news makes it sound. Let me break down what's actually happening in our local market and what it means for you.",
      slug: "interest-rates-impact"
    }
  ];

  const recentPosts = [
    "Should I Sell First or Buy First in Snohomish County?",
    "Relocating to Snohomish County: A Calm Step-by-Step Plan",
    "Downsizing in Lake Stevens, Everett & Marysville",
    "First-Time Buyer Tips for Snohomish County",
    "How Today's Interest Rates Are Affecting Local Buyers & Sellers",
    "The Real Timeline for Selling Your Home in Snohomish County"
  ];

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
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
                  {/* Featured Image Placeholder */}
                  <div className="aspect-[16/9] bg-warm-bg flex items-center justify-center">
                    <p className="text-muted-foreground">Snohomish County home exterior – blog article image</p>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 md:p-8">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <time dateTime={post.date}>{post.date}</time>
                      <span className="text-secondary">•</span>
                      <span className="text-secondary font-medium">{post.category}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4 hover:text-secondary transition-colors">
                      <a href={`#${post.slug}`}>{post.title}</a>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <Button asChild>
                      <a href={`#${post.slug}`}>Read More</a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Search Box */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Search</h3>
                <div className="flex gap-2">
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="flex-1"
                  />
                  <Button size="icon" variant="secondary">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm text-foreground hover:text-secondary transition-colors leading-snug block"
                      >
                        {post}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm text-foreground hover:text-secondary transition-colors flex items-center justify-between group"
                      >
                        <span>{category}</span>
                        <span className="text-muted-foreground group-hover:text-secondary transition-colors">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
