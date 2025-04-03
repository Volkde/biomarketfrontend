import { axiosInstance } from "shared/api/axiosInstance";

export async function fetchRefresh(): Promise<void> {
  const response = await axiosInstance.get<void>("/auth/refresh");

  return response.data;
}
