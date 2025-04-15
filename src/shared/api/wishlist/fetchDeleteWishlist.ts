import { axiosInstance } from "shared/api/axiosInstance";
import { Wishlist } from "types/Wishlist";

export type Result = Wishlist;

export async function fetchDeleteWishlist(): Promise<Result> {
  const response = await axiosInstance.delete<Result>(`/wishlist`);

  return response.data;
}
