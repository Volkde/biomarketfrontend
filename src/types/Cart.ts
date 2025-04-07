import { CartItem } from "./CartItem";

export interface Cart {
  id?: number;
  items: CartItem[];
  // products: Product[];
  // allActiveProducts: Product[];
  // activeProductsAveragePrice: number;
  // activeProductsTotalCost: number;
}
