import { ArtistRole } from "@/app/generated/prisma";
import { baseFields } from "./shared";
import { z } from "zod";

export const albumSchema = z.object({
  title: baseFields.title,
  description: baseFields.description,
  releaseDate: z.coerce.date().optional(),
});

export const createAlbumSchema = albumSchema.extend({
  coverFile: z.instanceof(File, { message: "Please select a cover image" }),
  tracks: z.array(
    z.object({
      title: baseFields.title,
      lyrics: baseFields.description,
      duration: baseFields.duration.optional(),
      audioFile: z.instanceof(File, { message: "Please select an audio file" }),
      audioPublicId: baseFields.publicId.optional(),
      isExplicit: z.boolean(),
      genreIds: z.array(z.string()).min(1, "At least one genre is required"),
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

export const createAlbumInputSchema = albumSchema.extend({
  coverPublicId: baseFields.publicId,
  artistId: baseFields.id,
  tracks: z.array(
    z.object({
      title: baseFields.title,
      lyrics: baseFields.description,
      duration: baseFields.duration,
      audioPublicId: baseFields.publicId,
      isExplicit: z.boolean(),
      genreIds: z.array(z.string()).min(1, "At least one genre is required"),
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

export type CreateAlbumForm = z.infer<typeof createAlbumSchema>;
export type CreateAlbumInput = z.infer<typeof createAlbumInputSchema>;
