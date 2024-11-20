import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entities/orders.entity';
import { Users } from 'src/users/entities/users.entity';
import { OrderDetails } from 'src/order-details/entities/order-details.entity';
import { OrdersRepository } from './orders.repository';
import { OrderDetailsRepository } from 'src/order-details/orderDetails.repository';
import { Products } from 'src/products/entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, Users, OrderDetails, Products])],
  providers: [OrdersService, OrdersRepository, OrderDetailsRepository],
  controllers: [OrdersController],
})
export class OrdersModule {}
