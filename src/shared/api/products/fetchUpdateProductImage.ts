import { axiosInstance } from "shared/api/axiosInstance";

export interface Payload {
  productId: number;
  image: File;
}

export interface Result {
  imageUrl: string;
}

export async function fetchUpdateProductImage({
  productId,
  image
}: Payload): Promise<Result> {
  const formData = new FormData();
  formData.append("image", image);

  const response = await axiosInstance.put<Result>(
    `/products/${productId}/images`,
    formData
  );

  return response.data;
}
