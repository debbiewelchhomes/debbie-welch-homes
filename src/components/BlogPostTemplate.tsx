import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogPostTemplateProps {
  post: BlogPost;
}

const BlogPostTemplate = ({ post }: BlogPostTemplateProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set document title and meta description
    document.title = `${post.title} | Debbie Welch Homes`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", post.metaDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = post.metaDescription;
      document.head.appendChild(meta);
    }
  }, [post]);

  // Convert markdown-style bold to HTML
  const formatContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph, index) => {
        // Check if it's a heading (starts with **)
        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
          const text = paragraph.slice(2, -2);
          return (
            <h2 key={index} className="font-heading text-xl md:text-2xl font-bold text-primary mt-8 mb-4">
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

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="mb-8 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>

            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <time dateTime={post.date}>{post.date}</time>
                <span className="text-secondary">•</span>
                <span className="text-secondary font-medium">{post.category}</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                {post.title}
              </h1>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={() => navigate("/blog")}
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Articles
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
