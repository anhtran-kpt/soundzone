"use client";

import { PlaylistBanner, TracksList } from "@/components/shared/ui";
import TrackInfo from "@/components/shared/ui/track-info";
import { Input } from "@/components/ui";
import { useGetPlaylist } from "@/hooks";
import { MusicIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchTracks } from "@/hooks/use-search-tracks";

export const PlaylistDetail = ({ playlistId }: { playlistId: string }) => {
  const {
    data: playlist,
    isLoading: isPlaylistLoading,
    error: playlistError,
    isError: isPlaylistError,
  } = useGetPlaylist(playlistId);

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const {
    data: queryData,
    isLoading: isQueryLoading,
    error: queryError,
  } = useSearchTracks(debouncedQuery);

  if (isPlaylistLoading) {
    <div>Loading...</div>;
  }

  if (isPlaylistError) {
    <div>Error: {playlistError.message}</div>;
  }

  console.log(queryData);

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
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon className="absolute left-3" />
        </div>
        {isQueryLoading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Error State */}
        {queryError && (
          <div className="text-center py-8 text-destructive">
            Có lỗi xảy ra khi tìm kiếm. Vui lòng thử lại.
          </div>
        )}

        {/* No Results */}
        {queryData &&
          queryData.tracks.length === 0 &&
          debouncedQuery &&
          !isQueryLoading && (
            <div className="text-center py-8 text-muted-foreground">
              <MusicIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Không tìm thấy bài hát nào cho "{debouncedQuery}"</p>
            </div>
          )}
        {queryData && queryData.tracks.length > 0 && (
          <TracksList tracks={queryData?.tracks} />
        )}
      </section>
    </>
  );
};
