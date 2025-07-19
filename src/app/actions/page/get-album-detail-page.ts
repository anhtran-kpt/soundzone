"use server";

import { isEntityExists } from "../../../entities/shared/is-entity-exists";
import { withErrorHandler } from "../shared/with-error-handler";

// export const getAlbumDetailPage = withErrorHandler(
//   async (artistSlug: string) => {
//     await isEntityExists("artist", "slug", artistSlug, {
//       logContext: "[GET_ARTIST_DETAIL_PAGE]",
//     });

//     const [artistInfo, popular, discography] = await Promise.all([
//       getArtistInfo(artistSlug),
//       getPopularTracks(artistSlug, { page: 1, limit: 5 }),
//       getDiscography(artistSlug, { page: 1, limit: 5 }),
//     ]);

//     return {
//       banner: {
//         name: artistInfo.name,
//         bannerPublicId: artistInfo.bannerPublicId,
//         followers: artistInfo.followers,
//       },
//       actions: {
//         artistId: artistInfo.id,
//       },
//       popular,
//       discography,
//       about: {
//         name: artistInfo.name,
//         followers: artistInfo.followers,
//         imagePublicId: artistInfo.imagePublicId,
//         description: artistInfo.description,
//       },
//     };
//   }
// );
