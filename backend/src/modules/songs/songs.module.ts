import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SongsController],
  providers: [SongsService, PrismaService],
  exports: [SongsService],
})
export class SongsModule {}
