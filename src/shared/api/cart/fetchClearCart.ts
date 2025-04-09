import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  userId: number;
}

export type Result = void;

export async function fetchClearCart({ userId }: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/users/clear-cart/${userId}`
  );

  return response.data;
}
