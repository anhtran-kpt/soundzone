import { ArtistRole, ReleaseType } from "@/app/generated/prisma";
import { z } from "zod";
import { albumGenreSchema } from "./albumGenre.schema";
import { songSchema } from "./song.schema";

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
          title: z.string().min(1, "Song title is required"),
          lyrics: z.string().optional(),
          duration: z.number().min(0, "Duration is required"),
          audioUrl: z.string().min(1, "Audio URL is required"),
          isExplicit: z.boolean(),
          composer: z.string().optional(),
          trackNumber: z.number().min(1, "Track number is required"),
          lyricist: z.string().optional(),
          producer: z.string().optional(),
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
