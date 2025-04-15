import { CartItem } from "types/CartItem";

export interface CartItemProps {
  value: CartItem;
  onQuantityChange?: (productId: number, delta: number) => void;
  onRemove?: (productId: number) => void;
}
