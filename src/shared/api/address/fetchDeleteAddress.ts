import { axiosInstance } from "shared/api/axiosInstance";
import { Address } from "types/Address";

export interface Payload {
  addressId: number;
}

export interface Result {
  address: Address;
}

export async function fetchDeleteAddress(payload: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/address/${payload.addressId}`
  );

  return response.data;
}
