"use client";

import Image from "next/image";
import { Track } from "@/types/database";
import { cn } from "@/lib/utils";
import { PlayIcon } from "lucide-react";
import CustomLink from "@/components/common/custom-link";
import { Icon } from "@/components/common";
import { Button } from "@/components/ui/button";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import Link from "next/link";

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
      <div className="size-14 rounded-md overflow-hidden bg-muted flex-shrink-0 relative">
        <Image
          src={track.album.coverUrl}
          alt={track.album.name}
          width={56}
          height={56}
          className="h-full w-full object-cover"
        />
        <Button
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
      </div>
    </div>
  );
}
