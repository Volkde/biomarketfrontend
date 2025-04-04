import { axiosInstance } from "shared/api/axiosInstance";
import { Order } from "types/Order";

export interface Response {
  orders: Order[];
  totalOrders?: number;
}

export async function fetchGetOrders(): Promise<Response> {
  const response = await axiosInstance.get<Response>("/api/orders");

  return response.data;
}
