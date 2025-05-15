export const GENRE_ENDPOINTS = {
  list: "/genres",
  detail: (slug: string) => `/genres/${slug}`,
  create: "/genres",
  update: (slug: string) => `/genres/${slug}`,
  delete: (slug: string) => `/genres/${slug}`,
};
