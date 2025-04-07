import { axiosInstance } from "shared/api/axiosInstance";
import { Order } from "types/Order";

export interface Result {
  orders: Order[];
  totalOrders?: number;
}

export async function fetchGetOrders(): Promise<Result> {
  const response = await axiosInstance.get<Result>("/api/orders");

  return response.data;
}
