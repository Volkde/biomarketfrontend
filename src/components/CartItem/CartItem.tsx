// React импортируется автоматически при использовании JSX
import { CartItemProps } from './types';
import { CartItemContainer, ProductInfo, QuantityControls, RemoveButton } from './styles';
import { IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export const CartItem = ({ product, onQuantityChange, onRemove }: CartItemProps) => {
  const handleQuantityChange = (change: number) => {
    const newQuantity = product.quantity + change;
    if (newQuantity >= 1) {
      onQuantityChange(newQuantity);
    }
  };

  return (
    <CartItemContainer>
      <ProductInfo>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body1" color="primary">
          ${product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2">
          Total: ${(product.price * product.quantity).toFixed(2)}
        </Typography>
      </ProductInfo>
      <QuantityControls>
        <IconButton onClick={() => handleQuantityChange(-1)} disabled={product.quantity === 1}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1">{product.quantity}</Typography>
        <IconButton onClick={() => handleQuantityChange(1)}>
          <AddIcon />
        </IconButton>
      </QuantityControls>
      <RemoveButton onClick={onRemove}>
        <DeleteIcon />
      </RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
