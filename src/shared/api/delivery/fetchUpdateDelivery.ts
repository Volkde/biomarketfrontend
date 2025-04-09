import { axiosInstance } from "shared/api/axiosInstance";
import { Delivery } from "types/Delivery";

export type Payload = Delivery;

export type Result = Delivery;

export async function fetchDeleteDelivery(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(`/delivery`, payload);

  return response.data;
}
