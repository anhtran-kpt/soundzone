import { getPlaylistAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { playlistId } = await params;

  return await getPlaylistAction(playlistId);
});
