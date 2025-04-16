import { ProductsFilters } from "../../types/ProductsFilters";

export interface RootProps {
  filters?: ProductsFilters;
  limit?: number;
  page?: number;
  pagination?: boolean;
}
