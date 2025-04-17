import { ProductsFilterSortBy } from "./ProductsFilterSortBy";
import { ProductsFilterSortOrder } from "./ProductsFilterSortOrder";

export interface ProductsFilters {
  search_term?: string;
  category?: string;
  category_id?: number;
  min_price?: number;
  max_price?: number;
  seller_id?: number;
  rating_min?: number;
  in_stock?: boolean;
  discounted?: boolean;
  sort_by?: ProductsFilterSortBy;
  sort_order?: ProductsFilterSortOrder;
}
