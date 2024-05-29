import { OrderItemResponse } from './order-item-response.model';
import { OrderStatus } from './order-status.enum';

export interface OrderResponse {
  orderId: number;
  customerId: number;
  createdAt: string;  // ISO string format
  updatedAt: string;  // ISO string format
  orderItems: OrderItemResponse[];
  status: OrderStatus;
  totalQuantity: number;
  totalPrice: number;
}
