import db from "@/lib/prisma/db";
import { emptyToNull } from "@/lib/helpers";
import { CreateAlbumRequest } from "@/lib/validations";
import { FullAlbum } from "@/lib/types";
import { fullAlbumInclude } from "@/lib/prisma/presets";

const albumActions = {
  getAll: async (): Promise<FullAlbum[]> => {
    return await db.album.findMany({
      include: fullAlbumInclude,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  getBySlug: async (slug: string): Promise<FullAlbum | null> => {
    return await db.album.findUnique({
      where: { slug },
      include: fullAlbumInclude,
    });
  },

  getByArtistSlug: async (artistSlug: string) => {
    return await db.album.findMany({
      where: { artist: { slug: artistSlug } },
      include: {
        artist: true,
        genres: true,
        tracks: {
          include: {
            artists: true,
          },
        },
      },
    });
  },

  create: async (data: CreateAlbumRequest) => {
    const {
      name,
      description,
      releaseType,
      releaseDate,
      coverUrl,
      artistId,
      genreIds,
      tracks,
    } = data;

    return await db.$transaction(async (tx) => {
      const albumSlug = await tx.album.generateSlug(name);
      const totalDuration = tracks.reduce(
        (sum, track) => sum + track.duration,
        0
      );
      const trackCount = tracks.length;

      const album = await tx.album.create({
        data: {
          name,
          slug: albumSlug,
          description: emptyToNull(description),
          releaseType,
          releaseDate,
          coverUrl,
          artistId,
          totalDuration,
          trackCount,
        },
      });

      await Promise.all(
        tracks.map(async (trackData) => {
          const trackSlug = await tx.track.generateSlug(trackData.name);

          const track = await tx.track.create({
            data: {
              name: trackData.name,
              slug: trackSlug,
              duration: trackData.duration,
              audioUrl: trackData.audioUrl,
              trackNumber: trackData.trackNumber,
              isExplicit: trackData.isExplicit,
              lyrics: emptyToNull(trackData.lyrics),
              albumId: album.id,
              composer: emptyToNull(trackData.composer),
              lyricist: emptyToNull(trackData.lyricist),
              producer: emptyToNull(trackData.producer),
            },
          });

          if (trackData.artists.length > 0) {
            await tx.trackArtist.createMany({
              data: trackData.artists.map((artistInput) => ({
                trackId: track.id,
                artistId: artistInput.artistId,
                role: artistInput.role,
                order: artistInput.order,
              })),
            });
          }

          return track;
        })
      );

      if (genreIds.length > 0) {
        await tx.albumGenre.createMany({
          data: genreIds.map((genreId) => ({
            albumId: album.id,
            genreId,
          })),
        });
      }

      return album;
    });
  },
};

export default albumActions;
