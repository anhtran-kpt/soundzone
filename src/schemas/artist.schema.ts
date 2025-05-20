import { z } from "zod";

export const artistSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Artist name is required"),
  slug: z.string(),
  bio: z.string().optional(),
  nationality: z.string().optional(),
  avatarUrl: z.string().optional(),
  bannerUrl: z.string().optional(),
  followerCount: z.number(),
  monthlyListeners: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createArtistSchema = artistSchema;

export const updateArtistSchema = artistSchema.partial();

export type CreateArtistDto = z.infer<typeof createArtistSchema>;
export type UpdateArtistDto = z.infer<typeof updateArtistSchema>;
