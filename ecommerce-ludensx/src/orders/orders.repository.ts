import { BadRequestException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Orders } from "./entities/orders.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/users/entities/users.entity";
import { Products } from "src/products/entities/products.entity";
import { OrderDetails } from "src/order-details/entities/order-details.entity";

@Injectable()
export class OrdersRepository {
    constructor(@InjectRepository(Orders) private ordersRepository: Repository<Orders>,
        @InjectRepository(Users) private userRepository: Repository<Users>,
        @InjectRepository(Products) private productsRepository: Repository<Products>,
        @InjectRepository(OrderDetails) private orderDetailsRepository: Repository<OrderDetails>) { }

    async addOrder(userId: string, products: any) {
        let total = 0;        
        const user = await this.userRepository.findOne({where: {id: userId}});
        if (!user) throw new BadRequestException('User not found');

        const order = new Orders();
        order.date = new Date();
        order.user = user;
        const newOrder = await this.ordersRepository.save(order);

        const productsArr = await Promise.all(
            products.map(async (product: Products | null) => {
                const p = await this.productsRepository.findOne({where: { id: product.id }});
                if (!p) throw new BadRequestException('User not found');
                total = Number(p.price) + total;
                await this.productsRepository.update(product.id, {
                    stock: p.stock - 1
                });
                return p;
            })
        );
        
        const orderDetail = new OrderDetails();
        orderDetail.price = total;
        orderDetail.products = productsArr;
        orderDetail.order = newOrder;
        await this.orderDetailsRepository.save(orderDetail);

        return await this.ordersRepository.find({
            where: { id: newOrder.id },
            relations: { orderDetail: true }
        });
    }
    async getOrder(id: string) {
        const order = await this.ordersRepository.findOne({
            where: { id: id },
            relations: { orderDetail: {products: true} }
        });
        if (!order) return 'Order not found';
        return order;
    }
}