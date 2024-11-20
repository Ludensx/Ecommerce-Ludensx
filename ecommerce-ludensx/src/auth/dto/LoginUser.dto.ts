import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginUserDto {
    @ApiProperty({
        required: true,
        name: 'email',
        description: 'El email de usuario es obligatorio, debe estar previamente registrado, debe tener un formato de email valido.',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @ApiProperty({
        required: true,
        name: 'password',
    })
    @IsNotEmpty()
    password: string;
}