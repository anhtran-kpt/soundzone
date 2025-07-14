import { TracksList } from "@/components/shared/ui";

import { Section } from "@/new-components/ui/section";
import { useArtistPopularTracks } from "@/features/artist/artist-queries";
import { TrackListSkeleton } from "@/new-components/skeletons/track-list-skeleton";

export const PopularSection = ({ artistSlug }: { artistSlug: string }) => {
  const { data: tracks, isLoading } = useArtistPopularTracks(artistSlug, {
    limit: 5,
  });

  return (
    <Section heading="Popular">
      {!isLoading ? (
        <TrackListSkeleton count={5} />
      ) : (
        <TracksList tracks={tracks} />
      )}
    </Section>
  );
};
