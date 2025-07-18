"use server";

import { getArtistInfo } from "../artist/get-artist-info";
import { getDiscography } from "../artist/get-discography";
import { getPopularTracks } from "../artist/get-popular-tracks";
import { isEntityExists } from "../shared/is-entity-exists";
import { withErrorHandler } from "../shared/with-error-handler";

export const getArtistDetailPage = withErrorHandler(
  async (artistSlug: string) => {
    await isEntityExists("artist", "slug", artistSlug, {
      logContext: "[GET_ARTIST_DETAIL_PAGE]",
    });

    const [artistInfo, popular, discography] = await Promise.all([
      getArtistInfo(artistSlug),
      getPopularTracks(artistSlug, { page: 1, limit: 5 }),
      getDiscography(artistSlug, { page: 1, limit: 5 }),
    ]);

    return {
      banner: {
        name: artistInfo.name,
        bannerPublicId: artistInfo.bannerPublicId,
        followers: artistInfo.followers,
      },
      actions: {
        artistId: artistInfo.id,
      },
      popular,
      discography,
      about: {
        name: artistInfo.name,
        followers: artistInfo.followers,
        imagePublicId: artistInfo.imagePublicId,
        description: artistInfo.description,
      },
    };
  }
);
