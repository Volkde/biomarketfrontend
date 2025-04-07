import { axiosInstance } from "shared/api/axiosInstance";

export type Result = void;

export async function fetchLogout(): Promise<Result> {
  await axiosInstance.post<Result>("/api/auth/logout");
}
