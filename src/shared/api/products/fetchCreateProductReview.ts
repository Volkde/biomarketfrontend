import { axiosInstance } from "shared/api/axiosInstance";
import { Product } from "types/Product";
import { Review } from "types/Review";

export type Payload = Review;

export interface Result {
  product: Product;
  review: Review;
}

export async function fetchCreateProductReview(
  payload: Payload
): Promise<Result> {
  const response = await axiosInstance.post<Result>(
    `/api/products/${payload.id}/reviews`,
    payload
  );

  return response.data;
}
