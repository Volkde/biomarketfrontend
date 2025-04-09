import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Product } from "types/Product";

export interface Params {
  searchTerm?: string;
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  sellerId?: number;
  ratingMin?: number;
  inStock?: boolean;
  discount?: boolean;
  sortBy?: "price" | "title";
  sortOrder?: "asc" | "desc";
  limit?: number;
  page?: number;
}

export interface Result {
  products: Product[];
  page?: number;
  totalPages?: number;
}

export async function fetchGetProducts(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>("/products", {
    params: convertToSearchParams(params)
  });

  return response.data;
}
