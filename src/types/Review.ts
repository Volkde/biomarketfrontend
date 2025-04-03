export interface Review {
  id?: string | number;
  rating: number;
  comment: string;
  productId: string | number;
  userId: string | number;
}
