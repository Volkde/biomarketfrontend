import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  productId: string | number;
  image: File;
}

export interface Response {
  imageUrl: string;
  message?: string;
}

export async function fetchUpdateProductImage({
  productId,
  image
}: Payload): Promise<Response> {
  const formData = new FormData();
  formData.append("image", image);

  const response = await axiosInstance.put<Response>(
    `/api/products/${productId}/images`,
    formData
  );

  return response.data;
}
