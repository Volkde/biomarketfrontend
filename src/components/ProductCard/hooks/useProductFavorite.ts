/**
 * Hook for managing product favorite functionality
 */
import { useState, useCallback } from 'react';

/**
 * Custom hook to manage product favorite state and actions
 * @param productId - The ID of the product
 * @returns Object containing favorite state and toggle function
 */
export const useProductFavorite = (productId: string) => {
  // In a real app, this would check a user's favorites from context/API
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = useCallback(() => {
    setIsFavorite(prev => {
      const newState = !prev;
      // Here you would make API call to update favorite status
      // api.post('/favorites', { productId, isFavorite: newState });
      return newState;
    });
  }, [productId]);

  return {
    isFavorite,
    toggleFavorite
  };
};

export default useProductFavorite;
