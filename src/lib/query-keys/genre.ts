export const genreKeys = {
  all: ["genres"] as const,
  detail: (genreSlug: string) => [...genreKeys.all, genreSlug] as const,
};
