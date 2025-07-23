"use client";

import { useTracks } from "@/entities/album/queries";
import ErrorMessage from "../../features/error-message";
import { TrackGrid, TrackGridSkeleton } from "../../features/track-grid";

interface AlbumTracksProps {
  albumSlug: string;
  artistSlug: string;
}

export const AlbumTracks = ({ albumSlug, artistSlug }: AlbumTracksProps) => {
  const { data: tracks, error, status } = useTracks({ albumSlug, artistSlug });

  if (status === "pending") {
    return <AlbumTracksSkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <TrackGrid type="album" tracks={tracks} />
    </section>
  );
};

export const AlbumTracksSkeleton = () => {
  return (
    <section>
      <TrackGridSkeleton />
    </section>
  );
};
