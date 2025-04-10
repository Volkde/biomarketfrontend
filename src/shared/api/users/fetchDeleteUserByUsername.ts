import { axiosInstance } from "shared/api/axiosInstance";
import { User } from "types/User";

export interface Payload {
  username: string;
}

export interface Result {
  user: User;
}

export async function fetchDeleteUserByUsername({
  username
}: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(
    `/users/by-username/${username}`
  );

  return response.data;
}
