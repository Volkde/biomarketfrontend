import { Dispatch, SetStateAction } from 'react';
import { ViewMode } from '../Root/types';

export interface FiltersState {
  categoryId: string;
  minPrice: number;
  maxPrice: number;
  minRating: string;
  sort: string;
  isOrganic: boolean;
  isLocal: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export interface FiltersProps {
  filters: FiltersState;
  onFilterChange: (filters: FiltersState) => void;
  viewMode?: ViewMode;
  onViewModeChange?: Dispatch<SetStateAction<ViewMode>>;
}
