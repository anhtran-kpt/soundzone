export const playlistKeys = {
  all: ["playlists"] as const,
  detail: (playlistSlug: string) =>
    [...playlistKeys.all, playlistSlug] as const,
};
