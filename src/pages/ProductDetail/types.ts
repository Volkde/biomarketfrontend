import { GridProps } from '@mui/material/Grid';

export interface ProductImage {
  id: number;
  url: string;
}

export interface ProductReview {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  title?: string;
  price: number;
  oldPrice?: number;
  rating: number;
  images: ProductImage[];
  isHot: boolean;
  isSale: boolean;
  description: string;
  shortDescription?: string; // Краткое УТП для отображения
  quantity: number;
  discounted: boolean;
  reviews: ProductReview[];
  isOrganic?: boolean; // Флаг органического продукта
  isLimited?: boolean; // Флаг ограниченного предложения
}

export interface ProductDetailProps {
  id: string;
}

export interface ProductDetailState {
  product: Product | null;
  quantity: number;
  loading: boolean;
  error: string | null;
}

export type ProductDetailActions =
  | { type: 'SET_PRODUCT'; payload: Product }
  | { type: 'SET_QUANTITY'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

export interface GridItemProps extends GridProps {
  item: boolean;
  xs?: number;
  md?: number;
}
