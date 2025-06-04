"use client";

import Image from "next/image";
import { Track } from "@/types/database";
import { cn } from "@/lib/utils";
import { PlayIcon } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/components/common";
import { Button } from "@/components/ui/button";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

interface TrackInfoProps {
  track: Track;
  className?: string;
}

export default function TrackInfo({ track, className }: TrackInfoProps) {
  const player = useAudioPlayer();

  const handlePlayTrack = async (track: Track) => {
    await player.playTrack(track);
  };

  return (
    <div className={cn("flex items-center gap-3 min-w-0 group", className)}>
      <div className="h-12 w-12 rounded-md overflow-hidden bg-muted flex-shrink-0 relative">
        <Image
          src={track.album.coverUrl}
          alt={track.album.name}
          width={48}
          height={48}
          className="h-full w-full object-cover"
        />
        <Button
          variant="link"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          onClick={() => handlePlayTrack(track)}
        >
          <Icon icon={PlayIcon} />
        </Button>
      </div>
      <div className="min-w-0 flex-1">
        <Link
          href={`tracks/${track.slug}`}
          className="font-medium text-sm truncate"
        >
          {track.name}
        </Link>
        <div className="text-xs text-muted-foreground truncate">
          {track.artists
            .map((artist) => (
              <Link
                key={artist.artistId}
                href={`/artists/${artist.artist.slug}`}
                className="hover:underline"
              >
                {artist.artist.name}
              </Link>
            ))
            .reduce((prev, curr) => [prev, ", ", curr])}
        </div>
      </div>
    </div>
  );
}
