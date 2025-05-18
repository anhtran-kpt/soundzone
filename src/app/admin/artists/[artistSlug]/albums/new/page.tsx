import AlbumForm from "@/app/admin/artists/components/album-form";
import { notFound } from "next/navigation";
import { artistService } from "@/services/server/artist";
import { Metadata } from "next";

type Props = {
  params: Promise<{ artistSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { artistSlug } = await params;
  const artist = await artistService.getBySlug(artistSlug);

  if (!artist) {
    return { title: "Artist not found" };
  }

  return {
    title: `Create new album for ${artist.name}`,
    description: `Create new album for ${artist.name}`,
  };
}

export default async function NewAlbumPage({ params }: Props) {
  const { artistSlug } = await params;
  const artist = await artistService.getBySlug(artistSlug);

  if (!artist) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <AlbumForm artistId={artist.id} mode="create" />
    </div>
  );
}
