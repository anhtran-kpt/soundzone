import { z } from "zod";
import { baseFields, timestampFields } from "../shared";
import { albumBaseSchema } from "./album";
import {
  artistGenreSchema,
  trackArtistSchema,
  userFollowedArtistSchema,
} from "../junctions";

export const artistBaseSchema = z.object({
  id: baseFields.id,
  name: baseFields.name,
  slug: baseFields.slug,
  description: baseFields.description,
  nationality: z.string().optional(),
  imageUrl: baseFields.url,
  bannerUrl: baseFields.url,
  followerCount: baseFields.count,
  monthlyListeners: baseFields.count,
  ...timestampFields,
});

export const artistWithRelationsSchema = artistBaseSchema.extend({
  tracks: z.array(z.lazy(() => trackArtistSchema)),
  albums: z.array(z.lazy(() => albumBaseSchema)),
  genres: z.array(z.lazy(() => artistGenreSchema)),
  followers: z.array(z.lazy(() => userFollowedArtistSchema)),
});

export type Artist = z.infer<typeof artistBaseSchema>;
export type ArtistWithRelations = z.infer<typeof artistWithRelationsSchema>;
