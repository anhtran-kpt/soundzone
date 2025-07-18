import { getUserSidebar } from "@/app/actions/user/get-user-sidebar";
import { withApiHandler } from "@/lib/api/api-handler";
import { NextRequest } from "next/server";

export const GET = withApiHandler(async (req: NextRequest, { params }) => {
  const { userSlug } = await params;

  return await getUserSidebar(userSlug);
});
