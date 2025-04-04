import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Link as MuiLink, // Import MUI Link for base styling if needed
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledProductCard = styled(Card)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "300px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  transition: "box-shadow 0.3s ease, transform 0.3s ease",
  border: `1px solid ${theme.palette.divider}`,

  "&:hover": {
    boxShadow: theme.shadows[4],
    transform: "translateY(-4px)",
    // Show actions overlay on hover
    "& .product-actions-overlay": {
      opacity: 1,
      transform: "translate(-50%, 0)" // Slide up from bottom center
    },
    // Optional: Slightly zoom/change image on hover
    "& .product-image": {
      // transform: 'scale(1.03)', // Example zoom effect
      opacity: 0.9
    }
  }
}));

// Container for Image and Actions Overlay
export const MediaContainer = styled(Box)({
  position: "relative",
  width: "100%",
  // Use aspectRatio for responsive height, or set fixed height
  // aspectRatio: '1 / 1', // Example for square image
  height: "250px", // Fixed height based on original example
  overflow: "hidden" // Clip image zoom if any
});

// Product Image using CardMedia
export const ProductImage = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover", // or 'contain' depending on desired look
  transition: "opacity 0.3s ease, transform 0.5s ease", // Added transform transition
  backgroundColor: theme.palette.grey[100] // Placeholder background
})) as typeof CardMedia; // Cast required for component prop

// Base styles for Tags (Hot, Sale)
const BaseTag = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1.5),
  color: theme.palette.common.white,
  padding: theme.spacing(0.5, 1.25),
  borderRadius: theme.shape.borderRadius,
  fontSize: "0.75rem",
  fontWeight: 600,
  lineHeight: 1.2,
  zIndex: 1,
  pointerEvents: "none" // Don't interfere with hover/clicks
})) as typeof Typography;

// Hot Tag specific style
export const HotTag = styled(BaseTag)<{ component?: React.ElementType }>(
  ({ theme }) => ({
    left: theme.spacing(1.5),
    backgroundColor: theme.palette.error.main // Use theme color
  })
);

// Sale Tag specific style
export const SaleTag = styled(BaseTag)(({ theme }) => ({
  right: theme.spacing(1.5),
  backgroundColor: theme.palette.success.dark // Use theme color
}));

// Actions Overlay (appears on hover)
export const ActionsOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(1.5), // Position near the bottom of the image area
  left: "50%",
  transform: "translate(-50%, 10px)", // Start slightly below and centered
  display: "flex",
  gap: theme.spacing(1),
  padding: theme.spacing(0.5),
  backgroundColor: "rgba(255, 255, 255, 0.85)", // Semi-transparent background
  borderRadius: theme.shape.borderRadius,
  zIndex: 2,
  opacity: 0, // Hidden by default
  transition: "opacity 0.3s ease, transform 0.3s ease"
}));

// Action Button using IconButton
export const ActionButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(0.75), // Adjust padding for icon size
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.primary.main // Highlight color on hover
  },
  // Adjust icon size if needed
  "& svg": {
    fontSize: "1.1rem"
  }
}));

// Content Area using CardContent
export const ContentArea = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  // Allow content area to grow if needed, but keep actions at bottom
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // Push rating down if needed
  minHeight: "130px" // Approximate height needed for content
}));

// Product Name (using Typography, styled for ellipsis)
export const ProductName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
  // Ellipsis for long names
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  minHeight: "2.4em" // Approx height for 2 lines
})) as typeof Typography;

// Product Description (optional, shorter text)
export const ProductDescription = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  // Ellipsis for long descriptions
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 1, // Limit to 1 line
  WebkitBoxOrient: "vertical"
})) as typeof Typography;

// Container for Price info
export const PriceContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1, 0)
}));

// Current Price styling
export const CurrentPrice = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: theme.palette.primary.main, // Use theme primary color for price
  display: "inline-block" // Allow side-by-side with old price
})) as typeof Typography;

// Old Price (strikethrough) styling
export const OldPrice = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: theme.palette.text.disabled,
  textDecoration: "line-through",
  marginLeft: theme.spacing(1),
  display: "inline-block"
})) as typeof Typography;

// Rating container
export const RatingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(1),
  gap: theme.spacing(0.25),
  minHeight: "1.2em", // Reserve space
  color: theme.palette.warning.main, // Star color from theme
  "& svg": {
    fontSize: "1rem" // Star size
  }
}));

// Styled MUI Link (if specific link styling is needed beyond basic integration)
// Generally avoid custom styles here if using component={RouterLink}
export const StyledProductLink = styled(MuiLink)(() => ({
  textDecoration: "none",
  color: "inherit", // Inherit color from parent
  "&:hover": {
    // Optional: Add hover effect specific to link if needed
  }
}));
