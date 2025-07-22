import { AlbumActions } from "@/components/sections/album-actions";
import { AlbumBanner } from "@/components/sections/album-banner";
import { AlbumDiscography } from "@/components/sections/album-discography";
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
      <AlbumActions artistSlug={artistSlug} albumSlug={albumSlug} />
      <AlbumTracks artistSlug={artistSlug} albumSlug={albumSlug} />
      <AlbumDiscography artistSlug={artistSlug} albumSlug={albumSlug} />
    </>
  );
}
