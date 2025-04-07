import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export type Payload = Seller;

export interface Result {
  seller: Seller;
}

export async function fetchCreateSeller(payload: Payload): Promise<Result> {
  const response = await axiosInstance.post<Result>("/api/sellers", payload);

  return response.data;
}
