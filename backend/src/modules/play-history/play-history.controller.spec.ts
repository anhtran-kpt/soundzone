import { Test, TestingModule } from '@nestjs/testing';
import { PlayHistoryController } from './play-history.controller';
import { PlayHistoryService } from './play-history.service';

describe('PlayHistoryController', () => {
  let controller: PlayHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayHistoryController],
      providers: [PlayHistoryService],
    }).compile();

    controller = module.get<PlayHistoryController>(PlayHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
