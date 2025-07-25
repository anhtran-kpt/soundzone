import { getTracks } from "@/entities/album/actions";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { albumSlug } = await params;

  return await getTracks(albumSlug);
});
