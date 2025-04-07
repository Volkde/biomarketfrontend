import { axiosInstance } from "shared/api/axiosInstance";
import { Seller } from "types/Seller";

export interface Result {
  sellers: Seller[];
  totalUsers?: number;
}

export async function fetchGetSellers(): Promise<Result> {
  const response = await axiosInstance.get<Result>("/api/sellers");

  return response.data;
}
