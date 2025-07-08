import {
  addTrackToPlaylistAction,
  removeTrackFromPlaylistAction,
} from "@/app/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const POST = withApiHandler(async (req: NextRequest, { params }) => {
  const { playlistId } = await params;
  const { trackId } = await req.json();

  return await addTrackToPlaylistAction(trackId, playlistId);
});

export const DELETE = withApiHandler(async (req: NextRequest, { params }) => {
  const { playlistId } = await params;
  const { trackId } = await req.json();

  return await removeTrackFromPlaylistAction(trackId, playlistId);
});
