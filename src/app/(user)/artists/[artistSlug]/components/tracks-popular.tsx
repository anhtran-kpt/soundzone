import { Icon } from "@/components/common";
import CustomLink from "@/components/common/custom-link";
import { Explicit } from "@/components/shared";
import PlayButton from "@/components/shared/play-button";
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
import { formatDuration } from "@/lib/utils";
import { Track } from "@/types";
import {
  CirclePlusIcon,
  EllipsisIcon,
  ImportIcon,
  ListPlusIcon,
} from "lucide-react";
import { CldImage } from "next-cloudinary";

interface TracksPopularProps {
  tracks: Track[];
}

export default function TracksPopular({ tracks }: TracksPopularProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Popular</h2>
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
                <h3 className="text-sm font-medium">{track.title}</h3>
                <div className="flex items-center gap-1.5">
                  {track.isExplicit && <Explicit />}
                  {track.artists.map(({ artist }) => (
                    <CustomLink
                      href={`/artists/${artist.slug}`}
                      key={artist.id}
                      className="text-xs"
                    >
                      {artist.name}
                    </CustomLink>
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
                <Icon icon={CirclePlusIcon} className="size-4" />
              </Button>
            </div>
            <div className="text-muted-foreground flex items-center gap-2 justify-end">
              <div>{formatDuration(track.duration)}</div>
              <div className="invisible group-hover:visible">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Icon icon={EllipsisIcon} className="size-4" />
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
                          <Icon
                            stroke="currentColor"
                            icon={ListPlusIcon}
                            className="size-4 mr-2"
                          />
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
                        <Icon
                          icon={ImportIcon}
                          className="size-4 mr-2"
                          color="currentColor"
                        />
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
      <Button variant="link" className="justify-start">
        Show more
      </Button>
    </div>
  );
}
