export const userEndpoints = {
  all: "/users",
  user: (userSlug: string) => `/users/${userSlug}`,
  info: (userSlug: string) => `/users/${userSlug}/info`,
  detail: (userSlug: string) => `/users/${userSlug}/detail`,
  playlists: (userSlug: string) => `/users/${userSlug}/playlists`,
  followingArtists: (userSlug: string) => `/users/${userSlug}/followingArtists`,
};
