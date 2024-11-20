import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Orders } from "src/orders/entities/orders.entity";
import { ApiProperty } from "@nestjs/swagger";
@Entity({name : 'users'})
export class Users {
  @ApiProperty({ name: 'id', description: 'Es autocreado y tiene formato UUID.' })
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ApiProperty({ name: 'name', description: 'El nombre de usuario es obligatorio, debe tener entre 3-80 caracteres.' })
  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;
  @ApiProperty({ name: 'email', description: 'El email de usuario es obligatorio, debe tener un formato de email valido.' })
  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  email: string;
  @ApiProperty({ name: 'password', description: 'La contraseña debe ser fuerte y tener entre 8-15 caracteres.' })
  @Column({ type: 'varchar', length: 60, nullable: false })
  password: string
  @ApiProperty({ name: 'phone', description: 'El teléfono es obligatorio.' })
  @Column({ type: 'int' })
  phone: number
  @ApiProperty({ name: 'country', description: 'El pais es obligatorio.' })
  @Column({ type: 'varchar', length: 50, })
  country: string
  @ApiProperty({ name: 'address', description: 'La dirección es obligatoria.' })
  @Column({ type: 'varchar' })
  address: string
  @ApiProperty({ name: 'city', description: 'La ciudad es obligatoria.' })
  @Column({ type: 'varchar', length: 50 })
  city: string
  @ApiProperty({ name: 'isAdmin', description: 'Por defecto es false.' })
  @Column({type: 'boolean', default: false})
  isAdmin: boolean
  @ApiProperty({ name: 'orders', description: 'Array de ordenes asociadas a este usuario.' })
  @Column({ type: 'boolean', default: false })
  @OneToMany(() => Orders, (order) => order.user)
  @JoinColumn({name: 'orders_id'})
  orders: Orders[];
}