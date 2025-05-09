export const ENTITY_ENDPOINTS = {
  list: "/entities",
  detail: (slug: string) => `/entities/${slug}`,
  create: "/entities",
  update: (slug: string) => `/entities/${slug}`,
  delete: (slug: string) => `/entities/${slug}`,
};
