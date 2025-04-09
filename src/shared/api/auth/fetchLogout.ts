import { axiosInstance } from "shared/api/axiosInstance";

export type Result = void;

export async function fetchLogout(): Promise<Result> {
  const response = await axiosInstance.post<Result>("/auth/logout");

  return response.data;
}
