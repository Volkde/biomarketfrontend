import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export interface Payload extends Seller {}

export interface Response {
  seller: Seller;
}

export async function fetchUpdateSeller(payload: Payload): Promise<Response> {
  const response = await axiosInstance.put<Response>(
    `/api/sellers/${payload.id}`,
    payload
  );

  return response.data;
}
