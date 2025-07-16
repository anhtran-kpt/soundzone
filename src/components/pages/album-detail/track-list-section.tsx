"use client";

import { useAlbumDetail } from "@/features/album/album-queries";
import { TrackList, TrackListSkeleton } from "@/components/ui/track-list";

export const TrackListSection = ({ albumSlug }: { albumSlug: string }) => {
  const { data: album, isLoading } = useAlbumDetail(albumSlug);

  return (
    <section>
      {isLoading || !album ? (
        <TrackListSkeleton count={10} />
      ) : (
        <TrackList tracks={album?.tracks} />
      )}
    </section>
  );
};
