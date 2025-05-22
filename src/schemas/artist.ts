import { z } from "zod";
import { artistGenreSchema } from "./artist-genre";

export const artistSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Artist name is required"),
  slug: z.string(),
  bio: z.string().optional(),
  nationality: z.string().optional(),
  avatarUrl: z.string().optional(),
  coverUrl: z.string().optional(),
  followerCount: z.number(),
  monthlyListeners: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  genres: z.array(artistGenreSchema),
});

export const createArtistSchema = artistSchema
  .omit({
    id: true,
    slug: true,
    followerCount: true,
    monthlyListeners: true,
    createdAt: true,
    updatedAt: true,
    genres: true,
  })
  .extend({
    genreIds: z.array(z.string()),
  });

export const updateArtistSchema = artistSchema.partial();

export type Artist = z.infer<typeof artistSchema>;
export type CreateArtistDto = z.infer<typeof createArtistSchema>;
export type UpdateArtistDto = z.infer<typeof updateArtistSchema>;
