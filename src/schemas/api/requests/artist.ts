import { z } from "zod";
import { createArtistSchema } from "../../forms";

export const createArtistRequestSchema = createArtistSchema;
export const updateArtistRequestSchema = createArtistSchema.partial();

export type CreateArtistRequest = z.infer<typeof createArtistRequestSchema>;
export type UpdateArtistRequest = z.infer<typeof updateArtistRequestSchema>;
