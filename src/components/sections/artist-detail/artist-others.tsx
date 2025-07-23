"use client";

import ErrorMessage from "@/components/features/error-message";
import { NavLink } from "@/components/features/nav-link";
import SectionHeading from "@/components/ui/section-heading";
import { useOthers } from "@/entities/artist/queries";
import { CldImage } from "next-cloudinary";

export const ArtistOthers = ({ artistSlug }: { artistSlug: string }) => {
  const { data: artists, status, error } = useOthers(artistSlug);

  if (status === "pending") {
    return <ArtistOthersSkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <SectionHeading heading="Fans also like" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {artists.map((artist) => (
          <div key={artist.slug} className="space-y-4">
            <div className="relative rounded-full overflow-hidden aspect-square">
              <CldImage
                alt={artist.name}
                src={artist.imagePublicId}
                fill
                className="object-cover"
              />
            </div>
            <NavLink
              href={`/artists/${artist.slug}`}
              className="text-[calc(15rem/16)]"
            >
              {artist.name}
            </NavLink>
            <p className="text-muted-foreground text-[calc(13rem/16)]">
              Artist
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ArtistOthersSkeleton = () => {
  return (
    <section>
      <SectionHeading heading="Fans also like" />
    </section>
  );
};
