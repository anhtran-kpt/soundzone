import { albumActions } from "@/actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import AlbumForm from "../../../../components/album-form";

type Props = {
  params: Promise<{ artistSlug: string; albumSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { albumSlug } = await params;
  const album = await albumActions.getBySlug(albumSlug);

  if (!album) {
    return { title: "Album not found" };
  }

  return {
    title: `Edit Album - ${album.title}`,
    description: `Edit Album - ${album.title}`,
  };
}

export default async function EditAlbumPage({ params }: Props) {
  const { albumSlug } = await params;

  const album = await albumActions.getBySlug(albumSlug);

  if (!album) {
    return notFound();
  }

  return (
    <div>
      <AlbumForm album={album} mode="edit" artistId={album.artistId} />
    </div>
  );
}
