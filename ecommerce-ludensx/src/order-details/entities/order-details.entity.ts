import { Orders } from "src/orders/entities/orders.entity";
import { Products } from "src/products/entities/products.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'orderDetails'})
export class OrderDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @OneToOne(()=> Orders, (order) => order.orderDetail)
    @JoinColumn({name: 'order_id'})
    order: Orders;

    @ManyToMany(()=> Products)
    @JoinTable({name: 'order_details_products'})
    products: Products[];
}
