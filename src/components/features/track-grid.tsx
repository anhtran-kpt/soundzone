"use client";

import { TGetAlbumTracks } from "@/entities/album/album-types";
import { cn, formatDuration } from "@/lib/utils";
import ExplicitIcon from "../ui/explicit-icon";
import { NavLink } from "./nav-link";
import { IconButton } from "./icon-button";
import {
  Clock3Icon,
  EllipsisIcon,
  PlayIcon,
  PlusCircleIcon,
} from "lucide-react";
import { Title } from "../ui/title";
import { TrackCover } from "../ui/track-cover";
import { useAudioPlayer, useIsPlaying } from "@/hooks";
import { WaveformIcon } from "../ui/wave-form";

interface TrackGridProps {
  type: "album" | "popular" | "playlist";
  tracks: TGetAlbumTracks;
}

export const TrackGrid = ({ type, tracks }: TrackGridProps) => {
  const gridClass =
    "grid w-full items-center grid-cols-[3rem_1fr_9rem_6rem_4rem_3rem]";

  const { playTrack, currentTrack } = useAudioPlayer();
  const isPlaying = useIsPlaying();

  return (
    <div className="space-y-1 w-full">
      {type !== "popular" && (
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
      )}
      {tracks.map((track, trackIndex) => {
        const isActive = currentTrack?.id === track.id;
        const length = track.artists.length;
        const trackTitle =
          type === "popular" && length > 0
            ? `${track.title} (feat. ${track.artists.reduce(
                (acc, artist, index) => {
                  if (index < length - 1) {
                    return acc + artist.name + ", ";
                  }
                  return acc + artist.name;
                },
                ""
              )})`
            : track.title;

        return (
          <div
            key={track.slug}
            className={cn(
              gridClass,
              "py-2 pr-6 items-center group hover:bg-muted rounded-sm text-muted-foreground hover:text-foreground"
            )}
          >
            {isPlaying && isActive ? (
              <WaveformIcon />
            ) : (
              <div className="flex justify-center items-center text-base font-semibold">
                <span className="group-hover:hidden">{trackIndex + 1}</span>
                <IconButton
                  icon={PlayIcon}
                  size="sm"
                  onClick={() => playTrack(track)}
                  iconClassName="fill-foreground stroke-0"
                  className="hidden group-hover:block"
                />
              </div>
            )}

            <div className="flex gap-1">
              {type === "popular" && (
                <TrackCover alt={track.title} publicId={track.coverPublicId} />
              )}
              <div className="flex flex-col gap-0.5 pl-2 justify-center">
                <Title title={trackTitle} isActive={isActive} />
                <div className="flex gap-1.5 items-center">
                  {track.isExplicit && <ExplicitIcon />}
                  {type !== "popular" &&
                    track.artists.map((artist, artistIndex) => (
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
        );
      })}
    </div>
  );
};
