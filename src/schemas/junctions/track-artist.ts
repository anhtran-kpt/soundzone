import { z } from "zod";
import {
  relationFields,
  timestampFields,
  baseFields,
  artistRole,
} from "../shared";

export const trackArtistSchema = z.object({
  id: baseFields.id,
  trackId: relationFields.trackId,
  artistId: relationFields.artistId,
  role: artistRole,
  order: z.number().int().min(1),
  ...timestampFields,
});

export type TrackArtist = z.infer<typeof trackArtistSchema>;
