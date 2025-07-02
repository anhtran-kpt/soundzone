export const playlistKeys = {
  all: ["playlists"] as const,
  detail: (playlistId: string) => [...playlistKeys.all, playlistId] as const,
};
