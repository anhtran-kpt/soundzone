import { endpoints } from "@/lib/api/endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "@/lib/tanstack-query/query-keys";
import { TFollowers } from "@/types/artist";
import { useQuery } from "@tanstack/react-query";

export const useArtistFollowers = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.followers(artistSlug),
    queryFn: fetcher<TFollowers>(endpoints.artist.followers(artistSlug)),
  });
};

export const useArtistInfo = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.artist,
  });
};
