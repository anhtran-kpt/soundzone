"use client";

import { cn, formatDuration } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PlayIcon, PlusCircleIcon } from "lucide-react";
import { useAudioPlayer, useIsPlaying } from "@/hooks";
import { WaveformIcon } from "../../components/ui/wave-form";
import { TrackCard } from "./track-card";
import { TrackInfo } from "@/features/track/track-types";
import { TrackDropdown } from "./track-dropdown";

interface TrackListProps {
  tracks: TrackInfo[];
  hasNext?: boolean;
}

export const TrackList = ({ tracks, hasNext = false }: TrackListProps) => {
  const { playTrack, currentTrack } = useAudioPlayer();
  const isPlaying = useIsPlaying();

  if (tracks.length === 0) {
    return <div>No tracks found.</div>;
  }

  return (
    <>
      <ul role="list" className="w-full">
        {tracks.map((track, index) => (
          <li
            key={track.id}
            className="flex items-center gap-6 py-2 px-4 text-muted-foreground group hover:text-foreground hover:bg-muted rounded-md"
          >
            <div
              className={cn(
                "w-4 text-base font-semibold text-center",
                currentTrack?.id === track.id && "text-primary"
              )}
            >
              {isPlaying && currentTrack?.id === track.id ? (
                <WaveformIcon />
              ) : (
                <>
                  <span className="group-hover:hidden">{index + 1}</span>
                  <Button
                    type="button"
                    onClick={() => playTrack(track)}
                    variant="secondary"
                    size="icon"
                    className="hidden group-hover:block"
                  >
                    <PlayIcon className="fill-current stroke-0 size-4" />
                  </Button>
                </>
              )}
            </div>
            <TrackCard track={track} isActive={currentTrack?.id === track.id} />
            <div className="w-24 shrink-0">{track._count.playHistory}</div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="invisible group-hover:visible shrink-0"
            >
              <PlusCircleIcon />
            </Button>
            <span className="w-12 text-right shrink-0">
              {formatDuration(track.duration)}
            </span>
            <span className="shrink-0">
              <TrackDropdown />
            </span>
          </li>
        ))}
      </ul>
      {hasNext && (
        <Button variant="link" type="button" className="text-white mt-2">
          See more
        </Button>
      )}
    </>
  );
};

export const TrackListSkeleton = ({ count = 10 }: { count?: number }) => {
  return (
    <ul role="list" className="w-full">
      {Array.from({ length: count }).map((_, index) => (
        <li
          key={index}
          className="flex items-center gap-6 py-2 px-4 text-muted-foreground rounded-md"
        >
          <div className="w-4 text-base font-semibold text-center">
            <Skeleton className="w-4 h-4 rounded-sm" />
          </div>

          <div className="flex items-center gap-3 grow min-w-0">
            <Skeleton className="size-12 rounded-md shrink-0" />
            <div className="flex flex-col gap-1 w-full overflow-hidden">
              <Skeleton className="h-4 w-3/4 rounded" />
              <Skeleton className="h-3 w-1/2 rounded" />
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-10 h-3 rounded" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
        </li>
      ))}
    </ul>
  );
};
