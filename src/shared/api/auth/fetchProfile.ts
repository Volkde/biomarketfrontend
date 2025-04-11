import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export type Result = User;

export async function fetchProfile(): Promise<Result> {
  const response = await axiosInstance.get<Result>("/auth/profile");

  return response.data;
}
