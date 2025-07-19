export const playlistEndpoints = {
  all: "/playlists",
  playlist: (playlistSlug: string) => `/playlists/${playlistSlug}`,
  info: (playlistSlug: string) => `/playlists/${playlistSlug}/info`,
  followers: (playlistSlug: string) => `/playlists/${playlistSlug}/followers`,
  detail: (playlistSlug: string) => `/playlists/${playlistSlug}/detail`,
  discography: (playlistSlug: string) =>
    `/playlists/${playlistSlug}/discography`,
  banner: (playlistSlug: string) => `/playlists/${playlistSlug}/banner`,
  popularTracks: (playlistSlug: string) =>
    `/playlists/${playlistSlug}/popularTracks`,

  userPlaylists: (userSlug: string) => `/users/${userSlug}/playlists`,
};
