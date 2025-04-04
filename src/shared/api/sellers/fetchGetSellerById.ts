import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Seller } from "types/Seller";

export interface Params {
  sellerId: string | number;
}

export interface Response {
  seller: Seller;
  message?: string;
}

export async function fetchGetSellerById(params: Params): Promise<Response> {
  const response = await axiosInstance.get<Response>(
    `/api/sellers/${params.sellerId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
