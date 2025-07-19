import { ReleaseType } from "@/app/generated/prisma";
import { baseFields } from "@/entities/shared/shared-schemas";
import { z } from "zod";
import { createTrackSchema } from "@/entities/track/track-schemas";

export const albumSchema = z.object({
  title: baseFields.title,
  releaseDate: z.coerce.date(),
  releaseType: z.nativeEnum(ReleaseType),
  coverPublicId: baseFields.publicId,
});

export const createAlbumSchema = albumSchema
  .extend({
    tracks: z.array(createTrackSchema),
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
    tracks: z.array(createTrackSchema),
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
