import { getQueryClient } from "@/lib/get-query-client";
import { prefetchGenres } from "@/lib/prefetchs";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Genres } from "./components/genres";

export default async function GenresPage() {
  const qc = getQueryClient();

  await prefetchGenres(qc);
  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <Genres />
    </HydrationBoundary>
  );
}
