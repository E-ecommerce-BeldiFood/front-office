import { OrderItemRequest } from "./order-item-request.model";
import { OrderStatus } from "./order-status.enum";

export interface OrderRequest {
    customerId: number;
    orderId: number;
    orderItemsRequests: OrderItemRequest[];
    status: OrderStatus;
  }
  