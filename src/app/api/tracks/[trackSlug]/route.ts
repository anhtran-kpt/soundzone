import { getTrackBySlugAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api-handler";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { trackSlug } = await params;

  return await getTrackBySlugAction(trackSlug);
});
