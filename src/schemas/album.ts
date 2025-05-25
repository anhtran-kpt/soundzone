import { z } from "zod";
import { albumSchema, trackSchema } from "./entities";
import { ArtistRole } from "@/app/generated/prisma";

export const albumFormSchema = albumSchema
  .omit({
    id: true,
    slug: true,
    createdAt: true,
    updatedAt: true,
    playCount: true,
    likeCount: true,
    totalDuration: true,
    trackCount: true,
    genres: true,
    tracks: true,
  })
  .extend({
    genreIds: z.array(z.string().uuid()),
    tracks: z.array(
      trackSchema
        .omit({
          id: true,
          slug: true,
          createdAt: true,
          updatedAt: true,
          albumId: true,
          artists: true,
          trackNumber: true,
          playCount: true,
          likeCount: true,
        })
        .extend({
          artists: z.array(
            z.object({
              artistId: z.string().uuid(),
              role: z.nativeEnum(ArtistRole),
            })
          ),
        })
    ),
  });

export const createAlbumSchema = albumSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    playCount: true,
    likeCount: true,
    genres: true,
    tracks: true,
  })
  .extend({
    genreIds: z.array(z.string().uuid()),
    tracks: z.array(
      trackSchema.omit({
        id: true,
        slug: true,
        createdAt: true,
        updatedAt: true,
      })
    ),
  });

export const updateAlbumSchema = createAlbumSchema.partial();

export type AlbumFormDto = z.infer<typeof albumFormSchema>;
export type CreateAlbumDto = z.infer<typeof createAlbumSchema>;
export type UpdateAlbumDto = z.infer<typeof updateAlbumSchema>;
