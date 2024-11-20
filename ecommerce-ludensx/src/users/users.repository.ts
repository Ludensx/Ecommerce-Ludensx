import { Users } from "./entities/users.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersRepository {
	constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }
	async findAll(page: number = 1, limit: number = 5) {
		const users = await this.usersRepository.find();

		const start = (page - 1) * limit;
		const end = start + +limit;
		return users.slice();
	}
	async findOneById(id: string) {
		const user = await this.usersRepository.findOne({ where: { id: id }, relations: { orders: true } });
		const { password, isAdmin, ...usr } = user;
		return usr;
	}
	async findByEmail(email: string) {
		const user = await this.usersRepository.findOneBy({ email: email });
		return user;
	}
	async update(id: string, user: Users) {
		await this.usersRepository.update(id, user);
		return user;
	}
	async save(newUser: Partial<Users>) {
		await this.usersRepository.save(newUser);
		const { password, isAdmin, ...user } = newUser;
		return user;
	}
	delete(id: string) {
		throw new Error('Method not implemented.');
	}
}
