import { useState } from 'react';
import { FiltersState } from '../ui/Filters/types';

export const useFilters = () => {
  // Создаем объект с дефолтными значениями
  const defaultFilters: FiltersState = {
    categoryId: '',
    minPrice: 0,
    maxPrice: 100,
    minRating: '',
    sort: 'price,asc',
    isOrganic: false,
    isLocal: false
  };

  const [filterValues, setFilterValues] = useState<FiltersState>(defaultFilters);

  const handleFilterChange = (filters: FiltersState) => {
    setFilterValues(filters);
  };

  // Добавляем функцию для сброса фильтров
  const resetFilters = () => {
    setFilterValues(defaultFilters);
  };

  return {
    filterValues,
    handleFilterChange,
    resetFilters,
    defaultFilters
  };
};
