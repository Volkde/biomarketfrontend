import { ProductCardProps } from "../Root";

export interface FeaturedProductCardProps extends ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    oldPrice?: number;
    rating: number;
    category: string;
    featuredTitle?: string;
    featuredDescription?: string;
  };
}
