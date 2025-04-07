import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export interface Params {
  sellerId: string | number;
}

export interface Response {
  seller: Seller;
  message?: string;
}

export async function fetchDeleteSeller(params: Params): Promise<Response> {
  const response = await axiosInstance.delete<Response>(
    `/api/sellers/${params.sellerId}`
  );

  return response.data;
}
