export const genreEndpoints = {
  all: "/genres",
  genre: (genreSlug: string) => `/genres/${genreSlug}`,
  info: (genreSlug: string) => `/genres/${genreSlug}/info`,
  followers: (genreSlug: string) => `/genres/${genreSlug}/followers`,
  detail: (genreSlug: string) => `/genres/${genreSlug}/detail`,
};
