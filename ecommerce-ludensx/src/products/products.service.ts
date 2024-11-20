import { Injectable } from '@nestjs/common';
import { Products } from './entities/products.entity';
import { ProductsRepository } from './products.repository';
import { CategoriesRepository } from 'src/categories/categories.repository';

@Injectable()
export class ProductsService {
  constructor(
    private productRepository: ProductsRepository,
    private categoriesRepository: CategoriesRepository
) { }
addProducts() {
    return this.productRepository.addProducts();
  }
  findAll(page: number, limit: number){
    return this.productRepository.findAll(page, limit);
  }
  findOne(id: string){
    return this.productRepository.findOne(id);
  }
  update(id: string, updateProduct: Products){
    return this.productRepository.update(id, updateProduct);
  }
  remove(id: string){
    return this.productRepository.delete(id);
  }
}