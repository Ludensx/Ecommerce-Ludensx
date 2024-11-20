import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { Categories } from 'src/categories/entities/categories.entity';
import { OrderDetails } from 'src/order-details/entities/order-details.entity';
import { CategoriesRepository } from 'src/categories/categories.repository';
import cloudinaryConfig from 'src/config/cloudinary';
import { FileUploadService } from 'src/file-upload/file-upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products, Categories, OrderDetails])],
  providers: [ProductsService, ProductsRepository, CategoriesRepository, cloudinaryConfig],
  controllers: [ProductsController],
})
export class ProductsModule {}
