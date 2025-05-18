import { ReleaseType } from "@/app/generated/prisma";
import { z } from "zod";
import { songSchema } from "./song";

export const albumSchema = z.object({
  title: z.string().min(1, "Album title is required"),
  description: z.string().optional(),
  releaseType: z.nativeEnum(ReleaseType),
  releaseDate: z.coerce.date().optional(),
  coverUrl: z.string().optional(),
  artistId: z.string().cuid("Artist is required"),
  genreIds: z.array(z.string().cuid("Genre is required")),
  isExplicit: z.boolean().optional(),
  songs: z.array(songSchema),
});

export const createAlbumSchema = albumSchema;

export const updateAlbumSchema = albumSchema.partial();

export type CreateAlbumDto = z.infer<typeof createAlbumSchema>;
export type UpdateAlbumDto = z.infer<typeof updateAlbumSchema>;
