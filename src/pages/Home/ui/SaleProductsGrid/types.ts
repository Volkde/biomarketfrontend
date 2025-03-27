export interface SaleProductsSectionProps {
  products: {
    id: string;
    image: string;
    name: string;
    price: number;
    oldPrice: number;
    discount: number;
    rating: number;
    reviews: number;
  }[];
  title?: string;
  subtitle?: string;
  seeAllLink?: string;
  deadline?: Date;
}
