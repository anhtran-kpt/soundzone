import ArtistDetails from "./components/artist-detail";
import { artistKeys, fetchArtistBySlug } from "@/lib/queries/artist";
import { fetchTracksByArtistSlug, trackKeys } from "@/lib/queries/track";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  const qc = getQueryClient();

  await Promise.all([
    qc.prefetchQuery({
      queryKey: artistKeys.detail(artistSlug),
      queryFn: ({ signal }) => fetchArtistBySlug(artistSlug, signal),
    }),
    qc.prefetchQuery({
      queryKey: trackKeys.listByArtistSlug(artistSlug),
      queryFn: ({ signal }) =>
        fetchTracksByArtistSlug(artistSlug, { offset: 0, limit: 5 }, signal),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <ArtistDetails artistSlug={artistSlug} />
    </HydrationBoundary>
  );
}
