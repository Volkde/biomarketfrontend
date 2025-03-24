import { Box, Typography, styled } from '@mui/material';

export const ProductCardContainer = styled(Box)({
  flex: '1 1 250px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

export const ProductLink = styled(Box)({
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
});

export const ProductImage = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderBottom: '1px solid #eee',
});

export const ProductInfo = styled(Box)({
  padding: '15px',
});

export const ProductName = styled(Typography)({
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
  color: '#333',
  textAlign: 'center',
});

export const ProductPrice = styled(Typography)({
  fontSize: '18px',
  color: '#666',
  margin: '0 0 10px 0',
  textAlign: 'center',
});

export const ProductRating = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2px',
});