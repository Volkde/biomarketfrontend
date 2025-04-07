import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Review } from "types/Review";

export interface Params {
  productId: string | number;
}

export interface Response {
  reviews: Review[];
}

export async function fetchGetProductReviews(
  params: Params
): Promise<Response> {
  const response = await axiosInstance.get<Response>(
    `/api/products/${params.productId}/reviews`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
