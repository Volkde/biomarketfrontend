export interface FeaturedProductsSectionProps {
  products: {
    id: string;
    image: string;
    name: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviews: number;
    featuredText?: string;
  }[];
  title?: string;
  subtitle?: string;
  seeAllLink?: string;
}
