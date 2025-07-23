import { unfollow } from "@/entities/artist/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const DELETE = withApiHandler(async (req: NextRequest, { params }) => {
  const { artistSlug } = await params;

  return await unfollow(artistSlug);
});
