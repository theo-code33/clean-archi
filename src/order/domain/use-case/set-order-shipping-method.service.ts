import { Order } from 'src/order/domain/entity/order.entity';
import { SetOrderShippingMethodDto } from '../dto/set-order-shipping-method.dto';

export class SetOrderShippingMethodService {
  constructor(private orderRepository: OrderRepository) {}

  setOrderShippingMethod(
    setOrderShippingMethodDto: SetOrderShippingMethodDto,
  ): Promise<Order> {
    const order = this.orderRepository.findOrder(
      setOrderShippingMethodDto.orderId,
    );

    if (!order) {
      throw new Error('Order not found');
    }

    order.setShippingMethod(setOrderShippingMethodDto.shippingAddress);

    return this.orderRepository.save(order);
  }
}
