import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Grid, Paper, Chip, IconButton } from "@mui/material";
import { ShoppingCart, FavoriteBorder, Share, MoreVert } from "@mui/icons-material";

export const PageContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  maxWidth: 1200,
  margin: '0 auto',
  width: '100%'
}));

export const ProductGrid = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export const ProductImage = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)'
    }
  },
  '& .product-actions': {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(1),
    zIndex: 1
  }
}));

export const ProductInfo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  backgroundColor: theme.palette.background.default
}));

export const ProductName = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  lineHeight: 1.2
}));

export const ProductPrice = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));

export const CurrentPrice = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#66bb6a',
  '& .currency': {
    fontSize: '1rem',
    fontWeight: 500
  }
}));

export const OldPrice = styled(Typography)({
  textDecoration: 'line-through',
  color: '#8d6e63',
  fontSize: '1.25rem',
  fontWeight: 500
});

export const ProductDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  marginBottom: theme.spacing(3)
}));

export const ProductTags = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  marginBottom: theme.spacing(3)
}));

export const Tag = styled(Chip)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#666666',
  fontSize: '0.875rem',
  fontWeight: 500,
  '& .MuiChip-label': {
    padding: theme.spacing(0.5, 1)
  }
}));

export const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
  flexWrap: 'wrap'
}));

export const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#66bb6a',
  color: '#ffffff',
  padding: theme.spacing(1.5, 3),
  textTransform: 'none',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: '#4caf50',
    transform: 'translateY(-1px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
  }
}));

export const FavoriteButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#fff3e0',
  color: '#8d6e63',
  padding: theme.spacing(1.5, 3),
  textTransform: 'none',
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: '#ffe0b2',
    color: '#66bb6a'
  }
}));

export const ProductActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  '& .action-button': {
    color: '#666666',
    '&:hover': {
      color: '#66bb6a'
    }
  }
}));
