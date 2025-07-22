import { AlbumActions } from "@/components/sections/album-actions";
import { AlbumBanner } from "@/components/sections/album-banner";
import { AlbumTracks } from "@/components/sections/album-tracks";

export default async function AlbumDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string; albumSlug: string }>;
}) {
  const { artistSlug, albumSlug } = await params;

  return (
    <>
      <AlbumBanner artistSlug={artistSlug} albumSlug={albumSlug} />
      <AlbumActions />
      <AlbumTracks artistSlug={artistSlug} albumSlug={albumSlug} />
    </>
  );
}
