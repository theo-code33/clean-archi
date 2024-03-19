import { IsString, IsUUID } from 'class-validator';

export class SetOrderShippingMethodDto {
  @IsString()
  @IsUUID()
  orderId: number;

  @IsString()
  shippingAddress: string;
}
