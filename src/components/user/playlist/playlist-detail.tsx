"use client";

import { PlaylistBanner } from "@/components/shared/ui";
import { useGetPlaylistBySlug } from "@/hooks";

export const PlaylistDetail = ({ playlistSlug }: { playlistSlug: string }) => {
  const {
    data: playlist,
    isLoading,
    error,
    isError,
  } = useGetPlaylistBySlug(playlistSlug);

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (isError) {
    <div>Error: {error.message}</div>;
  }

  console.log(playlist);

  return (
    <>
      <PlaylistBanner playlist={playlist} />
    </>
  );
};
