import { prefetchArtistBySlug } from "@/lib/prefetchs";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { NewAlbumPage } from "@/components/admin/album/new-album-page";

export default async function Page({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;
  const qc = getQueryClient();
  await prefetchArtistBySlug(qc, artistSlug);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <NewAlbumPage artistSlug={artistSlug} />
    </HydrationBoundary>
  );
}
