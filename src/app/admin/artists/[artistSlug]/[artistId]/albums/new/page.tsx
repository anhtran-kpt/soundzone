import AlbumForm from "@/components/forms/album/album-form";
import { notFound } from "next/navigation";
import { getArtistById } from "@/lib/services/artist";
import { Metadata } from "next";
import ArtistBanner from "@/components/sections/artist-banner";

type Props = {
  params: Promise<{ artistId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { artistId } = await params;
  const artist = await getArtistById(artistId);

  if (!artist) {
    return { title: "Artist not found" };
  }

  return {
    title: `Create new album for ${artist.name}`,
    description: `Create new album for ${artist.name}`,
  };
}

export default async function NewAlbumPage({ params }: Props) {
  const { artistId } = await params;
  const artist = await getArtistById(artistId);

  if (!artist) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-16">
      <ArtistBanner artist={artist} />
      <AlbumForm artist={artist} />
    </div>
  );
}
