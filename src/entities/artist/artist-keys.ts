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
  popularTracks: (artistSlug: string) =>
    [...artistKeys.artist(artistSlug), "popularTracks"] as const,
};
