import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from './entities/order-details.entity';
import { Products } from 'src/products/entities/products.entity';
import { Orders } from 'src/orders/entities/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetails, Products, Orders])],
  providers: [OrderDetailsService],
  controllers: [OrderDetailsController],
})
export class OrderDetailsModule {}
