import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Params {
  userId: number;
}

export interface Result {
  user: User;
}

export async function fetchDeleteUser({ userId }: Params): Promise<Result> {
  const response = await axiosInstance.delete<Result>(`/api/users/${userId}`);

  return response.data;
}
