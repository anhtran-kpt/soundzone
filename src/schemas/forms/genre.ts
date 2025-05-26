import { z } from "zod";
import { baseFields } from "../shared";
import { genreBaseSchema } from "../entities";

export const createGenreSchema = genreBaseSchema.pick({
  name: true,
  description: true,
});

export const updateGenreSchema = createGenreSchema.partial().extend({
  slug: baseFields.slug,
});

export type CreateGenreInput = z.infer<typeof createGenreSchema>;
export type UpdateGenreInput = z.infer<typeof updateGenreSchema>;
