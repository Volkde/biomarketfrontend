// types.ts

import type { Product as BaseProduct } from '../../types/product';

export interface ProductDetailProps {
  id: string;
}

export interface ProductReview {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface ProductDetailState {
  product: BaseProduct | null;
  quantity: number;
  loading: boolean;
  error: string | null;
}

export type ProductDetailActions =
  | { type: 'SET_PRODUCT'; payload: BaseProduct }
  | { type: 'SET_QUANTITY'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };
