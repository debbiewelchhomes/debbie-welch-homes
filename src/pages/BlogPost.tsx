import { useParams, Navigate } from "react-router-dom";
import BlogPostTemplate from "@/components/BlogPostTemplate";
import { getPostBySlug } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogPostTemplate post={post} />;
};

export default BlogPost;
