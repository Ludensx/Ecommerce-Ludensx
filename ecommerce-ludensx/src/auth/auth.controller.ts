import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/LoginUser.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post('signin')
  singIn(@Body() credentials: LoginUserDto) {
    const { email, password } = credentials;
    return this.authService.singIn(email, password);
  }

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  singUp(@Body() credentials: CreateUserDto) {
    return this.authService.singUp(credentials);
  }
}
