import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export interface Payload extends Seller {}

export interface Response {
  seller: Seller;
  message?: string;
}

export async function fetchCreateSeller(payload: Payload): Promise<Response> {
  const response = await axiosInstance.post<Response>("/api/sellers", payload);

  return response.data;
}
