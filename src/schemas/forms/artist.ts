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
    genreIds: z
      .array(z.string().cuid())
      .min(1, "At least one genre is required"),
  });

export const updateArtistSchema = createArtistSchema.partial().extend({
  slug: baseFields.slug,
});

export type CreateArtistInput = z.infer<typeof createArtistSchema>;
export type UpdateArtistInput = z.infer<typeof updateArtistSchema>;
