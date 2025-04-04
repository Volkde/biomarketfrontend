import { axiosInstance } from "shared/api/axiosInstance";
import { Category } from "types/Category";

export interface Response {
  categories: Category[];
  totalCategories?: number;
}

export async function fetchGetCategories(): Promise<Response> {
  const response = await axiosInstance.get<Response>("/api/category");

  return response.data;
}
