import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Tooltip,
  Link,
  Container,
  Breadcrumbs
} from "@mui/material";
import { motion } from "framer-motion";

export const StyledWishlistContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  maxWidth: '1200px',
  margin: '0 auto',
}));

export const StyledWishlistList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  justifyContent: 'center',
  padding: theme.spacing(2, 0),
}));

export const StyledWishlistItem = styled(Box)(({ theme }) => ({
  width: 'calc(33.333% - 24px)',
  maxWidth: '300px',
  minWidth: '250px',
  background: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.down('md')]: {
    width: 'calc(50% - 12px)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const StyledWishlistProductImage = styled(Box)(({ theme }) => ({
  width: '100%',
  aspectRatio: '1',
  borderRadius: '12px 12px 0 0',
  overflow: 'hidden',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export const StyledWishlistProductInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const StyledWishlistProductTitle = styled(Typography)({
  fontSize: '1.1rem',
  fontWeight: 500,
  color: '#333333',
  marginBottom: '8px',
  maxHeight: '48px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});

export const StyledWishlistProductDescription = styled(Typography)({
  color: '#666666',
  fontSize: '0.875rem',
  lineHeight: 1.4,
  marginTop: '4px',
  marginBottom: '8px',
  maxHeight: '48px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
});

export const StyledWishlistProductTags = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  flexWrap: 'wrap',
  marginBottom: theme.spacing(1),
  '& .organic-tag': {
    backgroundColor: '#a5d6a7',
    color: '#333333',
    borderRadius: '12px',
    fontSize: '0.75rem',
    padding: '2px 8px',
    fontWeight: 500,
  },
  '& .local-tag': {
    backgroundColor: '#8d6e63',
    color: '#ffffff',
    borderRadius: '12px',
    fontSize: '0.75rem',
    padding: '2px 8px',
    fontWeight: 500,
  },
}));

export const StyledWishlistProductPrice = styled(Typography)({
  color: '#66bb6a',
  fontWeight: 600,
  fontSize: '1.1rem',
  marginBottom: '16px',
});

export const StyledWishlistActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  marginTop: theme.spacing(1),
}));

export const StyledWishlistAddToCartButton = styled(IconButton)(({ theme }) => ({
  color: '#66bb6a',
  '&:hover': {
    backgroundColor: '#e8f5e9',
  },
}));

export const StyledWishlistRemoveButton = styled(IconButton)(({ theme }) => ({
  color: '#8d6e63',
  '&:hover': {
    backgroundColor: '#fff3e0',
  },
}));

export const StyledWishlistEmptyState = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  '& .empty-message': {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#333333',
    marginBottom: theme.spacing(2),
  },
  '& .empty-description': {
    color: '#666666',
    marginBottom: theme.spacing(2),
  },
  '& .empty-action': {
    color: '#66bb6a',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export const StyledBreadcrumbs = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .home-icon': {
    marginRight: theme.spacing(1),
  },
}));
