import { ArtistRole } from "@/app/generated/prisma";
import { z } from "zod";

export const songArtistSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  songId: z.string(),
  artistId: z.string(),
  role: z.nativeEnum(ArtistRole),
  order: z.number(),
});
