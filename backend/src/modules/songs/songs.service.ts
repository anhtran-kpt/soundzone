import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateAlbumDto } from '../albums/dto/update-album.dto';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}

  async create(createSongDto: CreateSongDto) {
    const artist = await this.prisma.artist.findUnique({
      where: {
        id: createSongDto.artistId,
      },
    });

    if (!artist) {
      throw new NotFoundException(
        `Artist with ID ${createSongDto.artistId} not found`,
      );
    }

    if (createSongDto.albumId) {
      const album = await this.prisma.album.findUnique({
        where: {
          id: createSongDto.albumId,
        },
      });

      if (!album) {
        throw new NotFoundException(
          `Album with ID ${createSongDto.albumId} not found`,
        );
      }
    }

    return this.prisma.song.create({
      data: createSongDto,
      include: {
        artist: true,
        album: true,
        genre: true,
      },
    });
  }

  async findAll(query: {
    title?: string;
    artistId?: string;
    albumId?: string;
    genreId?: string;
  }) {
    const where = {};

    if (query.title) {
      where['title'] = { contains: query.title, mode: 'insensitive' };
    }

    if (query.artistId) {
      where['artistId'] = query.artistId;
    }

    if (query.albumId) {
      where['albumId'] = query.albumId;
    }

    if (query.genreId) {
      where['genreId'] = query.genreId;
    }

    return this.prisma.song.findMany({
      where,
      include: {
        artist: {
          select: {
            id: true,
            name: true,
          },
        },
        album: {
          select: {
            id: true,
            title: true,
            coverUrl: true,
          },
        },
        genre: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const song = await this.prisma.song.findUnique({
      where: { id },
      include: {
        artist: true,
        album: true,
        genre: true,
      },
    });

    if (!song) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }

    return song;
  }

  async update(id: string, updateSongDto: UpdateAlbumDto) {
    const song = await this.prisma.song.findUnique({ where: { id } });

    if (!song) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }

    return this.prisma.song.update({
      where: { id },
      data: updateSongDto,
      include: {
        artist: true,
        album: true,
        genre: true,
      },
    });
  }

  async remove(id: string) {
    const song = await this.prisma.song.findUnique({ where: { id } });

    if (!song) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }

    await this.prisma.song.delete({ where: { id } });
    return { message: 'Song deleted successfully' };
  }

  async addToPlayHistory(userId: string, songId: string) {
    const song = await this.prisma.song.findUnique({ where: { id: songId } });

    if (!song) {
      throw new NotFoundException(`Song with ID ${songId} not found`);
    }

    return this.prisma.playHistory.create({
      data: {
        userId,
        songId,
      },
    });
  }

  async toggleLike(userId: string, songId: string) {
    const song = await this.prisma.song.findUnique({ where: { id: songId } });

    if (!song) {
      throw new NotFoundException(`Song with ID ${songId} not found`);
    }

    const existingLike = await this.prisma.userLikedSong.findUnique({
      where: {
        userId_songId: {
          userId,
          songId,
        },
      },
    });

    if (existingLike) {
      await this.prisma.userLikedSong.delete({
        where: {
          userId_songId: {
            userId,
            songId,
          },
        },
      });

      return { liked: false };
    } else {
      await this.prisma.userLikedSong.create({
        data: {
          userId,
          songId,
        },
      });

      return { liked: true };
    }
  }
}
