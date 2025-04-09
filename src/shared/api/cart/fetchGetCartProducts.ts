import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Product } from "types/Product";

export interface Params {
  userId: number;
}

// TODO: Бэк должен вернуть объект
export type Result = Product[];

export async function fetchGetCartProducts(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/users/all-products-by-user-id/${params.userId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
