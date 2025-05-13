export const GENRE_ENDPOINTS = {
  list: "/genres",
  detail: (slug: string) => `/genres/${slug}`,
  create: "/genres",
  update: (id: string) => `/genres/${id}`,
  delete: (id: string) => `/genres/${id}`,
};
