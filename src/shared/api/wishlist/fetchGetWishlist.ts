import { axiosInstance } from "shared/api/axiosInstance";
import { Wishlist } from "types/Wishlist";

export type Result = Wishlist;

export async function fetchGetWishlist(): Promise<Result> {
  const response = await axiosInstance.get<Result>(`/wishlist`);

  return response.data;
}
