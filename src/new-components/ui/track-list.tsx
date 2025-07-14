import { cn, formatDuration } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSubTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  EllipsisIcon,
  ImportIcon,
  ListPlusIcon,
  PlayIcon,
  PlusCircleIcon,
} from "lucide-react";
import { useAudioPlayer, useIsPlaying } from "@/hooks";
import { WaveformIcon } from "../../components/ui/wave-form";
import { TrackCard } from "./track-card";
import { TrackInfo } from "@/features/track/track-types";

interface TrackListProps {
  tracks: TrackInfo[];
}

export const TrackList = ({ tracks }: TrackListProps) => {
  const { playTrack, currentTrack } = useAudioPlayer();
  const isPlaying = useIsPlaying();

  if (tracks.length === 0) {
    return <div>No tracks found.</div>;
  }

  return (
    <ul role="list" className="w-full">
      {tracks.map((track, index) => (
        <li
          key={track.id}
          className="flex items-center gap-6 py-2 px-4 text-muted-foreground group hover:text-white hover:bg-muted rounded-md"
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
          <TrackCard track={track} isActive={currentTrack.id === track.id} />
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" type="button">
                  <EllipsisIcon className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" side="bottom" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <ListPlusIcon className="size-4 mr-2" />
                      Add to playlist
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <ImportIcon className="size-4 mr-2" />
                    Save to library
                  </DropdownMenuItem>
                  <DropdownMenuItem>Add to queue</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Go to album</DropdownMenuItem>
                  <DropdownMenuItem>View credits</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Copy link</DropdownMenuItem>
                      <DropdownMenuItem>Embed</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </li>
      ))}
    </ul>
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
