import { z } from "zod";
import { baseFields, relationFields, timestampFields } from "../shared";
import { userBaseSchema } from "./user";
import {
  playlistTrackSchema,
  userLikedPlaylistSchema,
  playlistGenreSchema,
} from "../junctions";

export const playlistBaseSchema = z.object({
  id: baseFields.id,
  name: baseFields.name,
  slug: baseFields.slug,
  description: baseFields.description,
  isPublic: z.boolean(),
  totalDuration: baseFields.duration,
  trackCount: baseFields.count,
  likeCount: baseFields.count,
  isExplicit: z.boolean(),
  coverUrl: baseFields.url.optional(),
  userId: relationFields.userId,
  ...timestampFields,
});

export const playlistWithRelationsSchema = playlistBaseSchema.extend({
  user: z.lazy(() => userBaseSchema),
  likedByUsers: z.array(z.lazy(() => userLikedPlaylistSchema)),
  tracks: z.array(z.lazy(() => playlistTrackSchema)),
  genres: z.array(z.lazy(() => playlistGenreSchema)),
});

export type Playlist = z.infer<typeof playlistBaseSchema>;
export type PlaylistWithRelations = z.infer<typeof playlistWithRelationsSchema>;
