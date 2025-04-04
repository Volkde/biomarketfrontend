import { axiosInstance } from "shared/api/axiosInstance";
import { Product } from "types/Product";

export interface Payload {
  productId: string | number;
}

export interface Response {
  product: Product;
  message?: string;
}

export async function fetchDeleteProduct(payload: Payload): Promise<Response> {
  const response = await axiosInstance.delete<Response>(
    `/api/products/${payload.productId}`
  );

  return response.data;
}
