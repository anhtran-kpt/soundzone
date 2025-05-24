import { songSchema } from "./entities";
import { z } from "zod";

export const createSongSchema = songSchema.omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
});

export const updateSongSchema = songSchema.partial();
export type CreateSongDto = z.infer<typeof createSongSchema>;
export type UpdateSongDto = z.infer<typeof updateSongSchema>;
