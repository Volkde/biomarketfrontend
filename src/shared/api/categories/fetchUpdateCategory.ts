import { axiosInstance } from "shared/api/axiosInstance";
import { Category } from "types/Category";

export interface Payload extends Category {}

export interface Result {
  category: Category;
}

export async function fetchUpdateCategory(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/api/categories/${payload.id}`,
    payload
  );

  return response.data;
}
