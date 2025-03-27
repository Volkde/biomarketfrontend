import { Product } from "../Root";

export interface ProductGridProps {
  products?: Product[];
  columns?: number;
  spacing?: number;
}
