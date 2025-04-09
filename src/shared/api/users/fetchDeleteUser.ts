import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Payload {
  userId: number;
}

export interface Result {
  user: User;
}

export async function fetchDeleteUser({ userId }: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(`/users/${userId}`);

  return response.data;
}
