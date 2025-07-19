export const genreKeys = {
  all: ["genres"] as const,
  genre: (genreSlug: string) => [...genreKeys.all, genreSlug] as const,
  info: (genreSlug: string) => [...genreKeys.genre(genreSlug), "info"] as const,
  detail: (genreSlug: string) =>
    [...genreKeys.genre(genreSlug), "detail"] as const,
};
