import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  email: string;
}

export async function fetchResetPassword(payload: Payload): Promise<void> {
  const response = await axiosInstance.put<void>(
    "/auth/reset-password",
    payload
  );

  return response.data;
}
