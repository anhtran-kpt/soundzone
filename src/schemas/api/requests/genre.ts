import { z } from "zod";
import { createGenreSchema } from "../../forms";

export const createGenreRequestSchema = createGenreSchema;
export const updateGenreRequestSchema = createGenreSchema.partial();

export type CreateGenreRequest = z.infer<typeof createGenreRequestSchema>;
export type UpdateGenreRequest = z.infer<typeof updateGenreRequestSchema>;
