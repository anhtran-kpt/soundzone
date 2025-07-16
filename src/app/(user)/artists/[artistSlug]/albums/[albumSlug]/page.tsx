import AlbumDetail from "@/components/pages/album-detail";

export default async function AlbumDetailPage({
  params,
}: {
  params: Promise<{ albumSlug: string }>;
}) {
  const { albumSlug } = await params;
  return <AlbumDetail albumSlug={albumSlug} />;
}
