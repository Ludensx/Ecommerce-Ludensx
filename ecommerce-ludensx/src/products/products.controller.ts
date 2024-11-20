import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/auth/enum/roles.enum';
import { AuthGuard } from 'src/auth/guards/authGuard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('list')
  @HttpCode(HttpStatus.OK)
  getProducts(@Query('page') page: number, @Query('limit') limit: number) {
    if(page && limit) return this.productsService.findAll(page, limit);    
    return this.productsService.findAll(1, 5);
  }

  @Get('seeder')
  @HttpCode(HttpStatus.CREATED)
  addProducts() {
    return this.productsService.addProducts();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
  
  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  updateProduct(@Query('id') id:string, @Body() product: any) {
    return this.productsService.update(id, product)
  }
}