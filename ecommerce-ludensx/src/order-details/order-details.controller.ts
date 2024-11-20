import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { AuthGuard } from 'src/auth/guards/authGuard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Order Details')
@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  // @Post()
  // @UseGuards(AuthGuard)
  // create(@Body() createOrderDetailDto) {
  //   return this.orderDetailsService.create(createOrderDetailDto);
  // }

  // @Get()
  // findAll() {
  //   return this.orderDetailsService.findAll();
  // }

  // @Get(':id')
  // @UseGuards(AuthGuard)
  // findOne(@Param('id', ParseUUIDPipe) id: string) {
  //   return this.orderDetailsService.findOne(+id);
  // }

  // @Patch(':id')
  // @UseGuards(AuthGuard)
  // update(@Param('id', ParseUUIDPipe) id: string, @Body() updateOrderDetailDto) {
  //   return this.orderDetailsService.update(+id, updateOrderDetailDto);
  // }

  // @Delete(':id')
  // remove(@Param('id', ParseUUIDPipe) id: string) {
  //   return this.orderDetailsService.remove(+id);
  // }
}
