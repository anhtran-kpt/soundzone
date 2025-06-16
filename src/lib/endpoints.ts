export const GENRE_ENDPOINTS = {
  list: "/genres",
  detail: (id: string) => `/genres/${id}`,
  create: "/genres",
  update: (id: string) => `/genres/${id}`,
  delete: (id: string) => `/genres/${id}`,
};

export const TRACK_ENDPOINTS = {
  list: "/tracks",
  detail: (id: string) => `/tracks/${id}`,
  create: "/tracks",
  update: (id: string) => `/tracks/${id}`,
  delete: (id: string) => `/tracks/${id}`,
};

export const ARTIST_ENDPOINTS = {
  list: "/artists",
  detail: (id: string) => `/artists/${id}`,
  create: "/artists",
  update: (id: string) => `/artists/${id}`,
  delete: (id: string) => `/artists/${id}`,
};

export const ALBUM_ENDPOINTS = {
  list: "/albums",
  detail: (id: string) => `/albums/${id}`,
  create: "/albums",
  update: (id: string) => `/albums/${id}`,
  delete: (id: string) => `/albums/${id}`,
};

export const USER_ENDPOINTS = {
  list: "/users",
  signIn: "/auth/sign-in",
  signUp: "/auth/sign-up",
  detail: (id: string) => `/users/${id}`,
  update: (id: string) => `/users/${id}`,
  delete: (id: string) => `/users/${id}`,
};

export const PLAYLIST_ENDPOINTS = {
  list: "/playlists",
  detail: (id: string) => `/playlists/${id}`,
  create: "/playlists",
  update: (id: string) => `/playlists/${id}`,
  delete: (id: string) => `/playlists/${id}`,
};
