import { z } from "zod";
import { createArtistSchema } from "../../forms";

export const createArtistRequestSchema = createArtistSchema.extend({});
export const updateArtistRequestSchema = createArtistSchema.extend({
  slug: z.string().cuid(),
});

export type CreateArtistRequest = z.infer<typeof createArtistRequestSchema>;
export type UpdateArtistRequest = z.infer<typeof updateArtistRequestSchema>;
