import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useSearchTracks() {
  return useQuery({
    queryKey: playlistKeys.all,
    queryFn: ({ signal }) => searchTracks(signal),
    placeholderData: keepPreviousData,
  });
}
