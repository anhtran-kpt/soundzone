import { getAlbumAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { albumId } = await params;

  return await getAlbumAction(albumId);
});
