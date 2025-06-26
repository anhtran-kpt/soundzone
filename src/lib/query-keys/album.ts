export const albumKeys = {
  all: ["albums"] as const,
  detail: (albumSlug: string) => [...albumKeys.all, albumSlug] as const,
};
