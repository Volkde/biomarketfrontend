import { axiosInstance } from "shared/api/axiosInstance";
import { Category } from "types/Category";

export interface Payload extends Category {}

export interface Response {
  category: Category;
}

export async function fetchUpdateCategory(payload: Payload): Promise<Response> {
  const response = await axiosInstance.put<Response>(
    `/api/categories/${payload.id}`,
    payload
  );

  return response.data;
}
