import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  userId: string;
  avatar: File;
}

export interface Result {
  avatarUrl: string;
}

export async function fetchUpdateUserAvatar({
  userId,
  avatar
}: Payload): Promise<Result> {
  const formData = new FormData();
  formData.append("avatar", avatar);

  const response = await axiosInstance.put<Result>(
    `/users/${userId}/avatar`,
    formData
  );

  return response.data;
}
