import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Params {
  username: string;
}

export interface Result {
  user: User;
}

export async function fetchDeleteUserByUsername(
  params: Params
): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/api/users/by-username/${params.username}`
  );

  return response.data;
}
