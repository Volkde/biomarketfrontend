import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  userId: string | number;
  avatar: File;
}

export interface Response {
  avatarUrl: string;
  message?: string;
}

export async function fetchUpdateUserAvatar({
  userId,
  avatar
}: Payload): Promise<Response> {
  const formData = new FormData();
  formData.append("avatar", avatar);

  const response = await axiosInstance.put<Response>(
    `/api/users/${userId}/avatar`,
    formData
  );

  return response.data;
}
