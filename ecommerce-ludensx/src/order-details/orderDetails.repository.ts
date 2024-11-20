import { Injectable } from "@nestjs/common";
import { OrderDetails } from "./entities/order-details.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class OrderDetailsRepository {
    constructor (@InjectRepository(OrderDetails) private orderDetailsRepository: Repository<OrderDetails>) { }

}