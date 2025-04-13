import {
  CartContainer,
  CartHeader,
  CartItemsWrapper,
  CartTotal,
} from "./styles";
import { Typography, Divider } from "@mui/material";
import { CartItem } from "../CartItem";
import type { Cart as CartType } from "../../types/Cart";

interface CartProps {
  cart: CartType;
  onQuantityChange: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

export const Cart = ({ cart, onQuantityChange, onRemove }: CartProps) => {
  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <CartHeader variant="h5">Shopping Cart</CartHeader>
      <Divider sx={{ my: 2 }} />

      <CartItemsWrapper>
        {cart.items.map((item) => (
          <CartItem
            key={item.id}
            product={item}
            onQuantityChange={(qty) => onQuantityChange(item.id, qty)}
            onRemove={() => onRemove(item.id)}
          />
        ))}
      </CartItemsWrapper>

      <Divider sx={{ my: 2 }} />
      <CartTotal variant="h6">Total: €{total.toFixed(2)}</CartTotal>
    </CartContainer>
  );
};

export default Cart;
