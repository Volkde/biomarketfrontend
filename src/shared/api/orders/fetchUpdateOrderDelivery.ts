import { axiosInstance } from "shared/api/axiosInstance";
import { Order } from "types/Order";

export interface Payload {
  orderId: number;
  shippingMethod: string;
  deliveryAddress: string;
}

export interface Result {
  order: Order;
}

export async function fetchUpdateOrderDelivery(
  payload: Payload
): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/orders/${payload.orderId}/delivery`,
    payload
  );

  return response.data;
}
