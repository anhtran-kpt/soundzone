"use server";

import db from "@/lib/prisma/db";
import { getArtistInfo } from "../artist/get-artist-info";
import { getDiscography } from "../artist/get-discography";
import { getPopularTracks } from "../artist/get-popular-tracks";

export const getArtistDetailPage = async (artistSlug: string) => {
  try {
    const artist = await db.artist.findUnique({
      where: {
        slug: artistSlug,
      },
    });

    if (!artist) {
      throw new Error("[GET_ARTIST_DETAIL_PAGE]: Artist not found!");
    }

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
  } catch (error) {
    console.error("[GET ARTIST DETAIL PAGE]", error);

    throw new Error("[GET_ARTIST_DETAIL_PAGE]: Something went wrong!");
  }
};
