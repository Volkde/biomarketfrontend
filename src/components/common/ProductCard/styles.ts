import { styled } from '@mui/material/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  Link as MuiLink, // Keep if needed elsewhere, not strictly for ProductCard display
} from '@mui/material';
// No need to import RouterLink here

// Main container - using MUI Card as a base
export const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative', // Needed for absolute positioning of badges
  height: '100%', // Ensure cards in a grid take full height
  display: 'flex',
  flexDirection: 'column',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[4], // Add a subtle hover effect
  },
}));

// Product Image - using MUI CardMedia
export const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: 180, // Fixed height for consistency
  objectFit: 'contain', // 'contain' to show whole image, 'cover' to fill
  backgroundColor: theme.palette.grey[100], // Lighter placeholder background
  padding: theme.spacing(1), // Add some padding around the contained image
  boxSizing: 'border-box', // Ensure padding is included in height
})) as typeof CardMedia; // Cast necessary for component prop

// Product Info section - using MUI CardContent
export const ProductInfo = styled(CardContent)(({theme}) => ({
  flexGrow: 1, // Allow content to expand
  padding: theme.spacing(2), // Standard padding
  paddingBottom: theme.spacing(1) + '!important', // Override CardContent's default bottom padding slightly
}));

// Product Name Typography
export const NameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '1rem', // Slightly smaller H6
  lineHeight: 1.4, // Adjust line height
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  minHeight: `calc(1.4em * 2)`, // Approx height for 2 lines based on line-height
  marginBottom: theme.spacing(0.5),
})) as typeof Typography;

// Product Price Typography
export const PriceTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  margin: theme.spacing(0.5, 0),
  fontSize: '1.1rem', // Make price slightly larger

  // Style for strikethrough text (original price)
  '& s': {
    fontWeight: 'normal',
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(1),
    fontSize: '0.9em', // Make original price slightly smaller
  },
})) as typeof Typography;

// Container for Rating Stars
export const RatingWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  minHeight: '1.2em', // Reserve space even if no rating
  color: theme.palette.warning.main, // Use theme color for stars

  '& svg': {
    marginRight: theme.spacing(0.25),
    fontSize: '1.1rem', // Adjust star size
    verticalAlign: 'middle', // Align stars better with potential text
  },
}));

// Common style for badges/labels
const BaseBadge = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  color: theme.palette.common.white,
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.75rem', // Slightly smaller badge text
  fontWeight: 600,
  zIndex: 1,
  lineHeight: 1.2,
}));

// Discount Label styled span
export const DiscountLabel = styled(BaseBadge)(({ theme }) => ({
  left: theme.spacing(1),
  backgroundColor: theme.palette.error.main,
}));

// New Badge styled span
export const NewBadge = styled(BaseBadge)(({ theme }) => ({
  right: theme.spacing(1),
  backgroundColor: theme.palette.success.main,
}));

// Area for stock status and add-to-cart button - using MUI CardActions
export const CardActionsArea = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 2, 1.5, 2), // Adjust padding (top, right, bottom, left)
}));

// Stock Status Typography
export const StockStatusTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'inStock',
})<{ inStock: boolean }>(({ theme, inStock }) => ({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: inStock ? theme.palette.success.dark : theme.palette.error.dark,
}));

// Add to Cart Button - using MUI Button
export const AddToCartButton = styled(Button)(({ theme }) => ({
  gap: theme.spacing(0.5), // Space between icon and text
  // Let size="small" control padding, or uncomment below for custom:
  // padding: theme.spacing(0.5, 1),
  // fontSize: '0.8rem',
  '& .MuiButton-startIcon': { // Target icon specifically if needed
    marginRight: theme.spacing(0.5),
  }
})) as typeof Button;