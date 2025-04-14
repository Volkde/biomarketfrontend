/**
 * Cart item component styles
 */
import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

/**
 * Main container for cart item
 * @component
 */
export const CartItemContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "1rem",
  borderBottom: "1px solid #eee"
});

/**
 * Container for product information
 * @component
 */
export const ProductInfo = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem"
});

/**
 * Container for quantity controls
 * @component
 */
export const QuantityControls = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem"
});

/**
 * Remove button style
 * @component
 */
export const RemoveButton = styled(IconButton)({
  color: "red"
});
