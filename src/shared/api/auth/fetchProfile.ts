import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Result {
  user: User;
}

export async function fetchProfile(): Promise<Result> {
  const response = await axiosInstance.post<Result>("/api/auth/profile");

  return response.data;
}
