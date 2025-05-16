export const AUTH_ENDPOINTS = {
  signIn: "auth/signin",
  signUp: "auth/signup",
};

export const GENRE_ENDPOINTS = {
  list: "/genres",
  detail: (slug: string) => `/genres/${slug}`,
  create: "/genres",
  update: (slug: string) => `/genres/${slug}`,
  delete: (slug: string) => `/genres/${slug}`,
};

export const ARTIST_ENDPOINTS = {
  list: "/artists",
  detail: (slug: string) => `/artists/${slug}`,
  create: "/artists",
  update: (slug: string) => `/artists/${slug}`,
  delete: (slug: string) => `/artists/${slug}`,
};

// export const ALBUM_ENDPOINTS = {
//   list: "/albums",
//   detail: (slug: string) => `/albums/${slug}`,
//   create: "/albums",
//   update: (slug: string) => `/albums/${slug}`,
//   delete: (slug: string) => `/albums/${slug}`,
// };

export const USER_ENDPOINTS = {
  list: "/users",
  detail: (id: string) => `/users/${id}`,
  update: (id: string) => `/users/${id}`,
  delete: (id: string) => `/users/${id}`,
};
