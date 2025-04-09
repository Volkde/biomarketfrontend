import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  email: string;
}

export type Result = void;

export async function fetchResetPassword(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    "/auth/reset-password",
    payload
  );

  return response.data;
}
