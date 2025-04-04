import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Category } from "types/Category";

export interface Params {
  categoryId: string | number;
}

export interface Response {
  category: Category;
}

export async function fetchGetCategoryById(params: Params): Promise<Response> {
  const response = await axiosInstance.get<Response>(
    `/api/categories/${params.categoryId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
