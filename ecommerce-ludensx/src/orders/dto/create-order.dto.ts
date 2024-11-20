import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from "class-validator";
import { Products } from "src/products/entities/products.entity";

export class CreateOrderDto {
    @ApiProperty({
        required: true,
        name: 'userId',
        description: 'El id de usuario es obligatorio, debe ser un UUID valido.',
    })
    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @IsArray()
    @ArrayMinSize(1)
    products: Partial<Products[]>
}
