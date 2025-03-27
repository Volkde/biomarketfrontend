export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isOrganic?: boolean;
  isSale?: boolean;
  featured?: boolean;
  category: string;
}
