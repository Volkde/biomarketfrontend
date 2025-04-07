/**
 * Hook for managing product quick view functionality
 */
import { useState, useCallback } from 'react';
import { Product } from '../../../types/product';

/**
 * Custom hook to manage product quick view modal state
 * @param product - The product to be viewed
 * @returns Object containing quick view state and actions
 */
export const useQuickView = (product: Product) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  const openQuickView = useCallback(() => {
    setIsQuickViewOpen(true);
    // You could also track analytics here
    // analytics.track('product_quick_view', { productId: product.id });
  }, [product]);
  
  const closeQuickView = useCallback(() => {
    setIsQuickViewOpen(false);
  }, []);
  
  return {
    isQuickViewOpen,
    openQuickView,
    closeQuickView
  };
};

export default useQuickView;
