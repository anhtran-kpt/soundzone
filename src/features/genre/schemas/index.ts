import { z } from "zod";

// Base schema for genre
export const genreSchema = z.object({
  name: z.string().min(1, "Genre name is required"),
  description: z.string().optional(),
});

// Create schema (used for API validation)
export const createGenreSchema = genreSchema;

// Update schema (allows partial updates)
export const updateGenreSchema = genreSchema.partial();

// Define TypeScript types based on schemas
export type CreateGenreDto = z.infer<typeof createGenreSchema>;
export type UpdateGenreDto = z.infer<typeof updateGenreSchema>;
