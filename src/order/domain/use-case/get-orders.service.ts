import { Order } from 'src/order/domain/entity/order.entity';

export class GetOrdersService {
  constructor(private orderRepository: OrderRepository) {}

  getOrders(): Order[] {
    const orders = this.orderRepository.findOrders();

    return orders;
  }
}
