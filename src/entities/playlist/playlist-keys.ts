export const playlistKeys = {
  all: ["playlists"] as const,
  playlist: (playlistSlug: string) =>
    [...playlistKeys.all, playlistSlug] as const,
};
