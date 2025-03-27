export interface ProductGridProps {
  products: {
    id: string;
    image: string;
    name: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviews: number;
    isNew?: boolean;
    isOrganic?: boolean;
    isSale?: boolean;
    featured?: boolean;
  }[];
  columns?: number;
  spacing?: number;
}
