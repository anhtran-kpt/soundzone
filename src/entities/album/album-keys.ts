export const albumKeys = {
  all: ["albums"] as const,
  album: (albumSlug: string) => [...albumKeys.all, albumSlug] as const,
  info: (albumSlug: string) => [...albumKeys.album(albumSlug), "info"] as const,
  detail: (albumSlug: string) =>
    [...albumKeys.album(albumSlug), "detail"] as const,
  followers: (albumSlug: string) =>
    [...albumKeys.album(albumSlug), "followers"] as const,
  discography: (albumSlug: string) =>
    [...albumKeys.album(albumSlug), "discography"] as const,
  banner: (albumSlug: string) =>
    [...albumKeys.album(albumSlug), "banner"] as const,
  popularTracks: (albumSlug: string) =>
    [...albumKeys.album(albumSlug), "popularTracks"] as const,
};
