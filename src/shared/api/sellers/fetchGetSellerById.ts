import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Seller } from "types/Seller";

export interface Params {
  sellerId: number;
}

export interface Result {
  seller: Seller;
}

export async function fetchGetSellerById(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/sellers/${params.sellerId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
