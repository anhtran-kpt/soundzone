import { getAlbumsAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api-handler";

export const GET = withApiHandler(async () => {
  return await getAlbumsAction();
});
