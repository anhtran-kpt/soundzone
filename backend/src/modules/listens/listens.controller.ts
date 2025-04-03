import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListensService } from './listens.service';
import { CreateListenDto } from './dto/create-listen.dto';
import { UpdateListenDto } from './dto/update-listen.dto';

@Controller('listens')
export class ListensController {
  constructor(private readonly listensService: ListensService) {}

  @Post()
  create(@Body() createListenDto: CreateListenDto) {
    return this.listensService.create(createListenDto);
  }

  @Get()
  findAll() {
    return this.listensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListenDto: UpdateListenDto) {
    return this.listensService.update(+id, updateListenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listensService.remove(+id);
  }
}
