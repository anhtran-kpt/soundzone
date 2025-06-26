import { getGenresAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api-handler";

export const GET = withApiHandler(async () => {
  return await getGenresAction();
});
