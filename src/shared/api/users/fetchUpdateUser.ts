import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Payload extends User {}

export interface Response {
  user: User;
  message?: string;
}

export async function fetchGetUserById(payload: Payload): Promise<Response> {
  const response = await axiosInstance.put<Response>(
    `/api/users/${payload.id}`,
    payload
  );

  return response.data;
}
