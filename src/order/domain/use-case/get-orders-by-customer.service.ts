import { Order } from 'src/order/domain/entity/order.entity';

export class GetOrdersByCustomerService {
  constructor(private orderRepository: OrderRepository) {}

  getOrdersByCustomer(customerName: string): Promise<Order[]> {
    const orders = this.orderRepository.findOrdersByCustomerName(customerName);

    return orders;
  }
}
