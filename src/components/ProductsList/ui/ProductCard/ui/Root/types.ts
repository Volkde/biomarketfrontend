export interface ProductImage {
  id: number | string; // Allow string IDs for images too
  url: string;
}

export interface Product {
  id: string; // Keep ID as string, often better for APIs
  name: string;
  price: number;
  oldPrice?: number;
  rating?: number; // Rating is optional
  images?: ProductImage[]; // Images are optional
  isHot?: boolean;
  isSale?: boolean;
  description?: string;
  // Add other potential fields like 'slug', 'stockStatus', etc.
}

export interface ProductCardProps {
  product: Product;
  // Add any other props needed, like onAddToCartSuccess, etc.
}
