import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";
import { absoluteUrl } from "@/config/site";
import { blogPublicationDate } from "@/lib/blogDate";

interface BlogPostTemplateProps {
  post: BlogPost;
}

const BlogPostTemplate = ({ post }: BlogPostTemplateProps) => {
  const publicationDate = blogPublicationDate(post.date);

  // Convert markdown-style bold to HTML
  const formatContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph, index) => {
        // Check if it's a heading (starts with **)
        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
          const text = paragraph.slice(2, -2);
          return (
            <h2 key={index} className="font-heading h-card text-primary mt-8 mb-4">
              {text}
            </h2>
          );
        }

        // Check for bullet points
        if (paragraph.startsWith("- ")) {
          const items = paragraph.split("\n").filter(line => line.startsWith("- "));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-foreground">
              {items.map((item, i) => (
                <li key={i}>{item.slice(2)}</li>
              ))}
            </ul>
          );
        }

        // Regular paragraph with bold text support
        const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={index} className="text-foreground leading-relaxed mb-6">
            {parts.map((part, i) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      });
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    ...(publicationDate ? { datePublished: publicationDate } : {}),
    author: {
      "@type": "Person",
      name: "Debbie Welch",
      url: absoluteUrl("/about")
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    articleSection: post.category,
    ...(post.image ? { image: absoluteUrl(post.image) } : {})
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={post.seoTitle ?? post.title}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        type="article"
        image={post.image}
        imageAlt={post.imageAlt}
        jsonLd={articleSchema}
      />
      <Navigation />
      <main className="bg-background pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              asChild
              className="mb-8 text-muted-foreground hover:text-foreground"
            >
              <Link to="/blog"><ArrowLeft className="h-4 w-4 mr-2" />Back to Blog</Link>
            </Button>

            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <time dateTime={publicationDate}>{post.date}</time>
                <span className="text-secondary">•</span>
                <span className="text-secondary font-medium">{post.category}</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                {post.title}
              </h1>
            </header>

            {post.image && (
              <figure className="mb-12 overflow-hidden rounded-lg border border-border bg-warm-bg">
                <img
                  src={post.image}
                  alt={post.imageAlt ?? ""}
                  className="aspect-[16/9] w-full object-cover"
                />
              </figure>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-border">
              <Button
                variant="outline"
                asChild
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <Link to="/blog"><ArrowLeft className="h-4 w-4 mr-2" />Back to All Articles</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostTemplate;

