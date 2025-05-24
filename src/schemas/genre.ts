import { genreSchema } from "./entities";
import { z } from "zod";

export const createGenreSchema = genreSchema.omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
});

export const updateGenreSchema = genreSchema.partial();

export type CreateGenreDto = z.infer<typeof createGenreSchema>;
export type UpdateGenreDto = z.infer<typeof updateGenreSchema>;
