export const albumEndpoints = {
  all: "/albums",
  album: (albumSlug: string) => `/albums/${albumSlug}`,
  info: (albumSlug: string) => `/albums/${albumSlug}/info`,
  followers: (albumSlug: string) => `/albums/${albumSlug}/followers`,
  detail: (albumSlug: string) => `/albums/${albumSlug}/detail`,
  discography: (albumSlug: string) => `/albums/${albumSlug}/discography`,
  banner: (albumSlug: string) => `/albums/${albumSlug}/banner`,
};
