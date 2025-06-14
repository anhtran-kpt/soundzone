import { baseFields } from "./common";
import { z } from "zod";

export const genreSchema = z.object({
  name: baseFields.name,
});

export const createGenreSchema = genreSchema;
export const updateGenreSchema = createGenreSchema.partial().extend({
  id: baseFields.id,
});

export type CreateGenreInput = z.infer<typeof createGenreSchema>;
export type UpdateGenreInput = z.infer<typeof updateGenreSchema>;
