import { AlbumType } from "@/app/generated/prisma";
import { z } from "zod";

export const albumSchema = z.object({
  title: z.string().min(1, "Album title is required"),
  description: z.string().optional(),
  type: z.nativeEnum(AlbumType),
  releaseDate: z.coerce.date().optional(),
  coverImage: z.string().url("Cover image must be a valid URL").optional(),
  artistId: z.string().cuid("Artist is required"),
  isExplicit: z.boolean().optional(),
  // songs: z.array(z.string().cuid("Song is required")).optional(),
});

export const createAlbumSchema = albumSchema;

export const updateAlbumSchema = albumSchema.partial();

export type CreateAlbumDto = z.infer<typeof createAlbumSchema>;
export type UpdateAlbumDto = z.infer<typeof updateAlbumSchema>;
