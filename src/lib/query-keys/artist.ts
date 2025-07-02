export const artistKeys = {
  all: ["artists"] as const,
  detail: (artistId: string) => [...artistKeys.all, artistId] as const,
};
