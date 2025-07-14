import { Skeleton } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useArtistInfo } from "@/features/artist/artist-queries";
import { useCurrentTrack, useIsPlaying } from "@/hooks";
import { FollowButton } from "@/new-components/features/follow-button";
import { EllipsisIcon, PauseIcon, PlayIcon, ShuffleIcon } from "lucide-react";

export const ActionsSection = ({ artistSlug }: { artistSlug: string }) => {
  const { data: artist, isLoading } = useArtistInfo(artistSlug);
  const currentTrack = useCurrentTrack();
  const isPlaying = useIsPlaying();

  if (isLoading || !artist) {
    return <ActionsSectionSkeleton />;
  }

  return (
    <section className="flex gap-6 items-center relative">
      <Button type="button" size="icon" className="rounded-full size-12">
        {currentTrack?.album.artistId === artist.id && isPlaying ? (
          <PauseIcon strokeWidth={0} fill="currentColor" className="size-6" />
        ) : (
          <PlayIcon strokeWidth={0} fill="currentColor" className="size-6" />
        )}
      </Button>
      <ShuffleIcon />
      <FollowButton artistSlug={artistSlug} />
      <EllipsisIcon />
    </section>
  );
};

export const ActionsSectionSkeleton = () => {
  return (
    <section className="flex gap-6 items-center py-6 relative">
      <Skeleton className="rounded-full size-12" />
      <Skeleton className="rounded-full size-6" />
      <Skeleton className="rounded-full size-6" />
      <Skeleton className="rounded-full size-6" />
    </section>
  );
};
