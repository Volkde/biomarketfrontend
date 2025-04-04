import { axiosInstance } from "shared/api/axiosInstance";
import { Category } from "types/Category";

export interface Payload extends Category {}

export interface Response {
  category: Category;
}



export async function fetchCreateCategory(payload: Payload): Promise<Response> {
  const response = await axiosInstance.post<Response>("/api/category", payload);

  return response.data;
}
