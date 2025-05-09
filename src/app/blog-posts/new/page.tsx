import { BlogPostForm } from "@/features/blog-post";

export default function NewBlogPostPage() {
  return (
    <div className="container py-10">
      <BlogPostForm mode="create" />
    </div>
  );
}
