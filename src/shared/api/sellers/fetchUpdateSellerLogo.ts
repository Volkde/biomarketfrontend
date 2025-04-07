import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  sellerId: number;
  logo: File;
}

export interface Result {
  logoUrl: string;
}

export async function fetchUpdateSellerLogo({
  sellerId,
  logo
}: Payload): Promise<Result> {
  const formData = new FormData();
  formData.append("logo", logo);

  const response = await axiosInstance.put<Result>(
    `/api/sellers/${sellerId}/logo`,
    formData
  );

  return response.data;
}
