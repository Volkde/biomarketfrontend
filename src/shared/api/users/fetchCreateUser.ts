import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export type Payload = User;

export interface Response {
  user: User;
}

export async function fetchCreateUser(payload: Payload): Promise<Response> {
  const response = await axiosInstance.post<Response>("/api/users", payload);

  return response.data;
}
