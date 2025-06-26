export const queryKeys = {
  all: ["queries"] as const,

  artists: () => [...queryKeys.all, "artists"] as const,
  artistsList: () => [...queryKeys.artists(), "list"] as const,
  artistDetail: (artistSlug: string) =>
    [...queryKeys.artists(), "detail", artistSlug] as const,

  tracks: () => [...queryKeys.all, "tracks"] as const,
  tracksList: () => [...queryKeys.tracks(), "list"] as const,
  trackDetail: (slug: string) =>
    [...queryKeys.tracks(), "detail", slug] as const,

  albums: () => [...queryKeys.all, "albums"] as const,
  albumsList: () => [...queryKeys.albums(), "list"] as const,
  albumDetail: (slug: string) =>
    [...queryKeys.albums(), "detail", slug] as const,

  genres: () => [...queryKeys.all, "genres"] as const,
  genresList: () => [...queryKeys.genres(), "list"] as const,
  genreDetail: (slug: string) =>
    [...queryKeys.genres(), "detail", slug] as const,

  playlists: () => [...queryKeys.all, "playlists"] as const,
  playlistsList: () => [...queryKeys.playlists(), "list"] as const,
  playlistDetail: (slug: string) =>
    [...queryKeys.playlists(), "detail", slug] as const,
};

export const invalidateQueries = {
  all: () => queryKeys.all,

  artists: () => queryKeys.artists(),
  artistDetail: (artistSlug: string) => queryKeys.artistDetail(artistSlug),
  artistsList: () => queryKeys.artistsList(),

  tracks: () => queryKeys.tracks(),
  trackDetail: (trackSlug: string) => queryKeys.trackDetail(trackSlug),
  tracksList: () => queryKeys.tracksList(),

  albums: () => queryKeys.albums(),
  albumDetail: (albumSlug: string) => queryKeys.albumDetail(albumSlug),
  albumsList: () => queryKeys.albumsList(),

  genres: () => queryKeys.genres(),
  genreDetail: (genreSlug: string) => queryKeys.genreDetail(genreSlug),
  genresList: () => queryKeys.genresList(),

  playlists: () => queryKeys.playlists(),
  playlistDetail: (playlistSlug: string) =>
    queryKeys.playlistDetail(playlistSlug),
  playlistsList: () => queryKeys.playlistsList(),
};

export type QueryKeys = typeof queryKeys;
