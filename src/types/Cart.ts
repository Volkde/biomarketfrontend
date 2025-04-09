import { CartItem } from "./CartItem";

export interface Cart {
  cartId?: number;
  userId: number;
  items: CartItem[];
  totalCartPrice?: number;
}
