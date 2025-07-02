import { prefetchArtist } from "@/lib/prefetchers";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { NewAlbumPage } from "@/components/admin/album/new-album-page";

export default async function Page({
  params,
}: {
  params: Promise<{ artistId: string }>;
}) {
  const { artistId } = await params;
  const qc = getQueryClient();
  await prefetchArtist(qc, artistId);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <NewAlbumPage artistId={artistId} />
    </HydrationBoundary>
  );
}
