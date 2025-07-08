import { searchTracksAction } from "@/app/actions/search";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");
  const limit = parseInt(searchParams.get("limit") || "5");
  const offset = parseInt(searchParams.get("offset") || "0");

  if (!query || query.trim().length === 0) {
    return { tracks: [], total: 0 };
  }

  return await searchTracksAction(query, limit, offset);
});
