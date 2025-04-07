import React from 'react';
import api from '../../services/api';
import { CartProduct, CartSidebarProps } from './types';
import { StyledDrawer, ContentWrapper } from './styles';
import { CartItem } from '../CartItem/CartItem';
import { Box, Typography, Button } from '@mui/material';

export const CartSidebar = ({ isOpen: propIsOpen, onClose: propOnClose }: CartSidebarProps = {}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [products, setProducts] = React.useState<CartProduct[]>([]);

  // Используем пропсы, если они переданы
  React.useEffect(() => {
    if (propIsOpen !== undefined) {
      setIsOpen(propIsOpen);
    }
  }, [propIsOpen]);

  // Обработчик закрытия
  const handleClose = () => {
    setIsOpen(false);
    if (propOnClose) {
      propOnClose();
    }
  };

  const updateProductQuantity = async (productId: number, newQuantity: number) => {
    try {
      await api.put(`/cart/${productId}/quantity`, { quantity: newQuantity });
      await fetchCart();
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeProduct = async (productId: number) => {
    try {
      await api.delete(`/cart/${productId}`);
      await fetchCart();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  const fetchCart = async () => {
    try {
      const { data } = await api.get('/cart');
      setProducts(data.products || []);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  // Слушаем события открытия/закрытия корзины
  React.useEffect(() => {
    const handleOpenCart = () => setIsOpen(true);
    const handleCloseCart = () => setIsOpen(false);
    
    document.addEventListener('openCartSidebar', handleOpenCart);
    document.addEventListener('closeCartSidebar', handleCloseCart);
    
    // Загружаем данные корзины при монтировании
    fetchCart();
    
    return () => {
      document.removeEventListener('openCartSidebar', handleOpenCart);
      document.removeEventListener('closeCartSidebar', handleCloseCart);
    };
  }, []);

  return (
    <StyledDrawer anchor="right" open={isOpen} onClose={handleClose}>
      <ContentWrapper>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Shopping Cart
        </Typography>
        
        {products.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <Typography variant="body1" color="text.secondary">
              Your cart is empty
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ mt: 2 }}
              onClick={handleClose}
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <>
            {products.map((product) => (
              <CartItem 
                key={product.id}
                product={product}
                onQuantityChange={(newQuantity: number) => updateProductQuantity(product.id, newQuantity)}
                onRemove={() => removeProduct(product.id)}
              />
            ))}
            
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">
                Total: ${products.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
              </Typography>
              <Button variant="contained" color="primary">
                Checkout
              </Button>
            </Box>
          </>
        )}
      </ContentWrapper>
    </StyledDrawer>
  );
};

export default CartSidebar;
