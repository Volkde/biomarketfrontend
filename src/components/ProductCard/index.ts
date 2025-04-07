/**
 * ProductCard component exports
 * Provides a unified export interface for all ProductCard subcomponents
 */

// Main component
export { ProductCard } from './ui/Root';

// Subcomponents - using named exports to match the actual component exports
export { Images as ProductImages } from './ui/Images';
export { Price as ProductPrice } from './ui/Price';
export { Rating as ProductRating } from './ui/Rating';
export { StockStatus as ProductStockStatus } from './ui/StockStatus';
export { FavoriteButton as ProductFavoriteButton } from './ui/FavoriteButton';
export { AddToCartButton as ProductAddToCartButton } from './ui/AddToCartButton';
export { DiscountBadge as ProductDiscountBadge } from './ui/DiscountBadge';
export { Tags as ProductTags } from './ui/Tags';
export { ProductQuickViewModal } from './ui/ProductQuickViewModal';
export { FeaturedProductCard } from './ui/FeaturedProductCard';
export { Skeleton as ProductCardSkeleton } from './ui/Skeleton';

// Fix for ProductsGrid component that uses the old name
export { Skeleton as ProductCartSkeleton } from './ui/Skeleton';

// Types
export * from './ui/types';
