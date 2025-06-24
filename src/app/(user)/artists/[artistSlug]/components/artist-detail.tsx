"use client";

import CustomLink from "@/components/common/custom-link";
import TracksPopular from "./tracks-popular";
import ArtistBanner from "./artist-banner";
import { useFetchArtistBySlug } from "@/hooks/use-query/artist";
import { notFound } from "next/navigation";
import Discography from "./discography";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
  const { data, isError, error } = useFetchArtistBySlug(artistSlug);

  const artist = data?.data;

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!artist) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <ArtistBanner artist={artist} />
      <TracksPopular artistSlug={artistSlug} />
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Discography</h2>
          <CustomLink href={`/artists/${artist.slug}/discography`}>
            Show all
          </CustomLink>
        </div>
        <Discography artistSlug={artistSlug} />
      </section>
    </div>
  );
}
