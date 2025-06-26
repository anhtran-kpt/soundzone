import ArtistDetails from "./components/artist-detail";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { prefetchArtistDetail } from "@/lib/prefetchs";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  const qc = getQueryClient();

  await prefetchArtistDetail(qc, artistSlug);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <ArtistDetails artistSlug={artistSlug} />
    </HydrationBoundary>
  );
}
