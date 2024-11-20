import { Categories } from "src/categories/entities/categories.entity";
import { OrderDetails } from "src/order-details/entities/order-details.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'products' })
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar', length: 50, nullable: false })
    name: string

    @Column({ type: 'varchar', nullable: false })
    description: string

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number

    @Column({ type: 'int', nullable: false })
    stock: number

    @Column({ type: 'varchar', default: 'https://assets.soyhenry.com/LOGO-REDES-01_og.jpg' })
    imgUrl: string

    @ManyToMany(()=> OrderDetails, (orderDetail)=> orderDetail.products)
    orderDetails: OrderDetails[];

    @ManyToOne(()=> Categories, (categories)=> categories.products)
    @JoinColumn({name: 'category_id'})
    category: Categories;
}