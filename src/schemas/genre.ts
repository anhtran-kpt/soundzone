import { baseFields } from "./shared";
import { z } from "zod";

export const genreSchema = z.object({
  name: baseFields.name,
});

export const createGenreSchema = genreSchema;

export type CreateGenre = z.infer<typeof createGenreSchema>;
