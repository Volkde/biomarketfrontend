import { axiosInstance } from "shared/api/axiosInstance";
import { Cart } from "types/Cart";

export interface Payload {
  productId: number;
  quantity: number;
}

export interface Result {
  cart: Cart;
}

export async function fetchAddProductToCart(payload: Payload): Promise<Result> {
  const response = await axiosInstance.post<Result>(`/cart/add`, payload);

  return response.data;
}
