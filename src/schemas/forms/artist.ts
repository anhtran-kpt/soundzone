import { z } from "zod";
import { artistBaseSchema } from "../entities";
import { baseFields } from "../shared";

export const createArtistSchema = artistBaseSchema
  .pick({
    name: true,
    description: true,
    nationality: true,
    imageUrl: true,
    bannerUrl: true,
  })
  .extend({
    genreIds: z.array(baseFields.id).min(1, "At least one genre is required"),
  });

export const updateArtistSchema = createArtistSchema.partial();

export type CreateArtistInput = z.infer<typeof createArtistSchema>;
export type UpdateArtistInput = z.infer<typeof updateArtistSchema>;
