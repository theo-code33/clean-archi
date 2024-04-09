import { Order } from 'src/order/domain/entity/order.entity';
import { OrderRepositoryInterface } from 'src/order/domain/port/order.repository.interface';

export class PaidOrderService {
  constructor(private orderRepository: OrderRepositoryInterface) {}

  async paidOrder(orderId: string): Promise<Order> {
    const order = await this.orderRepository.findById(orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    order.pay();

    return order;
  }
}
