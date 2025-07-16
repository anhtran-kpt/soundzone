"use client";

import { Section } from "@/new-components/ui/section";
import { useArtistPopularTracks } from "@/features/artist/artist-queries";
import { TrackList, TrackListSkeleton } from "@/new-components/ui/track-list";

export const PopularSection = ({ artistSlug }: { artistSlug: string }) => {
  const { data, isLoading } = useArtistPopularTracks(artistSlug, {
    limit: 5,
  });

  if (isLoading || data) {
    return <TrackListSkeleton count={5} />;
  }

  return (
    <Section heading="Popular">
      <TrackList tracks={data?.data} hasNext={data?.meta?.hasNext} />
    </Section>
  );
};
