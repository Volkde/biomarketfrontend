import { styled } from '@mui/material/styles';
import { Box, Typography, IconButton, Button } from '@mui/material';

export const CartItemContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  borderBottom: '1px solid #eee',
});

export const ProductInfo = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const QuantityControls = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const RemoveButton = styled(IconButton)({
  color: 'red',
});
