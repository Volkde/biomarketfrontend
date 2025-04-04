import { axiosInstance } from "shared/api/axiosInstance";
import { Order } from "types/Order";

export interface Payload {
  orderId: string | number;
  status: string;
}

export interface Response {
  order: Order;
  message?: string;
}

export async function fetchUpdateOrderStatus(
  payload: Payload
): Promise<Response> {
  const response = await axiosInstance.put<Response>(
    `/api/orders/${payload.orderId}/status`,
    payload
  );

  return response.data;
}
