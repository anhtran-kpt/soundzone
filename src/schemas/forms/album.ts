import { z } from "zod";
import { albumBaseSchema, trackWithRelationsSchema } from "../entities";
import { artistRole, baseFields } from "../shared";

export const createAlbumSchema = albumBaseSchema
  .pick({
    name: true,
    description: true,
    releaseType: true,
    releaseDate: true,
    isExplicit: true,
    coverUrl: true,
  })
  .extend({
    genreIds: z
      .array(z.string().cuid())
      .min(1, "At least one genre is required"),
    tracks: z.array(
      trackWithRelationsSchema
        .pick({
          name: true,
          lyrics: true,
          duration: true,
          audioUrl: true,
          isExplicit: true,
          composer: true,
          lyricist: true,
          producer: true,
        })
        .extend({
          artists: z.array(
            z.object({
              artistId: z.string().cuid(),
              role: artistRole,
            })
          ),
        })
    ),
  });

export const updateAlbumSchema = createAlbumSchema.partial().extend({
  slug: baseFields.slug,
});

export type CreateAlbumInput = z.infer<typeof createAlbumSchema>;
export type UpdateAlbumInput = z.infer<typeof updateAlbumSchema>;
