import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Result {
  users: User[];
  totalUsers?: number;
}

export async function fetchGetUsers(): Promise<Result> {
  const response = await axiosInstance.get<Result>("/api/users");

  return response.data;
}
