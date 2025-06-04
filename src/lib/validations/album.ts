import { ArtistRole, ReleaseType } from "@/app/generated/prisma";
import { baseFields } from "./common";
import { z } from "zod";

export const albumSchema = z.object({
  name: baseFields.name,
  description: baseFields.description,
  releaseType: z.nativeEnum(ReleaseType),
  releaseDate: z.coerce.date().optional(),
  isExplicit: z.boolean(),
  coverUrl: baseFields.url,
});

export const createAlbumSchema = albumSchema.extend({
  genreIds: z.array(z.string()).min(1, "At least one genre is required"),
  tracks: z.array(
    z.object({
      name: baseFields.name,
      lyrics: baseFields.description,
      duration: baseFields.duration,
      audioUrl: baseFields.url,
      isExplicit: z.boolean(),
      composer: z.string().optional(),
      lyricist: z.string().optional(),
      producer: z.string().optional(),
      artists: z.array(
        z.object({
          artistId: baseFields.id,
          role: z.nativeEnum(ArtistRole),
        })
      ),
    })
  ),
});

export const createAlbumRequestSchema = albumSchema.extend({
  genreIds: z.array(z.string()).min(1, "At least one genre is required"),
  artistId: baseFields.id,
  tracks: z.array(
    z.object({
      name: baseFields.name,
      lyrics: baseFields.description,
      duration: baseFields.duration,
      audioUrl: baseFields.url,
      trackNumber: z.number(),
      isExplicit: z.boolean(),
      composer: z.string().optional(),
      lyricist: z.string().optional(),
      producer: z.string().optional(),
      artists: z.array(
        z.object({
          artistId: baseFields.id,
          role: z.nativeEnum(ArtistRole),
          order: z.number(),
        })
      ),
    })
  ),
});

export const updateAlbumSchema = createAlbumSchema.partial();

export type CreateAlbumInput = z.infer<typeof createAlbumSchema>;
export type UpdateAlbumInput = z.infer<typeof updateAlbumSchema>;

export type CreateAlbumRequest = z.infer<typeof createAlbumRequestSchema>;
