export const genreKeys = {
  all: ["genres"] as const,
  detail: (genreId: string) => [...genreKeys.all, genreId] as const,
};
