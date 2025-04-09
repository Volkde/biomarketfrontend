import { axiosInstance } from "shared/api/axiosInstance";
import { Address } from "types/Address";

export type Payload = Address;

export interface Result {
  address: Address;
}

export async function fetchUpdateAddress(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/address/${payload.id}`,
    payload
  );

  return response.data;
}
