/**
 * Hook for managing add to cart functionality
 */
import { useState, useCallback } from 'react';
import { Product } from '../../../types/product';

/**
 * Custom hook to manage add to cart functionality
 * @param product - The product to be added to cart
 * @returns Object containing cart state and actions
 */
export const useAddToCart = (product: Product) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const addToCart = useCallback(async () => {
    if (!product) return;
    
    try {
      setIsAddingToCart(true);
      // Here you would make an API call to add the product to cart
      // await api.post('/cart', { productId: product.id, quantity });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setIsInCart(true);
      // You could also trigger a cart update in a global context
    } catch (error) {
      console.error('Error adding product to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  }, [product, quantity]);

  const updateQuantity = useCallback((newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity)); // Ensure quantity is at least 1
  }, []);

  return {
    isAddingToCart,
    isInCart,
    quantity,
    updateQuantity,
    addToCart
  };
};

export default useAddToCart;
