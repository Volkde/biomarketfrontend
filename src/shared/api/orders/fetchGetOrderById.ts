import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Order } from "types/Order";

export interface Params {
  orderId: number;
}

export interface Result {
  order: Order;
}

export async function fetchGetOrderById(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/api/orders/${params.orderId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
