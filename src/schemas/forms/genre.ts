import { z } from "zod";
import { genreBaseSchema } from "../entities";

export const createGenreSchema = genreBaseSchema.pick({
  name: true,
  description: true,
});

export const updateGenreSchema = createGenreSchema.partial();

export type CreateGenreInput = z.infer<typeof createGenreSchema>;
export type UpdateGenreInput = z.infer<typeof updateGenreSchema>;
