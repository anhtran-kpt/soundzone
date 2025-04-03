import { Test, TestingModule } from '@nestjs/testing';
import { ListensController } from './listens.controller';
import { ListensService } from './listens.service';

describe('ListensController', () => {
  let controller: ListensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListensController],
      providers: [ListensService],
    }).compile();

    controller = module.get<ListensController>(ListensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
