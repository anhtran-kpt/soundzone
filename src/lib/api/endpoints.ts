export const endpoints = {
  page: {
    base: "/pages",
    artistDetail: (artistSlug: string) => `/pages/artists/${artistSlug}`,
    albums: (artistSlug: string) => `/pages/artists/${artistSlug}/albums`,
    albumDetail: (artistSlug: string, albumSlug: string) =>
      `/pages/artists/${artistSlug}/albums/${albumSlug}`,
  },
  user: {
    base: "/users",
    bySlug: (userSlug: string) => `/users/${userSlug}`,
    profile: (userSlug: string) => `/users/${userSlug}/profile`,
    playlists: (userSlug: string) => `/users/${userSlug}/playlists`,
    followingArtists: (userSlug: string) =>
      `/users/${userSlug}/following-artists`,
    sidebar: (userSlug: string) => `/users/${userSlug}/sidebar`,
  },
  artist: {
    base: "/artists",
    bySlug: (slug: string) => `/artists/${slug}`,
    albums: (slug: string) => `/artists/${slug}/albums`,
    follow: (slug: string) => `/artists/${slug}/follow`,
    unfollow: (slug: string) => `/artists/${slug}/unfollow`,
  },
  album: {
    base: "/albums",
    bySlug: (slug: string) => `/albums/${slug}`,
  },
  playlist: {
    base: "/playlists",
    bySlug: (slug: string) => `/playlists/${slug}`,
  },
};
