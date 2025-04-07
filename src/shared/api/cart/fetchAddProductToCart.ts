import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  userId: number;
  productId: number;
}

export type Result = void;

export async function fetchAddProductToCart(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/api/users/${payload.userId}/product/${payload.productId}`,
    payload
  );

  return response.data;
}
