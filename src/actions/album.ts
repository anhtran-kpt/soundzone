import prisma from "@/lib/prisma/prisma";
import { CreateAlbumDto } from "@/schemas";
import { emptyToNull } from "@/utils";

const albumActions = {
  getAll: async () => {
    return await prisma.album.findMany({
      include: {
        artist: true,
        genres: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  getBySlug: async (slug: string) => {
    return await prisma.album.findUnique({
      where: { slug },
      include: {
        artist: true,
        genres: true,
      },
    });
  },

  create: async (data: CreateAlbumDto) => {
    const {
      title,
      description,
      releaseType,
      releaseDate,
      coverUrl,
      isExplicit,
      artistId,
      genreIds,
      songs,
    } = data;

    return await prisma.$transaction(async (tx) => {
      const albumSlug = await tx.album.generateSlug(title);
      const totalDuration = songs.reduce((sum, song) => sum + song.duration, 0);
      const songCount = songs.length;

      const album = await tx.album.create({
        data: {
          title,
          slug: albumSlug,
          description: emptyToNull(description),
          releaseType,
          releaseDate,
          coverUrl,
          isExplicit,
          artistId,
          totalDuration,
          songCount,
        },
      });

      await Promise.all(
        songs.map(async (songData) => {
          const songSlug = await tx.song.generateSlug(songData.title);

          const song = await tx.song.create({
            data: {
              title: songData.title,
              slug: songSlug,
              duration: songData.duration,
              audioUrl: songData.audioUrl,
              trackNumber: songData.trackNumber,
              isExplicit: songData.isExplicit,
              lyrics: emptyToNull(songData.lyrics),
              albumId: album.id,
              composer: emptyToNull(songData.composer),
              lyricist: emptyToNull(songData.lyricist),
              producer: emptyToNull(songData.producer),
            },
          });

          if (songData.artists.length > 0) {
            await tx.songArtist.createMany({
              data: songData.artists.map((artistInput) => ({
                songId: song.id,
                artistId: artistInput.artistId,
                role: artistInput.role,
                order: artistInput.order,
              })),
            });
          }

          return song;
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
