import { TrackInfo } from "@/features/track/track-types";
import { TrackCover, TrackCoverSkeleton } from "./track-cover";
import { CardTitle, CardTitleSkeleton } from "./card-title";
import Explicit from "@/new-components/ui/explicit-icon";
import { HoverLink } from "@/components/shared/ui";
import { Skeleton } from "@/components/ui";
import { interleaveComma } from "@/lib/helpers";

interface TrackCardProps {
  track: TrackInfo;
  isActive: boolean;
}

export const TrackCard = ({ track, isActive }: TrackCardProps) => {
  return (
    <div className="flex items-center gap-3 grow min-w-0">
      <TrackCover publicId={track.album.coverPublicId} alt={track.title} />
      <div className="flex flex-col gap-1 w-full overflow-hidden">
        <CardTitle title={track.title} isActive={isActive} />
        <div className="flex items-center gap-x-1.5 text-xs text-muted-foreground truncate">
          {track.isExplicit && <Explicit />}
          {interleaveComma(
            track.artists.map((artist) => (
              <HoverLink key={artist.slug} href={`/artists/${artist.slug}`}>
                {artist.name}
              </HoverLink>
            ))
          )}
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
        <div className="flex items-center gap-x-1.5">
          <Skeleton className="w-36 h-4" />
        </div>
      </div>
    </div>
  );
};
