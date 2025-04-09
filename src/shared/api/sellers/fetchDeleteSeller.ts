import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export interface Payload {
  sellerId: number;
}

export interface Result {
  seller: Seller;
}

export async function fetchDeleteSeller({
  sellerId
}: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(`/sellers/${sellerId}`);

  return response.data;
}
