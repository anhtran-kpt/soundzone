"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CreateBlogPostDto, createBlogPostSchema, BlogPost } from "../schemas";
import { useCreateBlogPost, useUpdateBlogPost } from "../hooks";

type BlogPostFormProps = {
  blogPost?: BlogPost;
  mode: "create" | "edit";
};

export function BlogPostForm({ blogPost, mode = "create" }: BlogPostFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createMutation = useCreateBlogPost();
  const updateMutation = useUpdateBlogPost(blogPost?.id || "");

  const form = useForm<CreateBlogPostDto>({
    resolver: zodResolver(createBlogPostSchema),
    defaultValues: {
      name: blogPost?.name || "",
      // Add more fields as needed
    },
  });

  const onSubmit = async (values: CreateBlogPostDto) => {
    try {
      setIsSubmitting(true);

      if (mode === "create") {
        await createMutation.mutateAsync(values);
      } else {
        await updateMutation.mutateAsync(values);
      }

      // Navigate back to list on success
      router.push("/blogPosts");
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {mode === "create" ? "Create New BlogPost" : "Edit BlogPost"}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="BlogPost name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Add more form fields here */}

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? mode === "create"
                  ? "Creating..."
                  : "Updating..."
                : mode === "create"
                ? "Create"
                : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
