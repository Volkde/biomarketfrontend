import { axiosInstance } from "shared/api/axiosInstance";
import { Product } from "types/Product";

export interface Payload extends Product {}

export interface Response {
  product: Product;
  message?: string;
}

export async function fetchCreateProduct(payload: Payload): Promise<Response> {
  const response = await axiosInstance.post<Response>("/api/products", payload);

  return response.data;
}
