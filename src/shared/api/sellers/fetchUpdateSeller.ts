import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export interface Payload extends Seller {}

export interface Result {
  seller: Seller;
}

export async function fetchUpdateSeller(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/api/sellers/${payload.id}`,
    payload
  );

  return response.data;
}
