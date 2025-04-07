import { axiosInstance } from "shared/api/axiosInstance";
import { Category } from "types/Category";

export type Payload = Category;

export interface Result {
  category: Category;
}

export async function fetchCreateCategory(payload: Payload): Promise<Result> {
  const response = await axiosInstance.post<Result>("/api/category", payload);

  return response.data;
}
