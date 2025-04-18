import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Product } from "types/Product";

export interface Params {
  productId: number;
}

export interface Result {
  product: Product;
}

export async function fetchGetProductById(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/products/${params.productId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
