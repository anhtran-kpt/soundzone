import {
  addTrackToPlaylistAction,
  removeTrackFromPlaylistAction,
} from "@/app/actions";
import { withApiHandler } from "@/lib/api-handler";
import { NextRequest } from "next/server";

export const POST = withApiHandler(async (req: NextRequest, { params }) => {
  const { playlistSlug } = await params;
  const { trackSlug } = await req.json();

  return await addTrackToPlaylistAction(trackSlug, playlistSlug);
});

export const DELETE = withApiHandler(async (req: NextRequest, { params }) => {
  const { playlistSlug } = await params;
  const { trackSlug } = await req.json();

  return await removeTrackFromPlaylistAction(trackSlug, playlistSlug);
});
