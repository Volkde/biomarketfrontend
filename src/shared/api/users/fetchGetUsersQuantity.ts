import { axiosInstance } from "shared/api/axiosInstance";

// TODO: Бэк должен вернуть объект
export type Result = number;

export async function fetchGetUsersQuantity(): Promise<Result> {
  const response = await axiosInstance.get<Result>("/users/quantity");

  return response.data;
}
