import { CartItem } from "./CartItem";

export interface Cart {
  id: string | number;
  items: CartItem[];
}
