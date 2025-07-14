import { Section } from "@/new-components/ui/section";
import { useArtistPopularTracks } from "@/features/artist/artist-queries";
import { TrackList, TrackListSkeleton } from "@/new-components/ui/track-list";

export const PopularSection = ({ artistSlug }: { artistSlug: string }) => {
  const { data: tracks, isLoading } = useArtistPopularTracks(artistSlug, {
    limit: 5,
  });

  return (
    <Section heading="Popular">
      {isLoading ? (
        <TrackListSkeleton count={5} />
      ) : (
        <TrackList tracks={tracks?.data} />
      )}
    </Section>
  );
};
