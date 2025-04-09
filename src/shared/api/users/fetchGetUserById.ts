import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { User } from "types/User";

export interface Params {
  userId: number;
}

export interface Result {
  user: User;
}

export async function fetchGetUserById(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>(`/users/${params.userId}`, {
    params: convertToSearchParams(params)
  });

  return response.data;
}
