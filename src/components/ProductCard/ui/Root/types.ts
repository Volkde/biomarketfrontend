export interface ProductImage {
  id: number | string;
  url: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  images?: ProductImage[];
  isHot?: boolean;
  isSale?: boolean;
  description?: string;
}

export interface ProductCardProps {
  product: Product;
}
