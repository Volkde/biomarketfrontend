import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Payload {
  email: string;
  password: string;
}

export interface Result {
  user: User;
}

export async function fetchLogin(payload: Payload): Promise<Result> {
  const response = await axiosInstance.post<Result>("/auth/login", payload);
  return response.data;
}
