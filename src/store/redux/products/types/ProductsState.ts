import { Product } from "types/Product";

export interface ProductsState {
  status: "default" | "loading" | "success" | "error";
  products?: Product[];
  product?: Product;
  totalPages?: number;
  page?: number;
  error?: string;
}
