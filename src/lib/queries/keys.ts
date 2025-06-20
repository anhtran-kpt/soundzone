export const albumKeys = {
  all: ["albums"] as const,
  lists: () => [...albumKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...albumKeys.lists(), { filters }] as const,
  details: () => [...albumKeys.all, "detail"] as const,
  detail: (id: string) => [...albumKeys.details(), id] as const,
};

export const artistKeys = {
  all: ["artists"] as const,
  lists: () => [...artistKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...artistKeys.lists(), { filters }] as const,
  details: () => [...artistKeys.all, "detail"] as const,
  detail: (id: string) => [...artistKeys.details(), id] as const,
};

export const genreKeys = {
  all: ["genres"] as const,
  lists: () => [...genreKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...genreKeys.lists(), { filters }] as const,
  details: () => [...genreKeys.all, "detail"] as const,
  detail: (id: string) => [...genreKeys.details(), id] as const,
};

export const trackKeys = {
  all: ["tracks"] as const,
  lists: () => [...trackKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...trackKeys.lists(), { filters }] as const,
  details: () => [...trackKeys.all, "detail"] as const,
  detail: (id: string) => [...trackKeys.details(), id] as const,
};

export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};

export const playlistKeys = {
  all: ["playlists"] as const,
  lists: () => [...playlistKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...playlistKeys.lists(), { filters }] as const,
  details: () => [...playlistKeys.all, "detail"] as const,
  detail: (id: string) => [...playlistKeys.details(), id] as const,
};
