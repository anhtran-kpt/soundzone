import ArtistDetail from "@/components/page/artist-detail";
import { getQueryClient } from "@/lib/tanstack-query/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchArtist } from "@/lib/prefetchers";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ artistId: string }>;
}) {
  const { artistId } = await params;

  const qc = getQueryClient();

  await prefetchArtist(qc, artistId);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <ArtistDetail artistId={artistId} />
    </HydrationBoundary>
  );
}
