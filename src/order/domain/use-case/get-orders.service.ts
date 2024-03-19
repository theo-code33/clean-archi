import { Order } from 'aws-sdk/clients/mediaconvert';

export class GetOrdersService {
  constructor(private orderRepository: OrderRepository) {}

  getOrders(): Order[] {
    const orders = this.orderRepository.findOrders();

    return orders;
  }
}
