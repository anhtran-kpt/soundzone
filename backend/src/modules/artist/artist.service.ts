import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArtistService {
  constructor(private prisma: PrismaService) {}

  create(createArtistDto: CreateArtistDto) {
    return this.prisma.artist.create({
      data: createArtistDto,
    });
  }

  findAll() {
    return this.prisma.artist.findMany({
      include: { songs: true },
    });
  }

  findOne(id: string) {
    return this.prisma.artist.findUnique({
      where: { id },
      include: { songs: true },
    });
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.prisma.artist.update({
      where: { id },
      data: {
        ...updateArtistDto,
        updatedAt: new Date(),
      },
    });
  }

  remove(id: string) {
    return this.prisma.artist.delete({
      where: { id },
    });
  }
}
