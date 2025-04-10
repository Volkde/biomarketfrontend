import { axiosInstance } from "shared/api/axiosInstance";
import { Delivery } from "types/Delivery";

export type Payload = Delivery;

export type Result = Delivery;

export async function fetchCreateDelivery(payload: Payload): Promise<Result> {
  const response = await axiosInstance.post<Result>(`/delivery`, payload);

  return response.data;
}
