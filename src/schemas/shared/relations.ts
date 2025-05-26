import { z } from "zod";

export const relationFields = {
  albumId: z.string().cuid(),
  artistId: z.string().cuid(),
  genreId: z.string().cuid(),
  playlistId: z.string().cuid(),
  trackId: z.string().cuid(),
  userId: z.string().cuid(),
};
