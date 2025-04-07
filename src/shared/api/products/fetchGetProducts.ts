import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Product } from "types/Product";

export interface Params {
  searchTerm?: string;
  categoryId?: number;
  priceMin?: number;
  priceMax?: number;
  sellerId?: number;
  ratingMin?: number;
  inStock?: boolean;
  discount?: boolean;
  sortBy?: "price" | "rating" | "popularity" | "new";
  sortOrder?: "asc" | "desc";
  limit?: number;
  page?: number;
}

export interface Response {
  products: Product[];
  page?: number;
  totalPages?: number;
}

export async function fetchGetProducts(params: Params): Promise<Response> {
  const response = await axiosInstance.get<Response>("/api/products", {
    params: convertToSearchParams(params)
  });

  return response.data;
}
