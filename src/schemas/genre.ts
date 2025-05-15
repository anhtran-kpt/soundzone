import { z } from "zod";

export const genreSchema = z.object({
  name: z.string().min(1, "Genre name is required"),
  description: z.string().optional(),
});

export const createGenreSchema = genreSchema;

export const updateGenreSchema = genreSchema.partial();

export type CreateGenreDto = z.infer<typeof createGenreSchema>;
export type UpdateGenreDto = z.infer<typeof updateGenreSchema>;
