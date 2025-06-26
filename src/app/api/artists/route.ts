import { getArtistsAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api-handler";

export const GET = withApiHandler(async () => {
  const data = await getArtistsAction();

  return data;
});
