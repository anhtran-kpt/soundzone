import { z } from "zod";
import { baseFields } from "../shared";
import { ArtistRole, CreditRole } from "@/app/generated/prisma";

const basePlaylistSchema = z.object({
  title: baseFields.title,
  lyrics: baseFields.description,
  audioPublicId: baseFields.publicId,
  duration: baseFields.duration,
  isExplicit: z.boolean(),
});

export const createPlaylistSchema = basePlaylistSchema.extend({
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
});

export type CreatePlaylistInput = z.infer<typeof createPlaylistSchema>;
