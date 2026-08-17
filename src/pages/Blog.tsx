import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { publicBlogPosts } from "@/data/blogPosts";
import { pageSEO } from "@/data/seoData";

const categories = ["Buying", "Downsizing", "Relocation", "Military & VA", "Market Updates"];

const matchesQuery = (
  post: { title: string; excerpt: string; category: string },
  normalizedQuery: string,
) =>
  !normalizedQuery ||
  [post.title, post.excerpt, post.category].some((value) =>
    value.toLowerCase().includes(normalizedQuery),
  );

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const [searchInput, setSearchInput] = useState(query);
  const normalizedQuery = query.toLowerCase();

  useEffect(() => {
    setSearchInput(query);
  }, [query]);

  const filteredMainPosts = useMemo(
    () => publicBlogPosts.filter((post) => matchesQuery(post, normalizedQuery)),
    [normalizedQuery],
  );
  const recentPosts = publicBlogPosts.slice(0, 6);
  const resultCount = filteredMainPosts.length;

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextQuery = searchInput.trim();
    setSearchParams(nextQuery ? { q: nextQuery } : {});
  };

  const clearSearch = () => {
    setSearchInput("");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen">
      <SEO title={pageSEO.blog.title} description={pageSEO.blog.description} canonical="/blog" />
      <Navigation />
      <main className="section bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="eyebrow mb-4">Check these out…</p>
            <h1 className="font-heading h-section font-bold text-primary mb-6">
              Real Estate Tips, Local Stories &amp; Market Insights
            </h1>
            <p className="text-base md:text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              Browse articles about buying and selling in Snohomish County, downsizing, relocation, market updates,
              and everyday homeownership. I'll be adding new posts that mix education, real-life examples, and calm,
              clear guidance.
            </p>
          </div>

          {query && (
            <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-border bg-warm-bg px-5 py-4">
              <p className="text-foreground">
                {resultCount} {resultCount === 1 ? "article" : "articles"} found for{" "}
                <strong>“{query}”</strong>
              </p>
              <Button type="button" variant="ghost" size="sm" onClick={clearSearch}>
                <X className="h-4 w-4 mr-2" />
                Clear Search
              </Button>
            </div>
          )}

          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {filteredMainPosts.map((post) => (
                <article key={post.id} className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] bg-warm-bg overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.imageAlt ?? ""}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center px-6 text-center">
                        <p className="text-muted-foreground">Snohomish County real estate guidance</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <time>{post.date}</time>
                      <span className="text-secondary">•</span>
                      <span className="text-secondary font-medium">{post.category}</span>
                    </div>
                    <h2 className="font-heading h-card text-primary mb-4 hover:text-secondary transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-foreground leading-relaxed mb-6">{post.excerpt}</p>
                    <Button asChild>
                      <Link to={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </article>
              ))}

              {resultCount === 0 && (
                <div className="rounded-lg border border-border bg-card p-8 text-center">
                  <h2 className="font-heading text-2xl text-primary mb-3">No articles found</h2>
                  <p className="text-foreground/75 mb-6">
                    Try a broader phrase such as buying, downsizing, military, relocation, or market.
                  </p>
                  <Button type="button" onClick={clearSearch}>View All Articles</Button>
                </div>
              )}
            </div>

            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="font-heading text-xl font-bold text-primary mb-4">Search</h2>
                <form className="flex gap-2" onSubmit={submitSearch}>
                  <Input
                    type="search"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    placeholder="Search articles..."
                    aria-label="Search blog articles"
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" variant="secondary">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>

              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="font-heading text-xl font-bold text-primary mb-4">Recent Posts</h2>
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
                <h2 className="font-heading text-xl font-bold text-primary mb-4">Categories</h2>
                <ul className="space-y-1">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link
                        to={`/blog?q=${encodeURIComponent(category)}`}
                        className="text-sm text-foreground flex items-center justify-between rounded px-2 py-2 hover:bg-warm-bg hover:text-secondary transition-colors"
                      >
                        <span>{category}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
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
