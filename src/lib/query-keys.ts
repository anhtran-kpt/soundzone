export const queryKeys = {
  // Base keys
  all: ["queries"] as const,

  // Artists
  artists: () => [...queryKeys.all, "artists"] as const,
  artistsList: (params?: {
    page?: number;
    limit?: number;
    q?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  }) => [...queryKeys.artists(), "list", params] as const,
  artistsDetail: (slug: string) =>
    [...queryKeys.artists(), "detail", slug] as const,
  artistsInfinite: (params?: {
    limit?: number;
    q?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  }) => [...queryKeys.artists(), "infinite", params] as const,

  // Tracks
  tracks: () => [...queryKeys.all, "tracks"] as const,
  tracksList: (params?: unknown) =>
    [...queryKeys.tracks(), "list", params] as const,
  tracksDetail: (slug: string) =>
    [...queryKeys.tracks(), "detail", slug] as const,
  tracksByUser: (userSlug: string) =>
    [...queryKeys.tracks(), "by-user", userSlug] as const,

  // // Settings
  // settings: () => [...queryKeys.all, "settings"] as const,
  // profile: () => [...queryKeys.settings(), "profile"] as const,

  // // Search
  // search: (query: string, type?: string) =>
  //   [...queryKeys.all, "search", { query, type }] as const,
};

// Helper to invalidate related queries
export const invalidateQueries = {
  // Invalidate all artists queries
  artists: () => queryKeys.artists(),

  // Invalidate artist detail specific
  artistDetail: (slug: string) => queryKeys.artistsDetail(slug),

  // Invalidate artists list với params specific
  artistsList: (params?: Parameters<typeof queryKeys.artistsList>[0]) =>
    queryKeys.artistsList(params),

  // Invalidate all
  all: () => queryKeys.all,
};

export type QueryKeys = typeof queryKeys;
export type ArtistListParams = Parameters<typeof queryKeys.artistsList>[0];
export type ArtistDetailParams = Parameters<typeof queryKeys.artistsDetail>[0];
