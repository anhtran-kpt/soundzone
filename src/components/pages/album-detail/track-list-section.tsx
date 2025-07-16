"use client";

import { useAlbumDetail } from "@/features/album/album-queries";
import { Section } from "@/new-components/ui/section";
import { TrackList, TrackListSkeleton } from "@/components/ui/track-list";

export const TrackListSection = ({ albumSlug }: { albumSlug: string }) => {
  const { data: album, isLoading } = useAlbumDetail(albumSlug);

  return (
    <Section>
      {isLoading || !album ? (
        <TrackListSkeleton count={10} />
      ) : (
        <TrackList tracks={album?.tracks} />
      )}
    </Section>
  );
};
