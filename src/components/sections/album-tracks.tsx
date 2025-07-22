"use client";

import { useTracks } from "@/entities/album/queries";
import ErrorMessage from "../features/error-message";
import { Title } from "../ui/title";
import ExplicitIcon from "../ui/explicit-icon";
import { NavLink } from "../features/nav-link";
import { cn, formatDuration } from "@/lib/utils";
import { IconButton } from "../features/icon-button";
import {
  Clock3Icon,
  EllipsisIcon,
  PlayIcon,
  PlusCircleIcon,
} from "lucide-react";

interface AlbumTracksProps {
  albumSlug: string;
  artistSlug: string;
}

export const AlbumTracks = ({ albumSlug, artistSlug }: AlbumTracksProps) => {
  const gridClass =
    "grid w-full items-center grid-cols-[3rem_1fr_9rem_6rem_4rem_3rem]";
  const { data: tracks, error, status } = useTracks({ albumSlug, artistSlug });

  if (status === "pending") {
    return <AlbumTracksSkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <div className="space-y-1 w-full">
        <div
          className={cn(
            gridClass,
            "text-muted-foreground font-medium pb-2 mb-4 border-b border-border pr-6"
          )}
        >
          <div className="text-center">#</div>
          <div className="pl-2 text-left">Title</div>
          <div className="text-right">Plays</div>
          <div className="text-right"></div>
          <div className="flex justify-end">
            <Clock3Icon size={16} />
          </div>
          <div className=""></div>
        </div>
        {tracks.map((track, trackIndex) => (
          <div
            key={track.slug}
            className={cn(
              gridClass,
              "py-2 pr-6 items-center group hover:bg-muted rounded-sm text-muted-foreground hover:text-foreground"
            )}
          >
            <div className="flex justify-center items-center text-base font-semibold">
              <span className="group-hover:hidden">{trackIndex + 1}</span>
              <IconButton
                icon={PlayIcon}
                size="sm"
                iconClassName="fill-foreground stroke-0"
                className="hidden group-hover:block"
              />
            </div>

            <div className="flex flex-col gap-0.5 pl-2">
              <Title title={track.title} />
              <div className="flex gap-1.5 items-center">
                {track.isExplicit && <ExplicitIcon />}
                {track.artists.map((artist, artistIndex) => (
                  <span key={artist.slug}>
                    <NavLink
                      href={`/artists/${artist.slug}`}
                      className="text-[calc(13rem/16)]"
                    >
                      {artist.name}
                    </NavLink>
                    {artistIndex < track.artists.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">{track.plays}</div>

            <div className="invisible group-hover:visible text-right">
              <IconButton
                icon={PlusCircleIcon}
                className="text-current"
                size="sm"
                tooltipContent={
                  <>
                    Add to <strong>Liked Songs</strong>
                  </>
                }
              />
            </div>

            <div className="text-right">{formatDuration(track.duration)}</div>

            <div className="invisible group-hover:visible text-right">
              <IconButton
                icon={EllipsisIcon}
                className="text-current"
                tooltipContent={
                  <>
                    More options for <strong>{track.title}</strong>
                  </>
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const AlbumTracksSkeleton = () => {
  return <section></section>;
};
