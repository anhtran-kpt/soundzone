import { getQueryClient } from "@/lib/tanstack-query/get-query-client";
import { pageKeys } from "@/lib/tanstack-query/query-keys";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import ArtistDetail from "@/components/pages/artist-detail";
import { fetchArtistDetailPage } from "@/lib/tanstack-query/query-fns";

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: pageKeys.artistDetail(artistSlug),
    queryFn: ({ signal }) => fetchArtistDetailPage(artistSlug, signal),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArtistDetail artistSlug={artistSlug} />
    </HydrationBoundary>
  );
}
