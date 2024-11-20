import { Module } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from 'src/orders/entities/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Orders])],
  providers: [UsersRepository, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
