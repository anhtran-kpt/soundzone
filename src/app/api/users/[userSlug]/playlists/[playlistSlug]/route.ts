import { getBanner } from "@/entities/playlist/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { userSlug, playlistSlug } = await params;
});
