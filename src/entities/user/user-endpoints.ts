export const userEndpoints = {
  all: "/users",
  user: (userSlug: string) => `/users/${userSlug}`,
  info: (userSlug: string) => `/users/${userSlug}/info`,
  detail: (userSlug: string) => `/users/${userSlug}/detail`,
  playlists: (userSlug: string) => `/users/${userSlug}/playlists`,
  playlistDetail: ({
    userSlug,
    playlistSlug,
  }: {
    userSlug: string;
    playlistSlug: string;
  }) => `/users/${userSlug}/playlists/${playlistSlug}`,
  followingArtists: (userSlug: string) =>
    `/users/${userSlug}/following-artists`,
};
