import { axiosInstance } from "shared/api/axiosInstance";
import { Order } from "types/Order";

export interface Payload extends Order {}

export interface Response {
  order: Order;
}

export async function fetchCreateOrder(payload: Payload): Promise<Response> {
  const response = await axiosInstance.post<Response>("/api/orders", payload);

  return response.data;
}
