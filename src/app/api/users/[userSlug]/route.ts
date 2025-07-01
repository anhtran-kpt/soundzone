import { getUserBySlugAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api-handler";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { userSlug } = await params;
  return await getUserBySlugAction(userSlug);
});
