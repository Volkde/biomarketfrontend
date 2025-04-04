import { axiosInstance } from "shared/api/axiosInstance";

export async function fetchLogout(): Promise<void> {
  await axiosInstance.post<void>("/api/auth/logout");
}
