import { axiosInstance } from "shared/api/axiosInstance";
import { Product } from "types/Product";

export type Payload = Product;

export interface Result {
  product: Product;
}

export async function fetchUpdateProduct(payload: Payload): Promise<Result> {
  const response = await axiosInstance.put<Result>(
    `/api/products/${payload.id}`,
    payload
  );

  return response.data;
}
