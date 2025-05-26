import { z } from "zod";
import { createAlbumSchema } from "../../forms";
import { albumBaseSchema, trackBaseSchema } from "@/schemas/entities";
import { artistRole, relationFields } from "@/schemas/shared";

export const createAlbumRequestSchema = albumBaseSchema
  .pick({
    name: true,
    description: true,
    releaseType: true,
    releaseDate: true,
    coverUrl: true,
    isExplicit: true,
    artistId: true,
  })
  .extend({
    genreIds: z.array(relationFields.genreId),
    tracks: z.array(
      trackBaseSchema
        .pick({
          name: true,
          lyrics: true,
          duration: true,
          trackNumber: true,
          audioUrl: true,
          isExplicit: true,
          composer: true,
          lyricist: true,
          producer: true,
        })
        .extend({
          artists: z.array(
            z.object({
              artistId: relationFields.artistId,
              role: artistRole,
              order: z.number().optional(),
            })
          ),
        })
    ),
  });

export const updateAlbumRequestSchema = createAlbumSchema.extend({});

export type CreateAlbumRequest = z.infer<typeof createAlbumRequestSchema>;
export type UpdateAlbumRequest = z.infer<typeof updateAlbumRequestSchema>;
