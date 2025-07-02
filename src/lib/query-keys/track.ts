export const trackKeys = {
  all: ["tracks"] as const,
  detail: (trackId: string) => [...trackKeys.all, trackId] as const,
};
