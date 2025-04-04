import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Order } from "types/Order";

export interface Params {
  orderId: string | number;
}

export interface Response {
  order: Order;
  message?: string;
}

export async function fetchGetOrderById(params: Params): Promise<Response> {
  const response = await axiosInstance.get<Response>(
    `/api/orders/${params.orderId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
