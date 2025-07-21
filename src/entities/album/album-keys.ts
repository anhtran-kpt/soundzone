import { TAlbumSlugs } from "./album-types";

export const albumKeys = {
  all: ({ artistSlug }: TAlbumSlugs) =>
    ["artists", artistSlug, "albums"] as const,
  album: ({ artistSlug, albumSlug }: TAlbumSlugs) =>
    [...albumKeys.all({ artistSlug }), albumSlug] as const,
  banner: ({ albumSlug, artistSlug }: TAlbumSlugs) =>
    [...albumKeys.album({ artistSlug, albumSlug }), "banner"] as const,
};
