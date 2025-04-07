import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export interface Response {
  sellers: Seller[];
  totalUsers?: number;
}

export async function fetchGetSellers(): Promise<Response> {
  const response = await axiosInstance.get<Response>("/api/sellers");

  return response.data;
}
