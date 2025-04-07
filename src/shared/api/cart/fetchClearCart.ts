import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  userId: number;
}

export type Result = void;

export async function fetchClearCart({ userId }: Payload): Promise<Result> {
  await axiosInstance.delete<Result>(`/api/users/clear-cart/${userId}`);
}
