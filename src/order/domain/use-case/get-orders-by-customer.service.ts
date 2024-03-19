export class GetOrdersByCustomerService {
  constructor(private orderRepository: OrderRepository) {}

  getOrdersByCustomer(customerId: string): Order[] {
    const orders = this.orderRepository.findOrdersByCustomer(customerId);

    return orders;
  }
}
