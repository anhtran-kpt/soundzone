import { z } from "zod";
import { createAlbumSchema } from "../../forms";

export const createAlbumRequestSchema = createAlbumSchema.extend({
  artistId: z.string().cuid(),
});

export const updateAlbumRequestSchema = createAlbumSchema.extend({
  slug: z.string().cuid(),
});

export type CreateAlbumRequest = z.infer<typeof createAlbumRequestSchema>;
export type UpdateAlbumRequest = z.infer<typeof updateAlbumRequestSchema>;
