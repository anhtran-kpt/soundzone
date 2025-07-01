import { createPlaylistAction, getPlaylistsAction } from "@/app/actions";
import { withApiHandler } from "@/lib/api-handler";
import { getCurrentUser } from "@/lib/next-auth";

export const GET = withApiHandler(async () => {
  return await getPlaylistsAction();
});

export const POST = withApiHandler(async () => {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error(`User hasn't signed in yet`);
  }

  return await createPlaylistAction(user.id);
});
