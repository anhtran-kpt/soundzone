export const pageKeys = {
  all: ["pages"] as const,
  artists: () => [...pageKeys.all, "artists"] as const,
  artistDetail: (artistSlug: string) =>
    [...pageKeys.artists(), artistSlug] as const,
  artistAlbums: (artistSlug: string) =>
    [...pageKeys.artistDetail(artistSlug), "albums"] as const,
  artistAlbumDetail: (artistSlug: string, albumSlug: string) =>
    [...pageKeys.artistAlbums(artistSlug), albumSlug] as const,
  artistDiscography: (artistSlug: string) =>
    [...pageKeys.artistDetail(artistSlug), "discography"] as const,
  discovery: () => [...pageKeys.all, "discovery"] as const,
  trending: () => [...pageKeys.all, "trending"] as const,
};

export const userKeys = {
  all: ["users"] as const,
  userDetail: (userSlug: string) => [...userKeys.all, userSlug] as const,
  playlists: (userSlug: string) =>
    [...userKeys.all, userSlug, "playlists"] as const,
  followingArtists: (userSlug: string) =>
    [...userKeys.all, userSlug, "followingArtists"] as const,
};

export const artistKeys = {
  all: ["artist"] as const,
  artist: (artistSlug: string) => [...artistKeys.all, artistSlug] as const,
  isFollowing: (artistSlug: string) =>
    [...artistKeys.all, artistSlug, "is-following"] as const,
  followers: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "followers"] as const,
};
