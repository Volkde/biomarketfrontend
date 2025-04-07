import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export type Payload = User;

export interface Result {
  user: User;
}

export async function fetchGetUserById(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/api/users/${payload.id}`,
    payload
  );

  return response.data;
}
