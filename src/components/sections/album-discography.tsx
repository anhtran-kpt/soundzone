"use client";

import { useDiscography } from "@/entities/album/queries";
import { NavLink } from "../features/nav-link";
import SectionHeading from "../ui/section-heading";
import ErrorMessage from "../features/error-message";
import { Skeleton } from "../ui/skeleton";

export const AlbumDiscography = ({
  artistSlug,
  albumSlug,
}: {
  albumSlug: string;
  artistSlug: string;
}) => {
  const { data, status, error } = useDiscography({ albumSlug, artistSlug });

  if (status === "pending") {
    return <AlbumDiscographySkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  if (data.albums.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="flex justify-between items-center">
        <SectionHeading heading={`More by ${data.artistName}`} />
        {data.hasNext && (
          <NavLink href={`/artists/${artistSlug}/discography`}>
            All discography
          </NavLink>
        )}
      </div>
    </section>
  );
};

export const AlbumDiscographySkeleton = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <Skeleton className="w-48 h-8" />
        <Skeleton className="w-12 h-4" />
      </div>
    </section>
  );
};
