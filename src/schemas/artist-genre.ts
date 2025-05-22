import { z } from "zod";

export const artistGenreSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  artistId: z.string(),
  genreId: z.string(),
});
