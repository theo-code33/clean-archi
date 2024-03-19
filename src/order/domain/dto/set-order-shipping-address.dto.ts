import { IsString, IsUUID } from 'class-validator';

export class SetOrderShippingAddressDto {
  @IsString()
  @IsUUID()
  orderId: number;

  @IsString()
  shippingAddress: string;
}
