import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  userId: number;
  productId: number;
}

export type Result = void;

export async function fetchRemoveProductFromCart({
  userId,
  productId
}: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/api/users/remove-user/${userId}/product/${productId}`
  );

  return response.data;
}
