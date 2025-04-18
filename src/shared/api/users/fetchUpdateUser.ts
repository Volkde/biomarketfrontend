import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export type Payload = User;

export interface Result {
  user: User;
}

export async function fetchUpdateUser(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/users/${payload.id}`,
    payload
  );

  return response.data;
}
