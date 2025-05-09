import { axiosInstance } from "shared/api/axiosInstance";
import { Cart } from "types/Cart";

export interface Result {
  cart: Cart;
}

export async function fetchClearCart(): Promise<Result> {
  const response = await axiosInstance.delete<Result>(`/cart/clear`);

  return response.data;
}
