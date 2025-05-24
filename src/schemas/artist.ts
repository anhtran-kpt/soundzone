import { artistSchema } from "./entities";
import { z } from "zod";

export const createArtistSchema = artistSchema.omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
});

export const updateArtistSchema = artistSchema.partial();

export type CreateArtistDto = z.infer<typeof createArtistSchema>;
export type UpdateArtistDto = z.infer<typeof updateArtistSchema>;
