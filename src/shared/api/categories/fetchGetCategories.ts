import { axiosInstance } from "shared/api/axiosInstance";
import { Category } from "types/Category";

export interface Result {
  categories: Category[];
  totalCategories?: number;
}

export async function fetchGetCategories(): Promise<Result> {
  const response = await axiosInstance.get<Result>("/category");

  return response.data;
}
