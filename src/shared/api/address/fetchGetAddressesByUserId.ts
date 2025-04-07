import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Address } from "types/Address";

export interface Params {
  userId: number;
}

export type Result = Address[];

export async function fetchGetAddressesByUserId(
  params: Params
): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/api/address/all-addresses-by-user/${params.userId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
