export const userKeys = {
  all: ["users"] as const,
  user: (userSlug: string) => [...userKeys.all, userSlug] as const,
  info: (userSlug: string) => [...userKeys.user(userSlug), "info"] as const,
  detail: (userSlug: string) => [...userKeys.user(userSlug), "detail"] as const,
  followingArtists: (userSlug: string) =>
    [...userKeys.user(userSlug), "following-artists"] as const,
  playlists: (userSlug: string) =>
    [...userKeys.user(userSlug), "playlists"] as const,
};
