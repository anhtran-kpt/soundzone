import { Module } from '@nestjs/common';
import { PlayHistoryService } from './play-history.service';
import { PlayHistoryController } from './play-history.controller';

@Module({
  controllers: [PlayHistoryController],
  providers: [PlayHistoryService],
})
export class PlayHistoryModule {}
