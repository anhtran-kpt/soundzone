import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayHistoryService } from './play-history.service';
import { CreatePlayHistoryDto } from './dto/create-play-history.dto';
import { UpdatePlayHistoryDto } from './dto/update-play-history.dto';

@Controller('play-history')
export class PlayHistoryController {
  constructor(private readonly playHistoryService: PlayHistoryService) {}

  @Post()
  create(@Body() createPlayHistoryDto: CreatePlayHistoryDto) {
    return this.playHistoryService.create(createPlayHistoryDto);
  }

  @Get()
  findAll() {
    return this.playHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayHistoryDto: UpdatePlayHistoryDto) {
    return this.playHistoryService.update(+id, updatePlayHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playHistoryService.remove(+id);
  }
}
