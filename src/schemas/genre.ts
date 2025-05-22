import { z } from "zod";

export const genreSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Genre name is required"),
  description: z.string().optional(),
  slug: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  songCount: z.number(),
  artistCount: z.number(),
  albumCount: z.number(),
});

export const createGenreSchema = genreSchema.omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
  songCount: true,
  artistCount: true,
  albumCount: true,
});

export const updateGenreSchema = genreSchema.partial();

export type Genre = z.infer<typeof genreSchema>;
export type CreateGenreDto = z.infer<typeof createGenreSchema>;
export type UpdateGenreDto = z.infer<typeof updateGenreSchema>;
