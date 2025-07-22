"use client";

import { useTracks } from "@/entities/album/queries";
import ErrorMessage from "../features/error-message";
import { TrackCover } from "../ui/track-cover";
import { Title } from "../ui/title";
import ExplicitIcon from "../ui/explicit-icon";
import { NavLink } from "../features/nav-link";

interface AlbumTracksProps {
  albumSlug: string;
  artistSlug: string;
}

export const AlbumTracks = ({ albumSlug, artistSlug }: AlbumTracksProps) => {
  const { data: tracks, error, status } = useTracks({ albumSlug, artistSlug });

  if (status === "pending") {
    return <AlbumTracksSkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <ul role="list" className="space-y-1 w-full">
        {tracks.map((track, trackIndex) => (
          <li
            key={track.slug}
            className="py-2 flex items-center hover:bg-muted rounded-sm"
          >
            <div className="w-14 text-center">
              <span className="text-base font-semibold text-muted-foreground">
                {trackIndex + 1}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <Title title={track.title} />
              <div className="flex gap-1.5 items-center">
                {!track.isExplicit && <ExplicitIcon />}
                {track.artists.map((artist, artistIndex) => (
                  <span key={artist.slug}>
                    <NavLink
                      href={`/artists/${artist.slug}`}
                      className="text-sm"
                    >
                      {artist.name}
                    </NavLink>
                    {artistIndex < track.artists.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const AlbumTracksSkeleton = () => {
  return <section></section>;
};
