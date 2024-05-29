export interface ProductDtoResponse {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  subcategoryName: string;
  timeToPrepareInMinute: string;
  status: STATUS;
  createdAt: string;  // Using string to represent LocalDateTime in Java
  updatedAt: string;  // Using string to represent LocalDateTime in Java
  quantity: number;
}

export enum STATUS {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}
