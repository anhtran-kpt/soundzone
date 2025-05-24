export const albumKeys = {
  all: ["albums"] as const,
  lists: () => [...albumKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...albumKeys.lists(), { filters }] as const,
  details: () => [...albumKeys.all, "detail"] as const,
  detail: (slug: string) => [...albumKeys.details(), slug] as const,
};

export const artistKeys = {
  all: ["artists"] as const,
  lists: () => [...artistKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...artistKeys.lists(), { filters }] as const,
  details: () => [...artistKeys.all, "detail"] as const,
  detail: (slug: string) => [...artistKeys.details(), slug] as const,
};

export const genreKeys = {
  all: ["genres"] as const,
  lists: () => [...genreKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...genreKeys.lists(), { filters }] as const,
  details: () => [...genreKeys.all, "detail"] as const,
  detail: (slug: string) => [...genreKeys.details(), slug] as const,
};

export const songKeys = {
  all: ["songs"] as const,
  lists: () => [...songKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...songKeys.lists(), { filters }] as const,
  details: () => [...songKeys.all, "detail"] as const,
  detail: (slug: string) => [...songKeys.details(), slug] as const,
};

export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};
