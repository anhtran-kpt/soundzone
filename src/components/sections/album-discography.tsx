"use client";

import { useDiscography } from "@/entities/album/queries";
import { NavLink } from "../features/nav-link";
import SectionHeading from "../ui/section-heading";
import ErrorMessage from "../features/error-message";

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

  return (
    <section>
      <div className="flex justify-between items-center">
        <SectionHeading heading="More by" />
        <NavLink href={`/artists/${artistSlug}/discography`}>
          All discography
        </NavLink>
      </div>
    </section>
  );
};

export const AlbumDiscographySkeleton = () => {
  return <section></section>;
};
