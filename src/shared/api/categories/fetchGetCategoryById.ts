import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Category } from "types/Category";

export interface Params {
  categoryId: number;
}

export interface Result {
  category: Category;
}

export async function fetchGetCategoryById(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/categories/${params.categoryId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
