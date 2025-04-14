import { axiosInstance } from "shared/api/axiosInstance";
import { Cart } from "types/Cart";

export interface Payload {
  productId: number;
}

export interface Result {
  cart: Cart;
}

export async function fetchRemoveProductFromCart({
  productId
}: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/cart/remove/${productId}`
  );

  return response.data;
}