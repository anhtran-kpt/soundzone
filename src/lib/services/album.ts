import { emptyToNull } from "../helpers";
import db from "../prisma/db";
import { fullAlbumInclude } from "../prisma/presets";
import { FullAlbum } from "../types";
import { CreateAlbumInput } from "../validations";
import { ReleaseType } from "@/app/generated/prisma";

export async function getAlbumById(id: string): Promise<FullAlbum | null> {
  return await db.album.findUnique({
    where: { id },
    include: fullAlbumInclude,
  });
}

export async function getAlbumsByArtistId(
  artistId: string
): Promise<FullAlbum[]> {
  return await db.album.findMany({
    where: { artistId },
    include: fullAlbumInclude,
  });
}

export async function getAllAlbums(): Promise<FullAlbum[]> {
  return await db.album.findMany({
    orderBy: { createdAt: "desc" },
    include: fullAlbumInclude,
  });
}

export async function createAlbum(data: CreateAlbumInput): Promise<void> {
  const {
    title,
    description,
    releaseDate,
    coverPublicId,
    bannerPublicId,
    artistId,
    tracks,
  } = data;

  return await db.$transaction(async (tx) => {
    const albumSlug = await tx.album.generateSlug(title);

    const album = await tx.album.create({
      data: {
        title,
        slug: albumSlug,
        description: emptyToNull(description),
        releaseType:
          tracks.length === 1 ? ReleaseType.SINGLE : ReleaseType.ALBUM,
        releaseDate,
        coverPublicId,
        bannerPublicId,
        artistId,
      },
    });

    await Promise.all(
      tracks.map(async (trackData, trackIndex) => {
        const trackSlug = await tx.track.generateSlug(trackData.title);

        const track = await tx.track.create({
          data: {
            title: trackData.title,
            slug: trackSlug,
            duration: trackData.duration,
            audioPublicId: trackData.audioPublicId,
            trackNumber: trackIndex + 1,
            isExplicit: trackData.isExplicit,
            lyrics: emptyToNull(trackData.lyrics),
            albumId: album.id,
          },
        });

        if (trackData.artists.length > 0) {
          const trackArtists = trackData.artists.filter(
            (artistInput) =>
              artistInput.id !== "" && artistInput.id !== undefined
          );

          const credits = trackData.artists.flatMap(
            (artistInput, artistIndex) =>
              artistInput.roles.map((role) =>
                artistInput.id
                  ? {
                      trackId: track.id,
                      artistId: artistInput.id,
                      name: artistInput.name,
                      role,
                      order: artistIndex + 1,
                    }
                  : {
                      trackId: track.id,
                      name: artistInput.name,
                      role,
                      order: artistIndex + 1,
                    }
              )
          );

          console.log(credits);

          await tx.trackArtist.createMany({
            data: trackArtists.map((artist, artistIndex) => ({
              trackId: track.id,
              artistId: artist.id!,
              order: artistIndex + 1,
            })),
          });

          await tx.credit.createMany({
            data: credits,
          });
        }

        if (trackData.genreIds.length > 0) {
          await tx.trackGenre.createMany({
            data: trackData.genreIds.map((genreId) => ({
              trackId: track.id,
              genreId,
            })),
          });
        }
      })
    );
  });
}
