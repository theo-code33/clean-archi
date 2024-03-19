import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateOrderService } from 'src/order/domain/use-case/create-order.service.service';
import { GetOrdersByCustomerService } from 'src/order/domain/use-case/get-orders-by-customer.service';
import { GetOrdersService } from 'src/order/domain/use-case/get-orders.service';
import { RemoveOrderService } from 'src/order/domain/use-case/remove-order.service';
import { SetOrderShippingAddressService } from 'src/order/domain/use-case/set-order-shipping-method.service';
@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [],
  providers: [
    CreateOrderService,
    GetOrdersService,
    GetOrdersByCustomerService,
    RemoveOrderService,
    SetOrderShippingAddressService,
  ],
})
export class ArticleModule {}
