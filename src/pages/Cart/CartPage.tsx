import { useEffect } from 'react';
import { Box, Container, Typography, Paper, Button, useTheme, useMediaQuery, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { cartSlice } from 'store/redux/cart/slice/cartSlice';
import { formatPrice } from 'shared/lib/helpers/formatPrice';
import { Cart } from 'components/Cart';

export const CartPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart, status } = useAppSelector(state => state.CART);

  useEffect(() => {
    dispatch(cartSlice.actions.fetchGetCart());
  }, [dispatch]);

  if (!cart?.items?.length) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ваша корзина пуста
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/shop')}
          >
            Продолжить покупки
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 4,
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 2 : 0
        }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/shop')}
            sx={{ mr: isMobile ? 0 : 2 }}
          >
            Продолжить покупки
          </Button>
          <Typography 
            variant="h4" 
            sx={{ 
              flex: 1,
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            Корзина
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 4 }}>
          <Box sx={{ gridColumn: '1 / span 2' }}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 2,
                background: theme.palette.background.default
              }}
            >
              <Cart />
            </Paper>
          </Box>

          <Box sx={{ gridColumn: '1 / span 1' }}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                position: 'sticky', 
                top: 24,
                background: theme.palette.background.default
              }}
            >
              <Typography variant="h6" gutterBottom>
                Итого
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Количество товаров</Typography>
                <Typography>{cart.items.length}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Сумма</Typography>
                <Typography variant="h6" color="primary">
                  {formatPrice(Number(cart.totalCartPrice))}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={() => navigate('/checkout')}
                disabled={status === 'loading'}
              >
                Оформить заказ
              </Button>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CartPage;