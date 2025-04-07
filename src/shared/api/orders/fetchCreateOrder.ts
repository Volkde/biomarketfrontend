import { axiosInstance } from "shared/api/axiosInstance";
import { Order } from "types/Order";

export interface Payload extends Order {}

export interface Result {
  order: Order;
}

export async function fetchCreateOrder(payload: Payload): Promise<Result> {
  const response = await axiosInstance.post<Result>("/api/orders", payload);

  return response.data;
}
