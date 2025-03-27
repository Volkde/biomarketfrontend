export interface BestsellerProductsSectionProps {
  products: {
    id: string;
    image: string;
    name: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviews: number;
  }[];
  title?: string;
  subtitle?: string;
  seeAllLink?: string;
}
