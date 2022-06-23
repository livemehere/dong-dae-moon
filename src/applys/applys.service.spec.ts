import { Test, TestingModule } from '@nestjs/testing';
import { ApplysService } from './applys.service';

describe('ApplysService', () => {
  let service: ApplysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplysService],
    }).compile();

    service = module.get<ApplysService>(ApplysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
