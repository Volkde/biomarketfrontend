export interface Product {
  id?: number;
  title: string;
  description: string;
  image: string;
  price: number;
  discounted: number;
  inStock: boolean;
  categoryId: number;
  sellerId: number;
  rating: number;
}
