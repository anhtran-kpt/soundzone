function buildQuery(params?: Record<string, string | number | boolean>) {
  if (!params) return "";
  const qp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v != null) qp.set(k, String(v));
  }
  return `?${qp.toString()}`;
}

export const ARTIST_ENDPOINTS = {
  list: (params?: { limit?: number; page?: number }) =>
    `/artists${buildQuery(params)}`,
  detail: (slug: string) => `/artists/${encodeURIComponent(slug)}`,
};

export const ARTIST_TRACKS_ENDPOINTS = {
  list: (artistSlug: string, params?: { limit?: number; page?: number }) =>
    `/artists/${encodeURIComponent(artistSlug)}/tracks${buildQuery(params)}`,
};

export const TRACK_ENDPOINTS = {
  list: (params?: { limit?: number; page?: number }) =>
    `/tracks${buildQuery(params)}`,
  detail: (slug: string) => `/tracks/${encodeURIComponent(slug)}`,
};

export const ALBUM_ENDPOINTS = {
  list: (params?: { limit?: number; page?: number }) =>
    `/albums${buildQuery(params)}`,
  detail: (slug: string) => `/albums/${encodeURIComponent(slug)}`,
};

export const ALBUM_ARTIST_ENDPOINTS = {
  list: (slug: string, params?: { limit?: number; page?: number }) =>
    `/albums/artist/${encodeURIComponent(slug)}${buildQuery(params)}`,
};

export const GENRE_ENDPOINTS = {
  list: (params?: { limit?: number; page?: number }) =>
    `/genres${buildQuery(params)}`,
  detail: (slug: string) => `/genres/${encodeURIComponent(slug)}`,
};
