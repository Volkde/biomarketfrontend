import { axiosInstance } from "shared/api/axiosInstance";
import { Order } from "types/Order";

export interface Props {
  sellerId: number;
}

export interface Result {
  orders: Order[];
  totalOrders?: number;
}

export async function fetchGetOrdersBySellerId({
  sellerId
}: Props): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/orders/seller/${sellerId}`
  );

  return response.data;
}
