import { Product } from "types/Product";
import { ReduxStateStatus } from "types/ReduxStateStatus";
import { Review } from "types/Review";

export interface ProductsState {
  status: ReduxStateStatus;
  products?: Product[];
  product?: Product;
  review?: Review;
  imageUrl?: string;
  totalPages?: number;
  page?: number;
  error?: string;
}
