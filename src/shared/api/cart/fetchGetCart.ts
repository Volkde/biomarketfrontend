import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Cart } from "types/Cart";

export interface Params {
  userId: string | number;
}

export interface Response {
  cart: Cart;
}

export async function fetchGetCart(params: Params): Promise<Response> {
  const response = await axiosInstance.get<Response>(
    `/api/cart/${params.userId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
