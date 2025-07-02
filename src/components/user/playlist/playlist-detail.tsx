"use client";

import { PlaylistBanner } from "@/components/shared/ui";
import { Input } from "@/components/ui";
import { useGetPlaylist } from "@/hooks";
import { SearchIcon } from "lucide-react";

export const PlaylistDetail = ({ playlistId }: { playlistId: string }) => {
  const {
    data: playlist,
    isLoading,
    error,
    isError,
  } = useGetPlaylist(playlistId);

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (isError) {
    <div>Error: {error.message}</div>;
  }

  console.log(playlist);

  return (
    <>
      <section>
        <PlaylistBanner playlist={playlist} />
      </section>
      <section className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">
          Let&apos;s find something for your playlist
        </h3>
        <div className="flex items-center relative w-full max-w-sm">
          <Input
            type="text"
            placeholder="Search for songs"
            className="w-full bg-transparent pl-10 pr-6 rounded-lg py-2"
          />
          <SearchIcon className="absolute left-3" />
        </div>
      </section>
    </>
  );
};
