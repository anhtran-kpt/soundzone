import { AlbumBanner } from "@/components/sections/album-banner";

export default async function AlbumDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string; albumSlug: string }>;
}) {
  const { artistSlug, albumSlug } = await params;

  return (
    <>
      <AlbumBanner artistSlug={artistSlug} albumSlug={albumSlug} />
    </>
  );
}
