import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "src/products/entities/products.entity";

@Entity({name: 'categories'})
export class Categories {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: "varchar", length: 50, nullable: false })
    name: string

    @OneToMany(()=> Products, (product) => product.category)
    @JoinColumn({name: 'product_id'})
    products: Products[];
}
