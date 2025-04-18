import { axiosInstance } from "shared/api/axiosInstance";

export type Result = void;

export async function fetchRefresh(): Promise<Result> {
  const response = await axiosInstance.get<Result>("/auth/refresh");

  return response.data;
}
