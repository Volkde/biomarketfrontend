import { axiosInstance } from "shared/api/axiosInstance";

export async function fetchLogout(): Promise<void> {
  await axiosInstance.post<void>("/auth/logout");
}
