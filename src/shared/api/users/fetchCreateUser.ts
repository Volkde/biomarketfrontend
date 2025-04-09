import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export type Payload = User;

export interface Result {
  user: User;
}

export async function fetchCreateUser(payload: Payload): Promise<Result> {
  const response = await axiosInstance.post<Result>("/users", payload);

  return response.data;
}
