import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Params {
  userId: string | number;
}

export interface Response {
  user: User;
  message?: string;
}

export async function fetchDeleteUser(params: Params): Promise<Response> {
  const response = await axiosInstance.delete<Response>(
    `/api/users/${params.userId}`
  );

  return response.data;
}
