import { baseFields } from "./shared";
import { z } from "zod";

export const genreSchema = z.object({
  name: baseFields.name,
});

export const createGenreSchema = genreSchema;
export const updateGenreSchema = createGenreSchema.partial();

export type CreateGenreInput = z.infer<typeof createGenreSchema>;
export type UpdateGenreInput = z.infer<typeof updateGenreSchema>;
