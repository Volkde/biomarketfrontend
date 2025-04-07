/**
 * Combined hook for all product-related actions
 */
import { useMemo } from 'react';
import { Product } from '../../../types/product';
import useProductFavorite from './useProductFavorite';
import useAddToCart from './useAddToCart';
import useQuickView from './useQuickView';

/**
 * Unified hook that combines all product-related actions
 * This simplifies the implementation in the ProductCard component
 * by providing a single entry point for all product interactions
 * 
 * @param product - The product to manage actions for
 * @returns Object containing all product actions and states
 */
export const useProductActions = (product: Product) => {
  // Ensure product has an ID and convert to string
  const productId = product?.id ? String(product.id) : '';
  
  // Individual hooks
  const favorite = useProductFavorite(productId);
  const cart = useAddToCart(product);
  const quickView = useQuickView(product);
  
  // Combine all actions into a single object
  const actions = useMemo(() => ({
    // Favorite actions
    favorite: {
      isFavorite: favorite.isFavorite,
      toggleFavorite: favorite.toggleFavorite
    },
    
    // Cart actions
    cart: {
      isInCart: cart.isInCart,
      isAddingToCart: cart.isAddingToCart,
      quantity: cart.quantity,
      updateQuantity: cart.updateQuantity,
      addToCart: cart.addToCart
    },
    
    // Quick view actions
    quickView: {
      isOpen: quickView.isQuickViewOpen,
      open: quickView.openQuickView,
      close: quickView.closeQuickView
    }
  }), [favorite, cart, quickView]);
  
  return actions;
};

export default useProductActions;
