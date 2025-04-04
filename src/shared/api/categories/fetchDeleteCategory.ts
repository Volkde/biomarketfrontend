import { axiosInstance } from "shared/api/axiosInstance";
import { Category } from "types/Category";

export interface Payload {
  categoryId: string | number;
}

export interface Response {
  category: Category;
}

export async function fetchDeleteCategory(payload: Payload): Promise<Response> {
  const response = await axiosInstance.delete<Response>(
    `/api/category/${payload.categoryId}`
  );

  return response.data;
}
