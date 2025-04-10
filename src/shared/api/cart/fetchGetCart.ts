import { axiosInstance } from "shared/api/axiosInstance";
import { Cart } from "types/Cart";

export interface Result {
  cart: Cart;
}

export async function fetchGetCart(): Promise<Result> {
  const response = await axiosInstance.get<Result>(`/cart`);

  return response.data;
}
