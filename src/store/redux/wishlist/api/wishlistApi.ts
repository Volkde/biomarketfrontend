import axiosInstance from "@/shared/api/axiosInstance";
import { Payload, Result } from "@/store/redux/wishlist/types/wishlistTypes";

export async function fetchGetWishlist(): Promise<Result> {
  const response = await axiosInstance.get<Result>("/wishlist");
  return response.data;
}

export async function fetchAddToWishlist(Payload: Payload): Promise<Result> {
  const response = await axiosInstance.post<Result>("/wishlist", Payload);
  return response.data;
}

export async function fetchRemoveFromWishlist(Payload: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>("/wishlist", { data: Payload });
  return response.data;
}
