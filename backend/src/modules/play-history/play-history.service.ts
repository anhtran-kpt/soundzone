import { Injectable } from '@nestjs/common';
import { CreatePlayHistoryDto } from './dto/create-play-history.dto';
import { UpdatePlayHistoryDto } from './dto/update-play-history.dto';

@Injectable()
export class PlayHistoryService {
  create(createPlayHistoryDto: CreatePlayHistoryDto) {
    return 'This action adds a new playHistory';
  }

  findAll() {
    return `This action returns all playHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playHistory`;
  }

  update(id: number, updatePlayHistoryDto: UpdatePlayHistoryDto) {
    return `This action updates a #${id} playHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} playHistory`;
  }
}
