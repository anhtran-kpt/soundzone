"use server";

import { getFollowers } from "../../../entities/artist/actions";
import { getArtistInfo } from "../../../entities/artist/actions/get-info";
import { getDiscography } from "../../../entities/artist/actions/get-discography";
import { getPopularTracks } from "../../../entities/artist/actions/get-popular-tracks";
import { isEntityExists } from "../../../entities/shared/is-entity-exists";
import { withErrorHandler } from "../shared/with-error-handler";

export const getArtistDetailPage = withErrorHandler(
  async (artistSlug: string) => {
    await isEntityExists("artist", "slug", artistSlug, {
      logContext: "[GET_ARTIST_DETAIL_PAGE]",
    });

    const [followers, artistInfo, popularTracks, discography] =
      await Promise.all([
        getFollowers(artistSlug),
        getArtistInfo(artistSlug),
        getPopularTracks(artistSlug, { page: 1, limit: 5 }),
        getDiscography(artistSlug, { page: 1, limit: 5 }),
      ]);

    return {
      banner: {
        name: artistInfo.name,
        bannerPublicId: artistInfo.bannerPublicId,
        followers,
      },
      actions: {
        artistId: artistInfo.id,
      },
      popularTracks,
      discography,
      about: {
        name: artistInfo.name,
        followers,
        imagePublicId: artistInfo.imagePublicId,
        description: artistInfo.description,
      },
    };
  }
);
