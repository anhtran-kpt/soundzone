export const playlistKeys = {
  all: ["playlists"] as const,
  playlist: (playlistSlug: string) =>
    [...playlistKeys.all, playlistSlug] as const,
  info: (playlistSlug: string) =>
    [...playlistKeys.playlist(playlistSlug), "info"] as const,
  detail: (playlistSlug: string) =>
    [...playlistKeys.playlist(playlistSlug), "detail"] as const,
  followers: (playlistSlug: string) =>
    [...playlistKeys.playlist(playlistSlug), "followers"] as const,
  discography: (playlistSlug: string) =>
    [...playlistKeys.playlist(playlistSlug), "discography"] as const,
  banner: (playlistSlug: string) =>
    [...playlistKeys.playlist(playlistSlug), "banner"] as const,
  popularTracks: (playlistSlug: string) =>
    [...playlistKeys.playlist(playlistSlug), "popularTracks"] as const,
};
