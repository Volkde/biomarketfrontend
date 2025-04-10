import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export interface Payload {
  storeName: string;
}

export interface Result {
  seller: Seller;
}

export async function fetchDeleteSellerByStoreName({
  storeName
}: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/sellers/by-storeName/${storeName}`
  );

  return response.data;
}
