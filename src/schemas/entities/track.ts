import { z } from "zod";
import { baseFields, timestampFields, relationFields } from "../shared";
import { albumBaseSchema } from "./album";
import {
  playlistTrackSchema,
  trackArtistSchema,
  userLikedTrackSchema,
} from "../junctions";
import { trackGenreSchema } from "../junctions";
import { playHistorySchema } from "./play-history";

export const trackBaseSchema = z.object({
  id: baseFields.id,
  name: baseFields.name,
  slug: baseFields.slug,
  lyrics: z.string().optional(),
  duration: baseFields.duration,
  playCount: baseFields.count,
  likeCount: baseFields.count,
  isExplicit: z.boolean(),
  audioUrl: baseFields.url,
  trackNumber: z.number().int().min(1),
  composer: z.string().optional(),
  lyricist: z.string().optional(),
  producer: z.string().optional(),
  albumId: relationFields.albumId,
  ...timestampFields,
});

export const trackWithRelationsSchema = trackBaseSchema.extend({
  album: z.lazy(() => albumBaseSchema),
  artists: z.array(z.lazy(() => trackArtistSchema)),
  genres: z.array(z.lazy(() => trackGenreSchema)),
  likedByUsers: z.array(z.lazy(() => userLikedTrackSchema)),
  playlists: z.array(z.lazy(() => playlistTrackSchema)),
  playHistory: z.array(z.lazy(() => playHistorySchema)),
});

export type Track = z.infer<typeof trackBaseSchema>;
export type TrackWithRelations = z.infer<typeof trackWithRelationsSchema>;
