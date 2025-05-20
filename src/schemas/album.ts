import { ArtistRole, ReleaseType } from "@/app/generated/prisma";
import { z } from "zod";

// Song Artist Schema
export const songArtistSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  songId: z.string(),
  artistId: z.string(),
  role: z.nativeEnum(ArtistRole),
  order: z.number(),
});

// Song Schema
export const songSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Song title is required"),
  slug: z.string(),
  lyrics: z.string().optional(),
  duration: z.number().min(1, "Duration is required"),
  playCount: z.number(),
  likeCount: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  isExplicit: z.boolean(),
  audioUrl: z.string().min(1, "Audio URL is required"),
  trackNumber: z.number(),
  composer: z.string().optional(),
  lyricist: z.string().optional(),
  producer: z.string().optional(),
  albumId: z.string(),
  artists: z.array(songArtistSchema),
});

// Album Genre Schema
export const albumGenreSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  albumId: z.string(),
  genreId: z.string(),
});

// Album Schema
export const albumSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Album title is required"),
  description: z.string().optional(),
  slug: z.string(),
  releaseType: z.nativeEnum(ReleaseType),
  releaseDate: z.coerce.date().optional(),
  playCount: z.number(),
  totalDuration: z.number(),
  songCount: z.number(),
  likeCount: z.number(),
  coverUrl: z.string().optional(),
  isExplicit: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  artistId: z.string(),
  genres: z.array(albumGenreSchema),
  songs: z.array(songSchema),
});

// Artist Genre Schema
export const artistGenreSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  artistId: z.string(),
  genreId: z.string(),
});

// Genre Schema
export const genreSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Genre name is required"),
  description: z.string().optional(),
  slug: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  songCount: z.number(),
  artistCount: z.number(),
  albumCount: z.number(),
});

// Artist Schema
export const artistSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Artist name is required"),
  slug: z.string(),
  bio: z.string().optional(),
  nationality: z.string().optional(),
  avatarUrl: z.string().optional(),
  bannerUrl: z.string().optional(),
  followerCount: z.number(),
  monthlyListeners: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Schema for album form submission
export const albumFormSchema = z.object({
  title: z.string().min(1, "Album title is required"),
  description: z.string().optional(),
  releaseType: z.nativeEnum(ReleaseType),
  releaseDate: z.coerce.date().optional(),
  coverUrl: z.string().optional(),
  isExplicit: z.boolean(),
  artistId: z.string().optional(), // Optional in form, required when submitting
  genreIds: z.array(z.string()),
  songs: z
    .array(
      z.object({
        id: z.string().optional(),
        title: z.string().min(1, "Song title is required"),
        lyrics: z.string().optional(),
        duration: z.number().min(0, "Duration is required"),
        audioUrl: z.string().min(1, "Audio URL is required"),
        isExplicit: z.boolean(),
        composer: z.string().optional(),
        lyricist: z.string().optional(),
        producer: z.string().optional(),
        trackNumber: z.number().optional(),
        artists: z
          .array(
            z.object({
              id: z.string().min(1, "Artist is required"),
              role: z.nativeEnum(ArtistRole),
            })
          )
          .min(1, "At least one artist is required"),
      })
    )
    .min(1, "Album must have at least one song"),
});

// Create schemas - for creating new records
// export const createAlbumSchema = albumSchema
//   .omit({
//     id: true,
//     createdAt: true,
//     updatedAt: true,
//     playCount: true,
//     likeCount: true,
//     totalDuration: true,
//     songCount: true,
//     slug: true,
//     songs: true,
//   })
//   .extend({
//     genreIds: z.array(z.string()),
//   })
//   .extend({
//     songs: z
//       .array(
//         songSchema
//           .omit({
//             id: true,
//             createdAt: true,
//             updatedAt: true,
//             playCount: true,
//             trackNumber: true,
//             likeCount: true,
//             slug: true,
//             albumId: true,
//             artists: true,
//           })
//           .extend({
//             artists: z.array(
//               z.object({
//                 artistId: z.string().min(1, "Artist is required"),
//                 role: z.nativeEnum(ArtistRole),
//               })
//             ),
//           })
//       )
//       .min(1, "Album must have at least one song"),
//   });

export const createAlbumSchema = z.object({
  title: z.string().min(1, "Album title is required"),
  description: z.string().optional(),
  releaseType: z.nativeEnum(ReleaseType),
  releaseDate: z.coerce.date().optional(),
  coverUrl: z.string().optional(),
  isExplicit: z.boolean(),
  genreIds: z.array(z.string()),
  songs: z
    .array(
      z.object({
        title: z.string().min(1, "Song title is required"),
        lyrics: z.string().optional(),
        duration: z.number().min(0, "Duration is required"),
        audioUrl: z.string().min(1, "Audio URL is required"),
        isExplicit: z.boolean(),
        composer: z.string().optional(),
        lyricist: z.string().optional(),
        producer: z.string().optional(),
        artists: z.array(
          z.object({
            artistId: z.string().min(1, "Artist is required"),
            role: z.nativeEnum(ArtistRole),
          })
        ),
      })
    )
    .min(1, "Album must have at least one song"),
});

export const createSongSchema = songSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  playCount: true,
  likeCount: true,
  slug: true,
});

export const createArtistSchema = artistSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  followerCount: true,
  monthlyListeners: true,
  slug: true,
});

export const createGenreSchema = genreSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  songCount: true,
  artistCount: true,
  albumCount: true,
  slug: true,
});

// Update schemas - for updating existing records
export const updateAlbumSchema = createAlbumSchema.partial();
export const updateSongSchema = createSongSchema.partial();
export const updateArtistSchema = createArtistSchema.partial();
export const updateGenreSchema = createGenreSchema.partial();

// Inferred types
export type AlbumFormData = z.infer<typeof albumFormSchema>;
export type CreateAlbumDto = z.infer<typeof createAlbumSchema>;
export type UpdateAlbumDto = z.infer<typeof updateAlbumSchema>;
export type CreateSongDto = z.infer<typeof createSongSchema>;
export type UpdateSongDto = z.infer<typeof updateSongSchema>;
export type CreateArtistDto = z.infer<typeof createArtistSchema>;
export type UpdateArtistDto = z.infer<typeof updateArtistSchema>;
export type CreateGenreDto = z.infer<typeof createGenreSchema>;
export type UpdateGenreDto = z.infer<typeof updateGenreSchema>;
export type Album = z.infer<typeof albumSchema>;
