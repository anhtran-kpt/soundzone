import { TAlbumSlugs } from "./album-types";

export const albumEndpoints = {
  all: ({ artistSlug }: TAlbumSlugs) => `/artists/${artistSlug}/albums`,
  album: ({ artistSlug, albumSlug }: TAlbumSlugs) =>
    `/artists/${artistSlug}albums/${albumSlug}`,
  banner: ({ albumSlug, artistSlug }: TAlbumSlugs) =>
    `/artists/${artistSlug}/albums/${albumSlug}/banner`,
};
