import { followArtist, isFollowing, unfollowArtist } from "@/features/artist";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const POST = withApiHandler(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;

  return await followArtist(artistSlug);
});

export const DELETE = withApiHandler(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;

  return await unfollowArtist(artistSlug);
});

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;

  return await isFollowing(artistSlug);
});
