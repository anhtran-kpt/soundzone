export const artistKeys = {
  all: ["artists"] as const,
  artist: (artistSlug: string) => [...artistKeys.all, artistSlug] as const,
  info: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "info"] as const,
  detail: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "detail"] as const,
  followers: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "followers"] as const,
  discography: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "discography"] as const,
  banner: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "banner"] as const,
  popularTracks: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "popular-tracks"] as const,
  actions: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "actions"] as const,
  isFollowing: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "is-following"] as const,
  about: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "about"] as const,
};
