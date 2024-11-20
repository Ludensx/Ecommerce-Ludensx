import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private CategoriesRepository: CategoriesRepository){}
  async addCategories() {
    return this.CategoriesRepository.addCategories();
  }

  async getCategories() {
    return this.CategoriesRepository.getCategories();
  }
}
