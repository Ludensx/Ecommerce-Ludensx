import { Injectable } from '@nestjs/common';
import { FileUploadRepository } from './file-upload.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/products/entities/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileUploadService {
    constructor(
        private readonly fileUploadRepository: FileUploadRepository,
        @InjectRepository(Products)
        private readonly productsRepository: Repository<Products>
    ) { }
    async uploadProductImage(id: string, file: Express.Multer.File){
        const product = await this.productsRepository.findOne({where: {id: id}});
        if(!product) return "Product not foud";
        const uploadImg = await this.fileUploadRepository.uploadImage(file);
        await this.productsRepository.update(id, {imgUrl: uploadImg.secure_url});
        return await this.productsRepository.findOneBy({id: id});
    }
}
