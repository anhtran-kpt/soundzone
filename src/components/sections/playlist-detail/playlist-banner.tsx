"use client";

import ErrorMessage from "@/components/features/error-message";
import { NavLink } from "@/components/features/nav-link";
import Dot from "@/components/ui/dot";
import { useBanner } from "@/entities/playlist/queries";
import { useImageGradient } from "@/hooks/use-image-gradient";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import pretterMs from "pretty-ms";
import { formatName } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PlaylistDialog } from "@/components/features/playlist-dialog";
import { FALLBACK_IMAGE } from "@/lib/constants";
import pluralize from "pluralize";

export const PlaylistBanner = ({
  userSlug,
  playlistSlug,
}: {
  userSlug: string;
  playlistSlug: string;
}) => {
  const {
    data: playlist,
    status,
    error,
  } = useBanner({ userSlug, playlistSlug });

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { gradient } = useImageGradient(imageUrl);

  if (status === "pending") {
    return <PlaylistBannerSkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="relative h-80">
      <div
        className="absolute inset-0 -mx-12 -mt-24 bg-gradient-to-t from-[var(--tw-gradient-from)] via-[var(--tw-gradient-via)] to-[var(--tw-gradient-to)]"
        style={
          {
            "--tw-gradient-from": gradient?.from,
            "--tw-gradient-via": gradient?.via,
            "--tw-gradient-to": gradient?.to,
          } as React.CSSProperties
        }
      />
      <div className="flex gap-5 absolute left-0 bottom-6 items-end">
        <div className="relative size-48 rounded-md overflow-hidden">
          <CldImage
            src={playlist.coverPublicId ?? FALLBACK_IMAGE}
            alt={playlist.title}
            fill
            sizes="192px"
            className="object-cover rounded-md"
            onLoad={(e) => setImageUrl((e.target as HTMLImageElement).src)}
            priority
          />
        </div>
        <div className="flex flex-col">
          <p className="font-medium">
            {playlist.isPublic ? "Public" : "Private"} Playlist
          </p>
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
            <NavLink href={`/users/${userSlug}`} className="text-sm">
              {playlist.user?.name}
            </NavLink>
            <span>
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
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PlaylistBannerSkeleton = () => {
  return <section></section>;
};
