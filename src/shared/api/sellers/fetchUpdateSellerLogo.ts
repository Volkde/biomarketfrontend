import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  sellerId: string | number;
  logo: File;
}

export interface Response {
  logoUrl: string;
  message?: string;
}

export async function fetchUpdateSellerLogo({
  sellerId,
  logo
}: Payload): Promise<Response> {
  const formData = new FormData();
  formData.append("logo", logo);

  const response = await axiosInstance.put<Response>(
    `/api/sellers/${sellerId}/logo`,
    formData
  );

  return response.data;
}
