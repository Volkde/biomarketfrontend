import { axiosInstance } from "shared/api/axiosInstance";
import { Address } from "types/Address";

export type Payload = Address;

export type Result = Address;

export async function fetchCreateAddress(payload: Payload): Promise<Result> {
  const response = await axiosInstance.post<Result>("/api/address", payload);

  return response.data;
}
