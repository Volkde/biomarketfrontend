import { axiosInstance } from "shared/api/axiosInstance";
import { Product } from "types/Product";
import { Review } from "types/Review";

export interface Payload extends Review {}

export interface Response {
  product: Product;
  review: Review;
  message?: string;
}

export async function fetchCreateProductReview(
  payload: Payload
): Promise<Response> {
  const response = await axiosInstance.post<Response>(
    `/api/products/${payload.id}/reviews`,
    payload
  );

  return response.data;
}
