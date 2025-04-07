import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Review } from "types/Review";

export interface Params {
  productId: number;
}

export interface Result {
  reviews: Review[];
}

export async function fetchGetProductReviews(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/api/products/${params.productId}/reviews`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
