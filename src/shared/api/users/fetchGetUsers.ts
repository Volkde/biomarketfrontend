import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Response {
  users: User[];
  totalUsers?: number;
}

export async function fetchGetUsers(): Promise<Response> {
  const response = await axiosInstance.get<Response>("/api/users");

  return response.data;
}
