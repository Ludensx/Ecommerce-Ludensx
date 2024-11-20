import { PickType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, IsStrongPassword, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @ApiProperty({
        required: true,
        name: 'name',
        description: 'El nombre de usuario es obligatorio, debe tener entre 3-80 caracteres.',
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;

    @ApiProperty({
        required: true,
        name: 'email',
        description: 'El email de usuario es obligatorio, debe tener un formato de email valido.',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        required: true,
        name: 'password',
        description: 'La contraseña debe ser fuerte y tener entre 8-15 caracteres.',
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    @IsStrongPassword()
    password: string;
    
    @ApiProperty({
        required: true,
        name: 'confirmPassword',
        description: 'La contraseña de confirmación debe ser igual a la contraseña.',
    })
    @IsNotEmpty()
    @IsString()
    confirmPassword: string;

    @ApiProperty({
        required: true,
        name: 'address',
        description: 'La dirección de usuario es obligatoria, debe tener entre 3-80 caracteres.',
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;

    @ApiProperty({
        required: true,
        name: 'phone',
        description: 'El telefono de usuario es obligatorio, debe ser un numero valido.',
    })
    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @ApiProperty({
        required: false,
        name: 'country',
        description: 'El pais de usuario no es obligatorio, debe tener entre 5-20 caracteres.',
    })
    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    country?: string;

    @ApiProperty({
        required: false,
        name: 'city',
        description: 'La ciudad de usuario no es obligatoria, debe tener entre 5-20 caracteres.',
    })
    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    city?: string;

    @ApiProperty({
        required: false,
        name: "isAdmin",
        description: "El rol del usuario no es obligatorio, debe ser true(Admin) o false(User). Por defecto es false.",        
    })
    @IsOptional()
    isAdmin?: boolean;
}
