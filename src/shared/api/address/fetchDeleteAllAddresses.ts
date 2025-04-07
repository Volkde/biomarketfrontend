import { axiosInstance } from "shared/api/axiosInstance";

export type Result = void;

export async function fetchDeleteAllAddresses(): Promise<Result> {
  const response = await axiosInstance.delete<Result>(`/api/address`);

  return response.data;
}
