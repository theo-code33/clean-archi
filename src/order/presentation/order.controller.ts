import { Body, Controller, Post } from '@nestjs/common';
import { Order } from '../domain/entity/order.entity';
import { CreateOrderService } from '../domain/use-case/create-order.service';
import { CreateOrderDto } from '../domain/dto/create-order.dto';

@Controller('/orders')
export default class OrderController {
  constructor(private readonly createOrderService: CreateOrderService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.createOrderService.createOrder(createOrderDto);
  }
}
