import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from 'src/users/entities/users.entity';
import { OrderDetails } from "src/order-details/entities/order-details.entity";

@Entity({ name: 'orders' })
export class Orders {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @ManyToOne(() => Users, (users) => users.orders)
    @JoinColumn({ name: 'user_id' })
    user: Users;
    @Column({ type: 'date' })
    date: Date;
    @OneToOne(() => OrderDetails, (OrderDetail) => OrderDetail.order)
    orderDetail: OrderDetails;
}