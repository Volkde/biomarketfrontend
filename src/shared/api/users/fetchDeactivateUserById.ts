import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Payload {
  userId: number;
}

export interface Result {
  user: User;
}

export async function fetchGetUserById(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/api/users/deactivate/${payload.userId}`,
    payload
  );

  return response.data;
}
