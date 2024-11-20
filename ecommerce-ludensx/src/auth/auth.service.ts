import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersRepository } from 'src/users/users.repository';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService) { }
  async singIn(email: string, password: string) {
    if (!email || !password) throw new BadRequestException('Email o password incompletos.');
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new BadRequestException('Email o password incorrecto.');
    const passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) throw new BadRequestException('Email o password incorrecto.');
    const payload = {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin
    }
    const token = this.jwtService.sign(payload);
    return {
      token,
      message: 'Login correcto'
    }
  }

  async singUp(user: CreateUserDto) {
    const foundUser = await this.usersRepository.findByEmail(user.email);
    if (foundUser) throw new BadRequestException('El usuario ya existe');
    if (user.password !== user.confirmPassword) throw new BadRequestException('Las contraseñas no coinciden');

    const hashPassword = await bcrypt.hash(user.password, 10);
    if (!hashPassword) throw new BadRequestException('Error al crear el usuario');

    await this.usersRepository.save({ ...user, password: hashPassword });
    const { password, confirmPassword, ...userResponse } = user;
    return userResponse;
  }
}
