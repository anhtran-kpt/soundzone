"use client";

import { EllipsisIcon, HeartIcon, PlayIcon } from "lucide-react";
import { Button } from "../ui/button";
import Icon from "../shared/icon";
import { FullTrack } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import ArtistNames from "./artist-names";
import Link from "next/link";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { CldImage } from "next-cloudinary";

interface TrackCardProps {
  track: FullTrack & {
    album: {
      title: string;
      slug: string;
      coverPublicId: string;
      releaseDate: Date;
    };
  };
}

export default function TrackCard({ track }: TrackCardProps) {
  const { playTrack } = useAudioPlayer();

  return (
    <div className="flex justify-between items-center hover:bg-muted rounded-md p-2 transition-colors duration-200 group">
      <div className="flex items-center gap-3 min-w-0">
        <div className="size-16 rounded-md overflow-hidden bg-muted flex-shrink-0 relative">
          {track.album.coverPublicId && (
            <CldImage
              src={track.album.coverPublicId}
              alt={track.title}
              fill
              aspectRatio="1:1"
              sizes="64px"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 group-hover:brightness-75"
            />
          )}
          <button
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:brightness-90 cursor-pointer"
            onClick={() => playTrack(track)}
          >
            <Icon icon={PlayIcon} fill="white" strokeWidth={0} />
          </button>
        </div>
        <div className="min-w-0 flex-1">
          <Link
            href={`/albums/${track.album.slug}`}
            className="font-medium text-sm truncate hover:text-primary"
          >
            {track.title}
          </Link>
          <ArtistNames artists={track.artists} />
          <span className="text-xs text-muted-foreground">
            {formatDistanceToNow(track.album.releaseDate, {
              addSuffix: true,
            })
              .charAt(0)
              .toUpperCase() +
              formatDistanceToNow(track.album.releaseDate, {
                addSuffix: true,
              }).slice(1)}
          </span>
        </div>
      </div>
      <div className="space-x-2">
        <Button variant="ghost" size="icon">
          <Icon icon={HeartIcon} />
        </Button>
        <Button variant="ghost" size="icon">
          <Icon icon={EllipsisIcon} />
        </Button>
      </div>
    </div>
  );
}
