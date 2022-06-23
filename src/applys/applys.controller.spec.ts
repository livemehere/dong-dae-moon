import { Test, TestingModule } from '@nestjs/testing';
import { ApplysController } from './applys.controller';
import { ApplysService } from './applys.service';

describe('ApplysController', () => {
  let controller: ApplysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplysController],
      providers: [ApplysService],
    }).compile();

    controller = module.get<ApplysController>(ApplysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
