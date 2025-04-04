import { Category } from "./Category";
import { ProductImage } from "./ProductImage";

export interface Product {
  id?: number | string;
  name: string;
  description?: string;
  images?: ProductImage[];
  price: number;
  oldPrice?: number;
  quantity: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isOrganic?: boolean;
  isSale?: boolean;
  featured?: boolean;
  category: string | Category;
  seller_id: number;
  dateProduction: string;
  dateExperetion: string;
}
