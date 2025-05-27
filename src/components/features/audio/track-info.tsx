"use client";

import Image from "next/image";
import { Track } from "@/types/database";
import { cn } from "@/lib/utils";
import { MusicIcon } from "lucide-react";

interface TrackInfoProps {
  track: Track;
  className?: string;
}

export default function TrackInfo({ track, className }: TrackInfoProps) {
  return (
    <div className={cn("flex items-center gap-3 min-w-0", className)}>
      {/* Cover Image */}
      <div className="h-12 w-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
        {track.album.coverUrl ? (
          <Image
            src={track.album.coverUrl}
            alt={track.album.name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <MusicIcon className="h-6 w-6 text-muted-foreground" />
          </div>
        )}
      </div>

      {/* Track Details */}
      <div className="min-w-0 flex-1">
        <div className="font-medium text-sm truncate">{track.name}</div>
        <div className="text-xs text-muted-foreground truncate">
          {/* {track.artists.map((artist) => artist.artist.name).join(", ")} */}
          {track.album && ` • ${track.album.name}`}
        </div>
      </div>
    </div>
  );
}
