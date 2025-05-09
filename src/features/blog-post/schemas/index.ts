import { z } from "zod";

// Base schema for blogPost
export const blogPostSchema = z.object({
  // Define your schema fields here
  name: z.string().min(1, "Name is required"),
  // Add more fields as needed
});

// Create schema (used for API validation)
export const createBlogPostSchema = blogPostSchema;

// Update schema (allows partial updates)
export const updateBlogPostSchema = blogPostSchema.partial();

// Define TypeScript types based on schemas
export type BlogPost = z.infer<typeof blogPostSchema>;
export type CreateBlogPostDto = z.infer<typeof createBlogPostSchema>;
export type UpdateBlogPostDto = z.infer<typeof updateBlogPostSchema>;
