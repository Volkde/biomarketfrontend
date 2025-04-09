import { axiosInstance } from "shared/api/axiosInstance";
import { Product } from "types/Product";

export interface Payload {
  productId: number;
}

export interface Result {
  product: Product;
}

export async function fetchDeleteProduct({
  productId
}: Payload): Promise<Result> {
  const response = await axiosInstance.delete<Result>(`/products/${productId}`);

  return response.data;
}
