import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { User } from "types/User";

export interface Params {
  userId: string | number;
}

export interface Response {
  user: User;
  message?: string;
}

export async function fetchGetUserById(params: Params): Promise<Response> {
  const response = await axiosInstance.get<Response>(
    `/api/users/${params.userId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
