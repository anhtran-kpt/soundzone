"use client";

import { Playlist } from "@/types";
import { CldImage } from "next-cloudinary";
import Dot from "./dot";
import pretterMs from "pretty-ms";
import { useMemo, useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui";
import { formatName } from "@/lib/utils";
import pluralize from "pluralize";
import { Music4Icon, PenBoxIcon } from "lucide-react";
import { PlaylistDialog } from "@/components/user/playlist/playlist-dialog";
import { FALLBACK_PUBLIC_ID } from "@/lib/constants";

interface BannerProps {
  playlist: Playlist;
}

export function PlaylistBanner({ playlist }: BannerProps) {
  const fac = useMemo(() => new FastAverageColor(), []);

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [bannerColor, setBannerColor] = useState<string>("#aaa");

  useEffect(() => {
    if (imageUrl) {
      fac
        .getColorAsync(imageUrl, {
          algorithm: "sqrt",
          ignoredColor: [
            [255, 255, 255, 255],
            [0, 0, 0, 255],
          ],
        })
        .then((color) => {
          setBannerColor(color.hex);
        });
    }
  }, [imageUrl, fac]);

  return (
    <div className="relative h-80">
      <div
        className="absolute inset-0 -mx-12 -mt-24 bg-gradient-to-b from-[var(--tw-gradient-from)] to-[var(--tw-gradient-to)]"
        style={
          bannerColor
            ? {
                "--tw-gradient-from": bannerColor,
                "--tw-gradient-to": `${bannerColor}00`,
              }
            : undefined
        }
      />
      <div className="flex gap-5 absolute left-0 bottom-6 items-end">
        <div className="relative size-48 rounded-lg overflow-hidden">
          <CldImage
            src={playlist.coverPublicId ?? FALLBACK_PUBLIC_ID!}
            alt={playlist.title}
            fill
            sizes="192px"
            className="object-cover rounded-lg"
            onLoad={(e) => setImageUrl((e.target as HTMLImageElement).src)}
            priority
          />
          <Music4Icon className="size-12 stroke-current absolute top-1/2 left-1/2 -translate-1/2" />
        </div>
        <div className="flex flex-col">
          <h3>{playlist.isPublic ? "Public" : "Private"} Playlist</h3>
          <PlaylistDialog
            title={playlist.title}
            description={playlist.description}
            coverPublicId={playlist.coverPublicId}
          />
          <div className="inline-flex items-center gap-2">
            <div className="relative size-8 rounded-full">
              {playlist.user?.imagePublicId ? (
                <CldImage
                  src={playlist.user?.imagePublicId}
                  alt={playlist.title}
                  fill
                  sizes="32px"
                  className="object-cover rounded-full"
                />
              ) : (
                <Avatar>
                  <AvatarFallback>
                    {formatName(playlist.user?.name || "")}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
            <Link
              className="font-medium"
              href={`/users/${playlist.user?.slug}/playlists/${playlist.slug}`}
            >
              {playlist.user?.name}
            </Link>
            {playlist.tracks.length > 0 && (
              <>
                <Dot />
                <span>
                  {`${playlist.tracks.length} ${pluralize(
                    "song",
                    playlist.tracks.length
                  )}, ${pretterMs(playlist.totalDuration * 1000)}`}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
