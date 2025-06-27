"use client";

import CustomLink from "@/components/common/custom-link";
import TracksPopular from "./tracks-popular";
import ArtistBanner from "./artist-banner";
import { useGetArtistBySlug } from "@/hooks";
import { notFound } from "next/navigation";
import Discography from "./discography";

export default function ArtistDetail({ artistSlug }: { artistSlug: string }) {
  const { data: artist, isError, error } = useGetArtistBySlug(artistSlug);

  console.log(artist);

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!artist) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <ArtistBanner artist={artist} />
      <TracksPopular tracks={artist.tracks} />
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Discography</h2>
          <CustomLink href={`/artists/${artist.slug}/discography`}>
            Show all
          </CustomLink>
        </div>
        <Discography
          popularRelease={artist.albums}
          albumsByType={artist.albumsByType}
        />
      </section>
    </div>
  );
}
