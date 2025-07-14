import { AlbumDetail } from "@/components/user/artist";

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ albumSlug: string }>;
}) {
  return <AlbumDetail albumSlug={albumSlug} />;
}
