import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export interface Params {
  storeName: string;
}

export interface Result {
  seller: Seller;
}

export async function fetchDeleteSellerByStoreName({
  storeName
}: Params): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/sellers/by-storeName/${storeName}`
  );

  return response.data;
}
