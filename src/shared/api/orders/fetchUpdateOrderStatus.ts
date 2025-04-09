import { axiosInstance } from "shared/api/axiosInstance";
import { Order } from "types/Order";

export interface Payload {
  orderId: number;
  status: string;
}

export interface Result {
  order: Order;
}

export async function fetchUpdateOrderStatus(
  payload: Payload
): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/orders/${payload.orderId}/status`,
    payload
  );

  return response.data;
}
