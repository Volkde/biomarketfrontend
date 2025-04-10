import { axiosInstance } from "shared/api/axiosInstance";
import { Cart } from "types/Cart";

export interface Payload {
  productId: number;
  quantity: number;
}

export interface Result {
  cart: Cart;
}

export async function fetchUpdateProductQuantity(
  Payload: Payload
): Promise<Result> {
  const response = await axiosInstance.put<Result>(`/cart/update`, Payload);

  return response.data;
}
