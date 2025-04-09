import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Address } from "types/Address";

export interface Params {
  addressId: number;
}

export interface Result {
  address: Address;
}

export async function fetchGetAddressById(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/address/${params.addressId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
