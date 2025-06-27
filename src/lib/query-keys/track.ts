export const trackKeys = {
  all: ["tracks"] as const,
  detail: (trackSlug: string) => [...trackKeys.all, trackSlug] as const,
};
