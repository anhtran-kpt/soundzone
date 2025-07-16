import { getAlbumDetailPage } from "@/features/album/album-actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { artistSlug, albumSlug } = await params;
  return await getAlbumDetailPage(artistSlug, albumSlug);
});
