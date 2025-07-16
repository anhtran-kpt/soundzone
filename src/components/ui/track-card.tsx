"use client";

import { TrackInfo } from "@/features/track/track-types";
import { TrackCover, TrackCoverSkeleton } from "./track-cover";
import { CardTitle, CardTitleSkeleton } from "./card-title";
import Explicit from "@/components/ui/explicit-icon";
import { HoverLink } from "@/components/shared/ui";
import { Skeleton } from "@/components/ui";

interface TrackCardProps {
  track: TrackInfo;
  isActive?: boolean;
}

export const TrackCard = ({ track, isActive }: TrackCardProps) => {
  return (
    <div className="flex items-center gap-3 grow min-w-0">
      <TrackCover publicId={track.album.coverPublicId} alt={track.title} />
      <div className="flex flex-col gap-0.5 w-full overflow-hidden">
        <CardTitle title={track.title} isActive={isActive} />
        <div className="flex items-center text-sm gap-x-1 text-muted-foreground truncate">
          {track.isExplicit && <Explicit />}
          {track.artists.map((artist, index) => (
            <span key={artist.slug}>
              <HoverLink href={`/artists/${artist.slug}`}>
                {artist.name}
              </HoverLink>
              {index < track.artists.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TrackCardSkeleton = () => {
  return (
    <div className="flex items-center gap-3">
      <TrackCoverSkeleton />
      <div className="flex flex-col gap-1">
        <CardTitleSkeleton />
        <div className="flex items-center">
          <Skeleton className="w-36 h-4" />
        </div>
      </div>
    </div>
  );
};
