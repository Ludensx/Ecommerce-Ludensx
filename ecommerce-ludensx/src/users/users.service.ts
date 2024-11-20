import { Injectable } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) { }
  save(user: Partial<Users>) {
    return this.usersRepository.save(user);
  }
  findAll(page: number = 1, limit: number = 5) {
    return this.usersRepository.findAll(page, limit);
  }
  findOne(id: string) {
    return this.usersRepository.findOneById(id);
  }
  update(id: string, user: Users) {
    return this.usersRepository.update(id, user);
  }
  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
