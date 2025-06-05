"use client";

import { EllipsisIcon, HeartIcon, PlayIcon } from "lucide-react";
import { Button } from "../ui/button";
import Icon from "./icon";
import { Track } from "@/types/database";
import CustomLink from "./custom-link";
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

interface TrackCardProps {
  track: Track;
}

export default function TrackCard({ track }: TrackCardProps) {
  const player = useAudioPlayer();

  const handlePlayTrack = async (track: Track) => {
    await player.playTrack(track);
  };

  return (
    <div className="flex justify-between items-center hover:bg-muted rounded-md p-2 transition-colors duration-200 group">
      <div className="flex items-center gap-3 min-w-0">
        <div className="size-16 rounded-md overflow-hidden bg-muted flex-shrink-0 relative">
          <Image
            src={track.album.coverUrl}
            alt={track.album.name}
            width={64}
            height={64}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 group-hover:brightness-75"
          />
          <button
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:brightness-90 cursor-pointer"
            onClick={() => handlePlayTrack(track)}
          >
            <Icon icon={PlayIcon} fill="white" strokeWidth={0} />
          </button>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-sm truncate">{track.name}</h3>
          <div className="text-xs text-muted-foreground truncate mt-0.5">
            {track.artists
              .map((artist) => (
                <CustomLink
                  key={artist.artistId}
                  href={`/artists/${artist.artist.slug}`}
                  className="hover:underline"
                >
                  {artist.artist.name}
                </CustomLink>
              ))
              .reduce((prev, curr) => [prev, ", ", curr])}
          </div>
          <span className="text-xs text-muted-foreground">
            {formatDistanceToNow(track.album.releaseDate ?? track.createdAt, {
              addSuffix: true,
            })
              .charAt(0)
              .toUpperCase() +
              formatDistanceToNow(track.album.releaseDate ?? track.createdAt, {
                addSuffix: true,
              }).slice(1)}
          </span>
        </div>
      </div>
      <div className="space-x-2">
        <Button variant="ghost" size="icon">
          <Icon icon={HeartIcon} />
        </Button>
        <Button variant="ghost" size="icon">
          <Icon icon={EllipsisIcon} />
        </Button>
      </div>
    </div>
  );
}
