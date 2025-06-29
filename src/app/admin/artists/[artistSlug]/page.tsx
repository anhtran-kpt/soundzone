import ArtistDetail from "@/components/user/artist/artist-detail";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchArtistBySlug } from "@/lib/prefetchs";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  const qc = getQueryClient();

  await prefetchArtistBySlug(qc, artistSlug);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <ArtistDetail artistSlug={artistSlug} />
    </HydrationBoundary>
  );
}
