import { z } from "zod";

export const albumGenreSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  albumId: z.string(),
  genreId: z.string(),
});
