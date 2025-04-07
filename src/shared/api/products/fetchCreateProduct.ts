import { axiosInstance } from "shared/api/axiosInstance";
import { Product } from "types/Product";

export interface Payload extends Product {}

export interface Result {
  product: Product;
}

export async function fetchCreateProduct(payload: Payload): Promise<Result> {
  const response = await axiosInstance.post<Result>("/api/products", payload);

  return response.data;
}
