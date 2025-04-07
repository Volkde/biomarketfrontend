import { useState, useCallback } from 'react';
import api from '../../../services/api';
import { Product } from '../../../types/product';
import { ViewMode } from '../ui/Root/types';

interface Params {
  viewMode: ViewMode;
  limit: number;
  page: number;
}

export const useProducts = ({ viewMode, limit, page }: Params) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>(viewMode);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async (filters: Record<string, string>) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Параметры уже в правильном формате, просто передаем их
      console.log('Отправляем запрос с параметрами:', filters);
      const response = await api.get('/api/products', {
        params: filters
      });
      console.log('Получен ответ:', response.data);

      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else if (response.data?.products) {
        setProducts(response.data.products);
      } else {
        setProducts([]);
        setError('Unexpected data format');
      }
    } catch (err) {
      setError('Failed to load products');
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    products,
    isLoading,
    error,
    currentViewMode,
    setCurrentViewMode,
    fetchProducts,
  };
};
