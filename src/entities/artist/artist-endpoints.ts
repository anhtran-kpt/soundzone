export const artistEndpoints = {
  all: "/artists",
  artist: (artistSlug: string) => `/artists/${artistSlug}`,
  info: (artistSlug: string) => `/artists/${artistSlug}/info`,
  followers: (artistSlug: string) => `/artists/${artistSlug}/followers`,
  detail: (artistSlug: string) => `/artists/${artistSlug}/detail`,
  discography: (artistSlug: string) => `/artists/${artistSlug}/discography`,
  popularTracks: (artistSlug: string) => `/artists/${artistSlug}/popularTracks`,
};
