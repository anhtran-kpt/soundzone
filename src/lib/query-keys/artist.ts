export const artistKeys = {
  all: ["artists"] as const,
  detail: (artistSlug: string) => [...artistKeys.all, artistSlug] as const,
};
