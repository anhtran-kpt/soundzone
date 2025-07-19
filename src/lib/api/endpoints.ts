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
    playlistDetail: ({
      userSlug,
      playlistSlug,
    }: {
      userSlug: string;
      playlistSlug: string;
    }) => `/users/${userSlug}/playlists/${playlistSlug}`,
    followingArtists: (userSlug: string) =>
      `/users/${userSlug}/following-artists`,
  },
  artist: {
    base: "/artists",
    bySlug: (artistSlug: string) => `/artists/${artistSlug}`,
    albums: (artistSlug: string) => `/artists/${artistSlug}/albums`,
    follow: (artistSlug: string) => `/artists/${artistSlug}/follow`,
    unfollow: (artistSlug: string) => `/artists/${artistSlug}/unfollow`,
    isFollowing: (artistSlug: string) => `/artists/${artistSlug}/is-following`,
    followers: (artistSlug: string) => `/artists/${artistSlug}/followers`,
  },
  album: {
    base: "/albums",
    bySlug: (slug: string) => `/albums/${slug}`,
  },
  playlist: {
    base: "/playlists",
    create: () => "/playlists",
    bySlug: (slug: string) => `/playlists/${slug}`,
  },
};
