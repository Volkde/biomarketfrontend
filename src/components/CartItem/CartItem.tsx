import type { CartItem as CartItemType } from "../../types/CartItem";
import {
  CartItemContainer,
  ProductInfo,
  QuantityControls,
  RemoveButton
} from "./styles";
import { IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface CartItemProps {
  product: CartItemType;
  onQuantityChange: (productId: number, delta: number) => void;
  onRemove: (productId: number) => void;
}

/** Cart item component with product details and quantity controls */
export const CartItem = ({
  product,
  onQuantityChange,
  onRemove
}: CartItemProps) => {
  const handleQuantityChange = (change: number) => {
    if (change === -1 && product.quantity === 1) {
      return;
    }
    onQuantityChange(product.productId, change);
  };

  return (
    <CartItemContainer>
      <ProductInfo>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body1" color="primary">
          {product.price && product.price > 0 ? 
            `${product.price.toFixed(2)} €` : 
            product.totalItemPrice > 0 ? 
              `${(product.totalItemPrice / product.quantity).toFixed(2)} €` : 
              "-"
          }
        </Typography>
        <Typography variant="body2">
          Total: {(product.totalItemPrice || 0).toFixed(2)} €
        </Typography>
      </ProductInfo>
      <QuantityControls>
        <IconButton
          onClick={() => handleQuantityChange(-1)}
          disabled={product.quantity === 1 || !product.quantity}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1">{product.quantity || 0}</Typography>
        <IconButton onClick={() => handleQuantityChange(1)}>
          <AddIcon />
        </IconButton>
      </QuantityControls>
      <RemoveButton onClick={() => onRemove(product.productId)}>
        <DeleteIcon />
      </RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
