import { AlbumDetail } from "@/components/user/artist";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchAlbum } from "@/lib/prefetchers";

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ albumId: string }>;
}) {
  const { albumId } = await params;

  const qc = getQueryClient();

  await prefetchAlbum(qc, albumId);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <AlbumDetail albumId={albumId} />
    </HydrationBoundary>
  );
}
