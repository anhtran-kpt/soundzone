import { z } from "zod";
import {
  baseFields,
  timestampFields,
  relationFields,
  releaseType,
} from "../shared";
import { artistBaseSchema } from "./artist";
import { trackWithRelationsSchema } from "./track";
import { albumGenreSchema, userLikedAlbumSchema } from "../junctions";

export const albumBaseSchema = z.object({
  id: baseFields.id,
  name: baseFields.name,
  description: baseFields.description,
  slug: baseFields.slug,
  releaseType: releaseType,
  releaseDate: z.coerce.date().optional(),
  playCount: baseFields.count,
  likeCount: baseFields.count,
  isExplicit: z.boolean(),
  coverUrl: baseFields.url,
  totalDuration: baseFields.duration,
  trackCount: baseFields.count,
  artistId: relationFields.artistId,
  ...timestampFields,
});

export const albumWithRelationsSchema = albumBaseSchema.extend({
  artist: z.lazy(() => artistBaseSchema),
  tracks: z.array(z.lazy(() => trackWithRelationsSchema)),
  genres: z.array(z.lazy(() => albumGenreSchema)),
  likedByUsers: z.array(z.lazy(() => userLikedAlbumSchema)),
});

export type Album = z.infer<typeof albumBaseSchema>;
export type AlbumWithRelations = z.infer<typeof albumWithRelationsSchema>;
