import { Product as ProductType } from '../../../../types/product';
import { ProductImage } from '../../../../types/ProductImage';
import { ProductReview } from '../../../../types/product';

// Экспортируем типы для совместимости с существующим кодом
export type { ProductImage, ProductReview };
export type Product = ProductType;

export interface ProductCardProps {
  product: Product;
  isFeatured?: boolean;
}
