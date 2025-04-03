import { Injectable } from '@nestjs/common';
import { CreateListenDto } from './dto/create-listen.dto';
import { UpdateListenDto } from './dto/update-listen.dto';

@Injectable()
export class ListensService {
  create(createListenDto: CreateListenDto) {
    return 'This action adds a new listen';
  }

  findAll() {
    return `This action returns all listens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listen`;
  }

  update(id: number, updateListenDto: UpdateListenDto) {
    return `This action updates a #${id} listen`;
  }

  remove(id: number) {
    return `This action removes a #${id} listen`;
  }
}
