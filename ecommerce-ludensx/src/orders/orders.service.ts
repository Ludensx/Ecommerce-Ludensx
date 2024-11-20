import { Injectable } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private ordersRepository: OrdersRepository) { }
  addOrder(userId: string, products: any) {
    return this.ordersRepository.addOrder(userId, products);
  }

  getOrders() {
    return `This action returns all orders`;
  }

  getOrder(id: string) {
    return this.ordersRepository.getOrder(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
