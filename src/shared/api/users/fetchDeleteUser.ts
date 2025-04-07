import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Params {
  userId: number;
}

export interface Result {
  user: User;
}

export async function fetchDeleteUser(params: Params): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/api/users/${params.userId}`
  );

  return response.data;
}
