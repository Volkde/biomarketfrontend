import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Address } from "types/Address";

export interface Params {
  sellerId: number;
}

export type Result = Address[];

export async function fetchGetAddressesBySellerId(
  params: Params
): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/api/address/all-addresses-by-seller/${params.sellerId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
