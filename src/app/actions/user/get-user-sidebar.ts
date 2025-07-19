"use server";

import { isEntityExists } from "../../../entities/shared/is-entity-exists";
import { withErrorHandler } from "../shared/with-error-handler";
import { getFollowingArtists } from "./get-following-artists";
import { getPlaylists } from "./get-playlists";

export const getUserSidebar = withErrorHandler(async (userSlug: string) => {
  await isEntityExists("user", "slug", userSlug, {
    logContext: "[GET_USER_SIDEBAR]",
  });

  const [playlists, followingArtists] = await Promise.all([
    getPlaylists(userSlug),
    getFollowingArtists(userSlug),
  ]);

  return {
    playlists,
    followingArtists,
  };
});
