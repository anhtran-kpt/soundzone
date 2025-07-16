import { getQueryClient } from "@/lib/tanstack-query/get-query-client";
import { prefetchGenres } from "@/lib/prefetchers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Genres } from "@/components/admin/genre";

export default async function GenresPage() {
  const qc = getQueryClient();

  await prefetchGenres(qc);
  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <Genres />
    </HydrationBoundary>
  );
}
