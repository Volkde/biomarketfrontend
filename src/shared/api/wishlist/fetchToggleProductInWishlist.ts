import { axiosInstance } from "shared/api/axiosInstance";
import { Wishlist } from "types/Wishlist";

export interface Payload {
  productId: number;
}

export type Result = Wishlist;

export async function fetchToggleProductInWishlist(
  payload: Payload
): Promise<Result> {
  const response = await axiosInstance.post<Result>(
    `/wishlist/${payload.productId}`,
    payload
  );

  return response.data;
}
