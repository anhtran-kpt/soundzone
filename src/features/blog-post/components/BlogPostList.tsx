"use client";

import { useBlogPosts, useDeleteBlogPost } from "../hooks";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BlogPostList() {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Use the query hook to fetch blogPosts
  const { data: blogPosts, isLoading, error } = useBlogPosts();

  // Use the mutation hook for deleting
  const deleteMutation = useDeleteBlogPost();

  const handleDelete = (id: string) => {
    setDeletingId(id);
    deleteMutation.mutate(id, {
      onSettled: () => {
        setDeletingId(null);
      },
    });
  };

  if (isLoading) return <div>Loading blogPosts...</div>;
  if (error)
    return <div>Error loading blogPosts: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">BlogPosts</h2>
        <Link href="/blogPosts/new">
          <Button>Add BlogPost</Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts?.map((blogPost) => (
          <div
            key={blogPost.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium">{blogPost.name}</h3>
              {/* Add more blogPost fields here */}
            </div>
            <div className="flex gap-2">
              <Link href={`/blogPosts/${blogPost.id}/edit`}>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(blogPost.id)}
                disabled={deletingId === blogPost.id}
              >
                {deletingId === blogPost.id ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        ))}

        {(!blogPosts || blogPosts.length === 0) && (
          <div className="col-span-full text-center p-8 border rounded-lg">
            No blogPosts found.
          </div>
        )}
      </div>
    </div>
  );
}
