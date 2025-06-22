export const GENRE_ENDPOINTS = {
  list: "/genres",
  detail: (slug: string) => `/genres/${slug}`,
  create: "/genres",
  update: (slug: string) => `/genres/${slug}`,
  delete: (slug: string) => `/genres/${slug}`,
};

export const TRACK_ENDPOINTS = {
  list: "/tracks",
  detail: (slug: string) => `/tracks/${slug}`,
  create: "/tracks",
  update: (slug: string) => `/tracks/${slug}`,
  delete: (slug: string) => `/tracks/${slug}`,
};

export const ARTIST_ENDPOINTS = {
  list: "/artists",
  detail: (slug: string) => `/artists/${slug}`,
  create: "/artists",
  update: (slug: string) => `/artists/${slug}`,
  delete: (slug: string) => `/artists/${slug}`,
};

export const ALBUM_ENDPOINTS = {
  list: "/albums",
  detail: (slug: string) => `/albums/${slug}`,
  create: "/albums",
  update: (slug: string) => `/albums/${slug}`,
  delete: (slug: string) => `/albums/${slug}`,
};

export const USER_ENDPOINTS = {
  list: "/users",
  signIn: "/auth/sign-in",
  signUp: "/auth/sign-up",
  detail: (slug: string) => `/users/${slug}`,
  update: (slug: string) => `/users/${slug}`,
  delete: (slug: string) => `/users/${slug}`,
};

export const PLAYLIST_ENDPOINTS = {
  list: "/playlists",
  detail: (slug: string) => `/playlists/${slug}`,
  create: "/playlists",
  update: (slug: string) => `/playlists/${slug}`,
  delete: (slug: string) => `/playlists/${slug}`,
};
