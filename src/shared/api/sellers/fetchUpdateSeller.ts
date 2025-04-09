import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export type Payload = Seller;

export interface Result {
  seller: Seller;
}

export async function fetchUpdateSeller(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/sellers/${payload.id}`,
    payload
  );

  return response.data;
}
