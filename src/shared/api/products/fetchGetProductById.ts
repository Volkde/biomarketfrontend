import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Product } from "types/Product";

export interface Params {
  productId: string | number;
}

export interface Response {
  product: Product;
}

export async function fetchGetProductById(params: Params): Promise<Response> {
  const response = await axiosInstance.get<Response>(
    `/api/products/${params.productId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  console.log(response);

  return response.data;
}
