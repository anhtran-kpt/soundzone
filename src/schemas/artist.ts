import { z } from "zod";

export const artistSchema = z.object({
  name: z.string().min(1, "Artist name is required"),
  bio: z.string().optional(),
  nationality: z.string().optional(),
  avatarUrl: z.string().optional(),
  bannerUrl: z.string().optional(),
});

export const createArtistSchema = artistSchema;

export const updateArtistSchema = artistSchema.partial();

export type CreateArtistDto = z.infer<typeof createArtistSchema>;
export type UpdateArtistDto = z.infer<typeof updateArtistSchema>;
