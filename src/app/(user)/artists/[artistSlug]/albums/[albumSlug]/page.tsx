import { AlbumActions } from "@/components/sections/album-detail/album-actions";
import { AlbumBanner } from "@/components/sections/album-detail/album-banner";
import { AlbumDiscography } from "@/components/sections/album-detail/album-discography";
import { AlbumTracks } from "@/components/sections/album-detail/album-tracks";

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
