import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export interface Params {
  sellerId: number;
}

export interface Result {
  seller: Seller;
}

export async function fetchDeleteSeller(params: Params): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/api/sellers/${params.sellerId}`
  );

  return response.data;
}
