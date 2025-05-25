import { z } from "zod";
import { baseFields, relationFields, timestampFields } from "./base";
import { ArtistRole, ReleaseType, UserRole } from "@/app/generated/prisma";

const createJunctionSchema = <T extends Record<string, z.ZodTypeAny>>(
  additionalFields: T
) => {
  return z.object({
    id: baseFields.id,
    createdAt: baseFields.createdAt,
    ...additionalFields,
  }) as z.ZodObject<{ id: z.ZodString; createdAt: z.ZodDate } & T>;
};

export const albumGenreSchema = createJunctionSchema({
  albumId: relationFields.albumId,
  genreId: relationFields.genreId,
});

export const artistGenreSchema = createJunctionSchema({
  artistId: relationFields.artistId,
  genreId: relationFields.genreId,
});

export const trackArtistSchema = createJunctionSchema({
  trackId: relationFields.trackId,
  artistId: relationFields.artistId,
  role: z.nativeEnum(ArtistRole),
  order: z.number(),
});

export const playlistTrackSchema = createJunctionSchema({
  playlistId: relationFields.playlistId,
  trackId: relationFields.trackId,
  order: z.number(),
});

export const playlistGenreSchema = createJunctionSchema({
  playlistId: relationFields.playlistId,
  genreId: relationFields.genreId,
});

export const userLikedPlaylistSchema = createJunctionSchema({
  userId: relationFields.userId,
  playlistId: relationFields.playlistId,
});

export const trackSchema = z.object({
  id: baseFields.id,
  title: baseFields.title,
  slug: baseFields.slug,
  lyrics: z.string().optional(),
  duration: z.number().min(1, "Duration is required"),
  playCount: z.number(),
  likeCount: z.number(),
  isExplicit: z.boolean(),
  audioUrl: z.string().min(1, "Audio URL is required"),
  trackNumber: z.number(),
  composer: z.string().optional(),
  lyricist: z.string().optional(),
  producer: z.string().optional(),
  albumId: relationFields.albumId,
  artists: z.array(trackArtistSchema),
  ...timestampFields,
});

export const albumSchema = z.object({
  id: baseFields.id,
  title: baseFields.title,
  description: baseFields.description,
  slug: baseFields.slug,
  releaseType: z.nativeEnum(ReleaseType),
  releaseDate: z.coerce.date().optional(),
  playCount: z.number(),
  totalDuration: z.number(),
  trackCount: z.number(),
  likeCount: z.number(),
  coverUrl: z.string().optional(),
  isExplicit: z.boolean(),
  artistId: relationFields.artistId,
  genres: z.array(albumGenreSchema),
  tracks: z.array(trackSchema),
  ...timestampFields,
});

export const artistSchema = z.object({
  id: baseFields.id,
  name: z.string().min(1, "Artist name is required"),
  slug: baseFields.slug,
  bio: z.string().optional(),
  nationality: z.string().optional(),
  avatarUrl: z.string().optional(),
  coverUrl: z.string().optional(),
  followerCount: z.number(),
  monthlyListeners: z.number(),
  genres: z.array(artistGenreSchema),
  ...timestampFields,
});

export const genreSchema = z.object({
  id: baseFields.id,
  name: z.string().min(1, "Genre name is required"),
  description: baseFields.description,
  slug: baseFields.slug,
  trackCount: z.number(),
  artistCount: z.number(),
  albumCount: z.number(),
  ...timestampFields,
});

export const playlistSchema = z.object({
  id: baseFields.id,
  title: baseFields.title,
  description: baseFields.description,
  slug: baseFields.slug,
  isPublic: z.boolean(),
  totalDuration: z.number(),
  trackCount: z.number(),
  likeCount: z.number(),
  coverUrl: z.string().optional(),
  userId: relationFields.userId,
  tracks: z.array(playlistTrackSchema),
  genres: z.array(playlistGenreSchema),
  likedByUsers: z.array(userLikedPlaylistSchema),
  ...timestampFields,
});

export const userSchema = z.object({
  id: baseFields.id,
  name: z.string().min(1, "Name is required"),
  slug: baseFields.slug,
  email: baseFields.email,
  password: baseFields.password,
  avatarUrl: z.string().optional(),
  role: z.nativeEnum(UserRole),
  ...timestampFields,
});

export type AlbumGenre = z.infer<typeof albumGenreSchema>;
export type ArtistGenre = z.infer<typeof artistGenreSchema>;
export type TrackArtist = z.infer<typeof trackArtistSchema>;
export type PlaylistTrack = z.infer<typeof playlistTrackSchema>;
export type PlaylistGenre = z.infer<typeof playlistGenreSchema>;
export type UserLikedPlaylist = z.infer<typeof userLikedPlaylistSchema>;
export type Playlist = z.infer<typeof playlistSchema>;
export type Album = z.infer<typeof albumSchema>;
export type Artist = z.infer<typeof artistSchema>;
export type Track = z.infer<typeof trackSchema>;
export type Genre = z.infer<typeof genreSchema>;
export type User = z.infer<typeof userSchema>;
