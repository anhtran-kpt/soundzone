"use client";

import { BlogPostForm } from "@/features/blog-post";
import { useBlogPost } from "@/features/blog-post/hooks";
import { useParams } from "next/navigation";

export default function EditBlogPostPage() {
  const params = useParams();
  const id = params.id as string;

  const { data: blogPost, isLoading, error } = useBlogPost(id);

  if (isLoading) return <div className="container py-10">Loading...</div>;
  if (error)
    return <div className="container py-10">Error loading blog post</div>;
  if (!blogPost)
    return <div className="container py-10">Blog post not found</div>;

  return (
    <div className="container py-10">
      <BlogPostForm mode="edit" blogPost={blogPost} />
    </div>
  );
}
