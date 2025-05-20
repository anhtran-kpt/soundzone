import { z } from "zod";
import { songArtistSchema } from "./songArtist.schema";

export const songSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Song title is required"),
  slug: z.string(),
  lyrics: z.string().optional(),
  duration: z.number().min(1, "Duration is required"),
  playCount: z.number(),
  likeCount: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  isExplicit: z.boolean(),
  audioUrl: z.string().min(1, "Audio URL is required"),
  trackNumber: z.number(),
  composer: z.string().optional(),
  lyricist: z.string().optional(),
  producer: z.string().optional(),
  albumId: z.string(),
  artists: z.array(songArtistSchema),
});

export const createSongSchema = songSchema;
export const updateSongSchema = songSchema.partial();

export type CreateSongDto = z.infer<typeof createSongSchema>;
export type UpdateSongDto = z.infer<typeof updateSongSchema>;
