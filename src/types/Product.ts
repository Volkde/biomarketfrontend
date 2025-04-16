export interface Product {
  id?: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  unitOfMeasure?: string;
  price: number;
  oldPrice?: number;
  discounted: number;
  inStock: boolean;
  categoryId: number;
  sellerId: number;
  rating: number;
}
