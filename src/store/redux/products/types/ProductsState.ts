import { Product } from "types/Product";
import { ReduxStateStatus } from "types/ReduxStateStatus";

export interface ProductsState {
  status: ReduxStateStatus;
  products?: Product[];
  product?: Product;
  totalPages?: number;
  page?: number;
  error?: string;
}
