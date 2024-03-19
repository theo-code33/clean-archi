import { Order } from '../entity/order.entity';
import { SetOrderShippingAddressDto } from '../dto/set-order-shipping-Address.dto';

export class SetOrderShippingAddressService {
  constructor(private orderRepository: OrderRepository) {}

  setOrderShippingAddress(
    setOrderShippingAddressDto: SetOrderShippingAddressDto,
  ): Promise<Order> {
    const order = this.orderRepository.findOrderById(
      setOrderShippingAddressDto.orderId,
    );

    if (!order) {
      throw new Error('Order not found');
    }

    order.setShippingAddress(setOrderShippingAddressDto.shippingAddress);

    return this.orderRepository.save(order);
  }
}
