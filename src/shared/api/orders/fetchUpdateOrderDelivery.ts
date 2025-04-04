import { axiosInstance } from "shared/api/axiosInstance";
import { Order } from "types/Order";

export interface Payload {
  orderId: string | number;
  shippingMethod: string;
  deliveryAddress: string;
}

export interface Response {
  order: Order;
  message?: string;
}

export async function fetchUpdateOrderDelivery(
  payload: Payload
): Promise<Response> {
  const response = await axiosInstance.put<Response>(
    `/api/orders/${payload.orderId}/delivery`,
    payload
  );

  return response.data;
}
