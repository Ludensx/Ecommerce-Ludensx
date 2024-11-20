import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  // let service: CategoriesService;
  let mockCategoriesService;

  beforeEach(async () => {
    mockCategoriesService = {
      getCategories: jest.fn().mockResolvedValue([]),
      findOne: jest.fn(),
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService],
    }).compile();

    mockCategoriesService = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(mockCategoriesService).toBeDefined();
  });
});
