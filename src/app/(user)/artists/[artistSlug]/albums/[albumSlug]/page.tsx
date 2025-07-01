import { AlbumDetail } from "@/components/user/artist";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchAlbumBySlug } from "@/lib/prefetchs";

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ albumSlug: string }>;
}) {
  const { albumSlug } = await params;

  const qc = getQueryClient();

  await prefetchAlbumBySlug(qc, albumSlug);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <AlbumDetail albumSlug={albumSlug} />
    </HydrationBoundary>
  );
}
