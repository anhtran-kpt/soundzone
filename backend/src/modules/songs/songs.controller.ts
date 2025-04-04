import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll(
    @Query()
    query: {
      title?: string;
      artistId?: string;
      albumId?: string;
      genreId?: string;
    },
  ) {
    return this.songsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songsService.update(id, updateSongDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songsService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/play')
  addToPlayHistory(@GetUser() user, @Param('id') songId: string) {
    return this.songsService.addToPlayHistory(user.id, songId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/like')
  toggleLike(@GetUser() user, @Param('id') songId: string) {
    return this.songsService.toggleLike(user.id, songId);
  }
}
