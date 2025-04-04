import { axiosInstance } from "shared/api/axiosInstance";
import { Product } from "types/Product";

export interface Payload extends Product {}

export interface Response {
  product: Product;
  message?: string;
}

export async function fetchUpdateProduct(payload: Payload): Promise<Response> {
  const response = await axiosInstance.put<Response>(
    `/api/products/${payload.id}`,
    payload
  );

  return response.data;
}
