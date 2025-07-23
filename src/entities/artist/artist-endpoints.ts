export const artistEndpoints = {
  all: "/artists",
  artist: (artistSlug: string) => `/artists/${artistSlug}`,
  info: (artistSlug: string) => `/artists/${artistSlug}/info`,
  detail: (artistSlug: string) => `/artists/${artistSlug}/detail`,
  discography: (artistSlug: string) => `/artists/${artistSlug}/discography`,
  banner: (artistSlug: string) => `/artists/${artistSlug}/banner`,
  popularTracks: (artistSlug: string) =>
    `/artists/${artistSlug}/popular-tracks`,
  actions: (artistSlug: string) => `/artists/${artistSlug}/actions`,
  isFollowing: (artistSlug: string) => `/artists/${artistSlug}/is-following`,
  follow: (artistSlug: string) => `/artists/${artistSlug}/follow`,
  unfollow: (artistSlug: string) => `/artists/${artistSlug}/unfollow`,
  about: (artistSlug: string) => `/artists/${artistSlug}/about`,
  others: (artistSlug: string) => `/artists/${artistSlug}/others`,
};
