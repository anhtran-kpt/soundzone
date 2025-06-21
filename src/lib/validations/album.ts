import { CreditRole } from "@/app/generated/prisma";
import { baseFields } from "./shared";
import { z } from "zod";

export const albumSchema = z.object({
  title: baseFields.title,
  description: baseFields.description,
  releaseDate: z.coerce.date(),
  coverPublicId: baseFields.publicId,
  bannerPublicId: baseFields.publicId,
});

export const createAlbumSchema = albumSchema.extend({
  tracks: z.array(
    z.object({
      title: baseFields.title,
      lyrics: baseFields.description,
      audioMeta: z.object({
        duration: baseFields.duration,
        publicId: baseFields.publicId,
      }),
      isExplicit: z.boolean(),
      genreIds: z.array(z.string()).min(1, "At least one genre is required"),
      artists: z.array(
        z.object({
          id: baseFields.id.optional(),
          name: z.string().optional(),
          roles: z
            .array(z.nativeEnum(CreditRole))
            .min(1, "At least one role is required"),
        })
      ),
    })
  ),
});

export const createAlbumInputSchema = albumSchema.extend({
  artistId: baseFields.id,
  tracks: z.array(
    z.object({
      title: baseFields.title,
      lyrics: baseFields.description,
      duration: baseFields.duration,
      audioPublicId: baseFields.publicId,
      isExplicit: z.boolean(),
      genreIds: z.array(z.string()).min(1, "At least one genre is required"),
      artists: z.array(
        z.object({
          id: baseFields.id.optional(),
          name: z.string().optional(),
          roles: z
            .array(z.nativeEnum(CreditRole))
            .min(1, "At least one role is required"),
        })
      ),
    })
  ),
});

export type CreateAlbumForm = z.infer<typeof createAlbumSchema>;
export type CreateAlbumInput = z.infer<typeof createAlbumInputSchema>;
