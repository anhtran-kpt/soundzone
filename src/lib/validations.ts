import { z } from "zod";
import { ArtistRole, ReleaseType } from "@/app/generated/prisma";

const baseSchema = z.object({
  id: z.string().uuid("Invalid ID"),
  slug: z.string().min(1, "Slug is required"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  title: z.string().min(1, "Title is required").trim(),
  description: z.string().trim().optional(),
});

export const albumGenreSchema = z.object({
  id: baseSchema.shape.id,
  createdAt: baseSchema.shape.createdAt,
  albumId: baseSchema.shape.id,
  genreId: baseSchema.shape.id,
});

export const artistGenreSchema = z.object({
  id: baseSchema.shape.id,
  createdAt: baseSchema.shape.createdAt,
  artistId: baseSchema.shape.id,
  genreId: baseSchema.shape.id,
});

export const songArtistSchema = z.object({
  id: baseSchema.shape.id,
  createdAt: baseSchema.shape.createdAt,
  songId: baseSchema.shape.id,
  artistId: baseSchema.shape.id,
  role: z.nativeEnum(ArtistRole),
  order: z.number(),
});

export const songSchema = z.object({
  id: baseSchema.shape.id,
  title: baseSchema.shape.title,
  slug: baseSchema.shape.slug,
  lyrics: z.string().optional(),
  duration: z.number().min(1, "Duration is required"),
  playCount: z.number(),
  likeCount: z.number(),
  createdAt: baseSchema.shape.createdAt,
  updatedAt: baseSchema.shape.updatedAt,
  isExplicit: z.boolean(),
  audioUrl: z.string().min(1, "Audio URL is required"),
  trackNumber: z.number(),
  composer: z.string().optional(),
  lyricist: z.string().optional(),
  producer: z.string().optional(),
  albumId: baseSchema.shape.id,
  artists: z.array(songArtistSchema),
});

export const albumSchema = z.object({
  id: baseSchema.shape.id,
  title: baseSchema.shape.title,
  description: baseSchema.shape.description,
  slug: baseSchema.shape.slug,
  releaseType: z.nativeEnum(ReleaseType),
  releaseDate: z.coerce.date().optional(),
  playCount: z.number(),
  totalDuration: z.number(),
  songCount: z.number(),
  likeCount: z.number(),
  coverUrl: z.string().optional(),
  isExplicit: z.boolean(),
  createdAt: baseSchema.shape.createdAt,
  updatedAt: baseSchema.shape.updatedAt,
  artistId: baseSchema.shape.id,
  genres: z.array(albumGenreSchema),
  songs: z.array(songSchema),
});

export const albumFormSchema = albumSchema
  .omit({
    id: true,
    slug: true,
    playCount: true,
    totalDuration: true,
    songCount: true,
    likeCount: true,
    createdAt: true,
    updatedAt: true,
    artistId: true,
    genres: true,
    songs: true,
  })
  .extend({
    genreIds: z.array(z.string()),
    songs: z
      .array(
        z.object({
          title: baseSchema.shape.title,
          lyrics: z.string().trim().optional(),
          duration: z.number().min(0, "Duration is required"),
          audioUrl: z.string().min(1, "Audio URL is required"),
          isExplicit: z.boolean(),
          composer: z.string().trim().optional(),
          lyricist: z.string().trim().optional(),
          producer: z.string().trim().optional(),
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

export const createAlbumSchema = albumSchema
  .omit({
    id: true,
    playCount: true,
    totalDuration: true,
    slug: true,
    songCount: true,
    likeCount: true,
    createdAt: true,
    updatedAt: true,
    genres: true,
    songs: true,
  })
  .extend({
    genreIds: z.array(z.string()),
    songs: z
      .array(
        z.object({
          title: baseSchema.shape.title,
          lyrics: z.string().trim().optional(),
          duration: z.number().min(0, "Duration is required"),
          audioUrl: z.string().min(1, "Audio URL is required"),
          isExplicit: z.boolean(),
          composer: z.string().trim().optional(),
          trackNumber: z.number().min(1, "Track number is required"),
          lyricist: z.string().trim().optional(),
          producer: z.string().trim().optional(),
          artists: z.array(
            z.object({
              artistId: z.string().min(1, "Artist is required"),
              role: z.nativeEnum(ArtistRole),
              order: z.number().min(1, "Order is required"),
            })
          ),
        })
      )
      .min(1, "Album must have at least one song"),
  });

export type Album = z.infer<typeof albumSchema>;
export type AlbumFormDto = z.infer<typeof albumFormSchema>;
export type CreateAlbumDto = z.infer<typeof createAlbumSchema>;

export const updateAlbumSchema = createAlbumSchema.partial();
export type UpdateAlbumDto = z.infer<typeof updateAlbumSchema>;

export const artistSchema = z.object({
  id: baseSchema.shape.id,
  name: z.string().min(1, "Artist name is required"),
  slug: baseSchema.shape.slug,
  bio: z.string().optional(),
  nationality: z.string().optional(),
  avatarUrl: z.string().optional(),
  coverUrl: z.string().optional(),
  followerCount: z.number(),
  monthlyListeners: z.number(),
  createdAt: baseSchema.shape.createdAt,
  updatedAt: baseSchema.shape.updatedAt,
  genres: z.array(artistGenreSchema),
});

export const createArtistSchema = artistSchema
  .omit({
    id: true,
    slug: true,
    followerCount: true,
    monthlyListeners: true,
    createdAt: true,
    updatedAt: true,
    genres: true,
  })
  .extend({
    genreIds: z.array(z.string()),
  });

export const updateArtistSchema = artistSchema.partial();

export type Artist = z.infer<typeof artistSchema>;
export type CreateArtistDto = z.infer<typeof createArtistSchema>;
export type UpdateArtistDto = z.infer<typeof updateArtistSchema>;

export const authSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signInSchema = authSchema.pick({ email: true, password: true });
export const signUpSchema = authSchema;

export const updateAuthSchema = authSchema.partial();

export type SignInDto = z.infer<typeof signInSchema>;
export type SignUpDto = z.infer<typeof signUpSchema>;
export type UpdateAuthDto = z.infer<typeof updateAuthSchema>;

export const genreSchema = z.object({
  id: baseSchema.shape.id,
  name: z.string().min(1, "Genre name is required"),
  description: baseSchema.shape.description,
  slug: baseSchema.shape.slug,
  createdAt: baseSchema.shape.createdAt,
  updatedAt: baseSchema.shape.updatedAt,
  songCount: z.number(),
  artistCount: z.number(),
  albumCount: z.number(),
});

export const createGenreSchema = genreSchema.omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
  songCount: true,
  artistCount: true,
  albumCount: true,
});

export const updateGenreSchema = genreSchema.partial();

export type Genre = z.infer<typeof genreSchema>;
export type CreateGenreDto = z.infer<typeof createGenreSchema>;
export type UpdateGenreDto = z.infer<typeof updateGenreSchema>;

export const createSongSchema = songSchema;
export const updateSongSchema = songSchema.partial();

export type CreateSongDto = z.infer<typeof createSongSchema>;
export type UpdateSongDto = z.infer<typeof updateSongSchema>;

export const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const updateUserSchema = userSchema.partial();

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
