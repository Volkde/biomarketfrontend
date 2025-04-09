export interface FiltersProps {
  filters: {
    categoryId: string;
    minPrice: string;
    maxPrice: string;
    minRating: string;
    sort: string;
  };
  onFilterChange: (filters: any) => void;
}

export interface Filters {
  categoryId: string;
  minPrice: string;
  maxPrice: string;
  minRating: string;
  sort: string;
}

export interface Category {
  id: string;
  name: string;
}
