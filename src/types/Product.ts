export interface Product {
  id?: number;
  title: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  discounted: number;
  inStock: boolean;
  categoryId: number;
  sellerId: number;
  rating: number;
  isOrganic?: boolean;
  isLocal?: boolean;
}
