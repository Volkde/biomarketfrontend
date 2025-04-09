import { axiosInstance } from "shared/api/axiosInstance";
import { Category } from "types/Category";

export interface Payload {
  categoryId: number;
}

export interface Result {
  category: Category;
}

export async function fetchDeleteCategory({
  categoryId
}: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/category/${categoryId}`
  );

  return response.data;
}
