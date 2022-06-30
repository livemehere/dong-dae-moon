import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';

const mockRepository = () => ({
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  softDelete: jest.fn(),
});
type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('AdminService', () => {
  let service: AdminService;
  let repository: MockRepository<Admin>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminService],
    }).compile();

    service = module.get<AdminService>(AdminService);
    repository = module.get<MockRepository<Admin>>(Admin);
  });

  it('should be defined', () => {
    expect(4 + 4).toEqual(8);
  });
});
