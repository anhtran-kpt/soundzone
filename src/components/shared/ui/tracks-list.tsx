"use client";

import { Track } from "@/types";
import {
  CirclePlusIcon,
  EllipsisIcon,
  ImportIcon,
  ListPlusIcon,
} from "lucide-react";
import { CldImage } from "next-cloudinary";
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
import { formatDuration } from "@/lib/utils";
import PlayButton from "@/components/shared/ui/play-button";
import Explicit from "./explicit";
import { useCurrentTrack, useIsPlaying } from "@/hooks";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TracksProps {
  tracks: Track[];
}

export function TracksList({ tracks }: TracksProps) {
  const currentTrack = useCurrentTrack();
  const isPlaying = useIsPlaying();

  return (
    <ul role="list" className="space-y-2">
      {tracks.map((track, index) => (
        <li
          key={track.id}
          className="flex gap-6 px-4 py-2 rounded-sm hover:bg-muted items-center group"
        >
          <div className="w-6 flex items-center justify-center">
            <span className="text-right text-muted-foreground text-base font-semibold group-hover:hidden">
              {index + 1}
            </span>
            <PlayButton track={track} />
          </div>
          <div className="grow flex gap-3 items-center">
            <div className="relative size-12">
              <CldImage
                src={track.album.coverPublicId}
                alt={track.title}
                fill
                className="rounded-md object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3
                className={cn(
                  "text-sm font-medium",
                  currentTrack?.id === track.id && "text-primary"
                )}
              >
                {track.title}
              </h3>
              <div className="flex items-center gap-1.5">
                {track.isExplicit && <Explicit />}
                {track.artists.map(({ artist }) => (
                  <Button asChild variant="link" type="button" key={artist.id}>
                    <Link
                      href={`/artists/${artist.slug}`}
                      key={artist.id}
                      className="text-xs"
                    >
                      {artist.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="text-muted-foreground w-32">
            {/* {track.playHistory.length} */}
          </div>
          <div>
            <Button
              variant="ghost"
              size="icon"
              className="invisible group-hover:visible"
            >
              <CirclePlusIcon className="size-4" />
            </Button>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 justify-end">
            <div>{formatDuration(track.duration)}</div>
            <div className="invisible group-hover:visible">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <EllipsisIcon className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56"
                  side="bottom"
                  align="start"
                >
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
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
