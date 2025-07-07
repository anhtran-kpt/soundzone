import { ArtistRole, CreditRole, ReleaseType } from "@/app/generated/prisma";
import { baseFields } from "@/schemas/shared";
import { z } from "zod";

export const albumSchema = z.object({
  title: baseFields.title,
  releaseDate: z.coerce.date(),
  releaseType: z.nativeEnum(ReleaseType),
  coverPublicId: baseFields.publicId,
});

export const createAlbumSchema = albumSchema
  .extend({
    tracks: z.array(
      z.object({
        title: baseFields.title,
        lyrics: baseFields.description,
        audioPublicId: baseFields.publicId,
        duration: baseFields.duration,
        isExplicit: z.boolean(),
        genreIds: z.array(z.string()).min(1, "At least one genre is required"),
        performers: z.array(
          z.object({
            artistId: z.string(),
            role: z.nativeEnum(ArtistRole),
          })
        ),
        credits: z.array(
          z.object({
            name: z.string(),
            roles: z
              .array(z.nativeEnum(CreditRole))
              .min(1, "At least one role is required"),
          })
        ),
      })
    ),
  })
  .superRefine((data, ctx) => {
    const trackCount = data.tracks.length;
    const type = data.releaseType;

    if (type === "SINGLE" && trackCount !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["tracks"],
        message: "A single must have exactly one track.",
      });
    }

    if ((type === "ALBUM" || type === "EP") && trackCount < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["tracks"],
        message: "Albums or EPs must have at least two tracks.",
      });
    }
  });

export const createAlbumInputSchema = albumSchema
  .extend({
    artistId: baseFields.id,
    tracks: z.array(
      z.object({
        title: baseFields.title,
        lyrics: baseFields.description,
        duration: baseFields.duration,
        audioPublicId: baseFields.publicId,
        isExplicit: z.boolean(),
        genreIds: z.array(z.string()).min(1, "At least one genre is required"),
        performers: z.array(
          z.object({
            artistId: z.string(),
            role: z.nativeEnum(ArtistRole),
          })
        ),
        credits: z.array(
          z.object({
            name: z.string(),
            roles: z
              .array(z.nativeEnum(CreditRole))
              .min(1, "At least one role is required"),
          })
        ),
      })
    ),
  })
  .superRefine((data, ctx) => {
    const trackCount = data.tracks.length;
    const type = data.releaseType;

    if (type === "SINGLE" && trackCount !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["tracks"],
        message: "A single must have exactly one track.",
      });
    }

    if ((type === "ALBUM" || type === "EP") && trackCount < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["tracks"],
        message: "Albums or EPs must have at least two tracks.",
      });
    }
  });

export type CreateAlbumForm = z.infer<typeof createAlbumSchema>;
export type CreateAlbumInput = z.infer<typeof createAlbumInputSchema>;
