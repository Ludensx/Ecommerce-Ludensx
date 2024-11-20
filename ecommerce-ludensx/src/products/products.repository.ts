import { Products } from "./entities/products.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Categories } from "src/categories/entities/categories.entity";
import * as data from 'src/utils/data.json';

export class ProductsRepository {
  constructor(
    @InjectRepository(Products) private productsRepository: Repository<Products>,
    @InjectRepository(Categories) private categoriesRepository: Repository<Categories>,
  ) {}

  async findAll(page: number, limit: number): Promise<Products[]> {
    const products = await this.productsRepository.find({
      relations: {
        category: true,
      }
    });
    let inStock = products.filter((products) => products.stock > 0);
    const start = (page -1) * limit;
    const end = start + +limit;
    inStock = inStock.slice(start, end);
    return inStock;
  }

  async findOne(id: string) {
    const product = await this.productsRepository.findOneBy({ id });
    return product;
  }

  async addProducts(){
    const categories = await  this.categoriesRepository.find();
    data?.map(async (element) => {
      const category = categories.find(
        (category) => category.name === element.category
      );
      const product = new Products();
      product.name = element.name;
      product.description = element.description;
      product.price = element.price;
      product.stock = element.stock;
      product.category = category;
      await this.productsRepository.createQueryBuilder()
      .insert()
      .into(Products)
      .values(product)
      .execute();
    });
    return 'Products Agregados';
  }

  async update(id: string, product: Products) {
    await this.productsRepository.update(id, product);
    const updatedProduct = await this.productsRepository.findOneBy({ id });
    return updatedProduct;
  }

  async delete(id: string) {
    return this.productsRepository.delete(id);
  }
}