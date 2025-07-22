import { TAlbumSlugs } from "./album-types";

export const albumKeys = {
  all: ({ artistSlug }: TAlbumSlugs) =>
    ["artists", artistSlug, "albums"] as const,
  album: ({ artistSlug, albumSlug }: TAlbumSlugs) =>
    [...albumKeys.all({ artistSlug }), albumSlug] as const,
  banner: ({ albumSlug, artistSlug }: TAlbumSlugs) =>
    [...albumKeys.album({ artistSlug, albumSlug }), "banner"] as const,
  tracks: ({ albumSlug, artistSlug }: TAlbumSlugs) =>
    [...albumKeys.album({ artistSlug, albumSlug }), "tracks"] as const,
  actions: ({ albumSlug, artistSlug }: TAlbumSlugs) =>
    [...albumKeys.album({ artistSlug, albumSlug }), "actions"] as const,
};
