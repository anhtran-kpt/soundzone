import { getTracksAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api/api-handler";

export const GET = withApiHandler(async () => {
  return await getTracksAction();
});
