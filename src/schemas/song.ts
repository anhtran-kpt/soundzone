import { z } from "zod";

export const songSchema = z.object({
  title: z.string().min(1, "Song title is required"),
  lyrics: z.string().optional(),
  audioUrl: z.string().url("Audio URL must be a valid URL").optional(),
  isExplicit: z.boolean().optional(),
  albumId: z.string().cuid("Album is required"),
  composers: z.array(z.string()).optional(),
  producers: z.array(z.string()).optional(),
  lyricists: z.array(z.string()).optional(),
});

export const createSongSchema = songSchema;

export const updateSongSchema = songSchema.partial();

export type CreateSongDto = z.infer<typeof createSongSchema>;
export type UpdateSongDto = z.infer<typeof updateSongSchema>;
