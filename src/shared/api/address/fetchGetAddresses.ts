import { axiosInstance } from "shared/api/axiosInstance";
import { Address } from "types/Address";

export type Result = Address[];

export async function fetchGetAddresses(): Promise<Result> {
  const response = await axiosInstance.get<Result>("/api/address");

  return response.data;
}
