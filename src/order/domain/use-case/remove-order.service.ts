export class RemoveOrderService {
  constructor(private orderRepository: OrderRepository) {}

  removeOrder(orderId: string): void {
    const order = this.orderRepository.findOrder(orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    try {
      this.orderRepository.deleteOrder(orderId);
    } catch (error) {
      throw new Error('Error deleting order');
    }
  }
}
