import { artistSchema } from "./entities";
import { z } from "zod";

export const createArtistSchema = artistSchema
  .omit({
    id: true,
    slug: true,
    createdAt: true,
    updatedAt: true,
    followerCount: true,
    monthlyListeners: true,
    genres: true,
  })
  .extend({
    genreIds: z.array(z.string()).min(1, "At least one genre is required"),
  });

export const updateArtistSchema = artistSchema.partial();

export type CreateArtistDto = z.infer<typeof createArtistSchema>;
export type UpdateArtistDto = z.infer<typeof updateArtistSchema>;
