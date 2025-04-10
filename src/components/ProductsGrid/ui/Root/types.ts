export interface RootProps {
  filters?: ProductsFilters;
  limit?: number;
  page?: number;
  pagination?: boolean;
}

export interface ProductsFilters {
  search_term?: string;
  category_id?: number;
  price_min?: number;
  price_max?: number;
  seller_id?: number;
  rating_min?: number;
  in_stock?: boolean;
  discounted?: boolean;
  sort_by?: ProductsFilterSortBy;
  sort_order?: ProductsFilterSortOrder;
}

export type ProductsFilterSortBy = "title" | "price" | "rating";
export type ProductsFilterSortOrder = "asc" | "desc";
