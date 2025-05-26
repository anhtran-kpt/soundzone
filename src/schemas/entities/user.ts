import { z } from "zod";
import { baseFields, timestampFields, userRole } from "../shared";
import { playlistBaseSchema } from "./playlist";
import { playHistorySchema } from "./play-history";
import {
  userLikedTrackSchema,
  userLikedAlbumSchema,
  userLikedPlaylistSchema,
  userFollowedArtistSchema,
} from "../junctions";

export const userBaseSchema = z.object({
  id: baseFields.id,
  name: baseFields.name,
  slug: baseFields.slug,
  email: baseFields.email,
  password: baseFields.password,
  avatarUrl: baseFields.url,
  role: userRole,
  ...timestampFields,
});

export const userWithRelationsSchema = userBaseSchema.extend({
  playlists: z.array(z.lazy(() => playlistBaseSchema)),
  playHistory: z.array(z.lazy(() => playHistorySchema)),
  likedTracks: z.array(z.lazy(() => userLikedTrackSchema)),
  likedAlbums: z.array(z.lazy(() => userLikedAlbumSchema)),
  likedPlaylists: z.array(z.lazy(() => userLikedPlaylistSchema)),
  followedArtists: z.array(z.lazy(() => userFollowedArtistSchema)),
});

export type User = z.infer<typeof userBaseSchema>;
export type UserWithRelations = z.infer<typeof userWithRelationsSchema>;
