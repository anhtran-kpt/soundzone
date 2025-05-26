import { z } from "zod";
import { createGenreSchema } from "../../forms";

export const createGenreRequestSchema = createGenreSchema.extend({});
export const updateGenreRequestSchema = createGenreSchema.extend({
  slug: z.string().cuid(),
});

export type CreateGenreRequest = z.infer<typeof createGenreRequestSchema>;
export type UpdateGenreRequest = z.infer<typeof updateGenreRequestSchema>;
