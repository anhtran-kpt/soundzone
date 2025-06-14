import AlbumForm from "@/components/forms/album-form";
import { notFound } from "next/navigation";
import { artistActions } from "@/actions";
import { Metadata } from "next";

type Props = {
  params: Promise<{ artistSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { artistSlug } = await params;
  const artist = await artistActions.getBySlug(artistSlug);

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
  const artist = await artistActions.getBySlug(artistSlug);

  if (!artist) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <AlbumForm artistId={artist.id} />
    </div>
  );
}
