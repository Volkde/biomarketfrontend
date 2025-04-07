import { axiosInstance } from "shared/api/axiosInstance";
import { Category } from "types/Category";

export interface Payload {
  categoryId: number;
}

export interface Result {
  category: Category;
}

export async function fetchDeleteCategory(payload: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/api/category/${payload.categoryId}`
  );

  return response.data;
}
