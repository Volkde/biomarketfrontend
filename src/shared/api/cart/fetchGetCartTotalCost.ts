import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";

export interface Params {
  userId: number;
}

// TODO: Бэк должен вернуть объект
export type Result = number;

export async function fetchGetCartTotalCost(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/users/total-cost/${params.userId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
