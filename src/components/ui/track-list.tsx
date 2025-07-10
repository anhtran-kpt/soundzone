import { TrackInfo } from "@/features/track/track-types";
import { cn, formatDuration } from "@/lib/utils";
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
  Button,
} from "@/components/ui";
import {
  EllipsisIcon,
  ImportIcon,
  ListPlusIcon,
  PlayIcon,
  PlusCircleIcon,
} from "lucide-react";
import { CldImage } from "next-cloudinary";
import Explicit from "@/components/shared/ui/explicit";
import { useAudioPlayer, useIsPlaying } from "@/hooks";
import { WaveformIcon } from "./wave-form";
import Link from "next/link";

interface TrackListProps {
  tracks: TrackInfo[];
}

const TrackList = ({ tracks }: TrackListProps) => {
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
          <div className="flex items-center gap-3 grow min-w-0">
            <div className="relative size-12 shrink-0">
              <CldImage
                src={track.album.coverPublicId}
                alt={track.title}
                fill
                className="rounded-md object-cover"
                sizes="48px"
                priority
              />
            </div>
            <div className="flex flex-col gap-1 w-full overflow-hidden">
              <span
                className={cn(
                  "text-[0.925rem] font-medium truncate block w-full text-white",
                  currentTrack?.id === track.id && "text-primary"
                )}
              >
                {track.title}
                {/* {track.artists.} */}
              </span>
              <div className="flex items-center gap-1.5 truncate text-xs">
                {track.isExplicit && <Explicit />}
                {track.artists.map(({ artist }, index) => (
                  <span
                    key={artist.id}
                    className="text-muted-foreground truncate"
                  >
                    <Button type="button" variant="link">
                      <Link
                        href={`/artists/${artist}`}
                        className="text-xs hover:text-primary hover:underline underline-offset-3 truncate"
                      >
                        {artist.name}
                      </Link>
                    </Button>
                    {index < track.artists.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-24 shrink-0">{track._count.playHistory.length}</div>
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

export default TrackList;
