import { axiosInstance } from "shared/api/axiosInstance";
import { Delivery } from "types/Delivery";

export type Result = Delivery[];

export async function fetchGetDeliveries(): Promise<Result> {
  const response = await axiosInstance.get<Result>(`/delivery`);

  return response.data;
}
