import { keepPreviousData, useQuery } from "@tanstack/react-query";

const keys = {
  all: ["search"] as const,
  query: (query: string) => [...keys.all, query] as const,
} as const;

export function useSearchTracks(query: string) {
  return useQuery({
    queryKey: keys.query(query),
    // queryFn: ({ signal }) => searchTracks(query, signal),
    placeholderData: keepPreviousData,
    enabled: query.trim().length > 0,
  });
}
