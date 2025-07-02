export const albumKeys = {
  all: ["albums"] as const,
  detail: (albumId: string) => [...albumKeys.all, albumId] as const,
};
