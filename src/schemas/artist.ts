import { z } from "zod";

export const artistSchema = z.object({
  name: z.string().min(1, "Artist name is required"),
  bio: z.string().optional(),
  dateOfBirth: z.string().optional(),
  nationality: z.string().optional(),
  coverImage: z.string().url("Cover image must be a valid URL").optional(),
});

export const createArtistSchema = artistSchema;

export const updateArtistSchema = artistSchema.partial();

export type CreateArtistDto = z.infer<typeof createArtistSchema>;
export type UpdateArtistDto = z.infer<typeof updateArtistSchema>;
