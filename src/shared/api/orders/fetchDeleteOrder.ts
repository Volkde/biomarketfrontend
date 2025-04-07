import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  orderId: number;
}

export type Result = void;

export async function fetchDeleteOrder({ orderId }: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(`/api/orders/${orderId}`);

  return response.data;
}
