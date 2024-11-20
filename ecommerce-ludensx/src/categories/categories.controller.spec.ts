import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

describe('CategoriesController', () => {
  let controller: CategoriesController;
  let mockCategoiriesService;
  beforeEach(async () => {
    mockCategoiriesService = {
      findAll: jest.fn().mockResolvedValue([]),
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService,
        {provide: 'CategoriesRepository', useValue: mockCategoiriesService}],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
