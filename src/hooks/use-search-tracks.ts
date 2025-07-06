import { searchTracks } from "@/lib/queries/search";
import { searchKeys } from "@/lib/query-keys/search";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useSearchTracks(query: string) {
  return useQuery({
    queryKey: searchKeys.searchTracks(query),
    queryFn: ({ signal }) => searchTracks(query, signal),
    placeholderData: keepPreviousData,
    enabled: query.trim().length > 0,
  });
}
