import { STATUS } from "./product-dto-response.model";

export interface ProductDtoRequest {
  name: string;
  price: number;
  description?: string;
  timeToPrepareInMinute: string;
  status: STATUS;
  subcategoryId: number;
}
