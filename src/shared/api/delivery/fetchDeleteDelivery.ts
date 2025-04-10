import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  deliveryId: number;
}

export type Result = void;

export async function fetchDeleteDelivery(payload: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/delivery/${payload.deliveryId}`
  );

  return response.data;
}
