import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

export const Section = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(4),
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
}));

export const ProductName = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#2E7D32',
  borderBottom: '2px solid #A5D6A7',
  paddingBottom: theme.spacing(1),
}));

export const Price = styled(Typography)({
  fontWeight: 'bold',
  color: '#4CAF50',
});

export const OldPrice = styled(Typography)({
  textDecoration: 'line-through',
  color: '#8D6E63',
  marginLeft: 8,
});

export const DescriptionBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#FAFAF0',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  border: '1px solid #F5F5DC',
}));

export const AddToCartButton = styled(Button)({
  fontWeight: 'bold',
  backgroundColor: '#66BB6A',
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  '&:hover': {
    backgroundColor: '#388E3C',
    transform: 'translateY(-2px)',
    transition: 'all 0.2s',
  },
});

export const FavoriteButton = styled(Button)({
  borderColor: '#A1887F',
  color: '#8D6E63',
  '&:hover': {
    backgroundColor: '#F5F5DC',
    color: '#4CAF50',
  },
});
