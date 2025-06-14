import { baseFields } from "./common";
import { z } from "zod";

export const artistSchema = z.object({
  name: baseFields.name,
  description: baseFields.description,
  nationality: z.string().optional(),
  imageUrl: baseFields.url,
});

export const createArtistSchema = artistSchema.extend({
  genreIds: z.array(z.string()).min(1, "At least one genre is required"),
});

export const updateArtistSchema = createArtistSchema.partial();

export type CreateArtistInput = z.infer<typeof createArtistSchema>;
export type UpdateArtistInput = z.infer<typeof updateArtistSchema>;
