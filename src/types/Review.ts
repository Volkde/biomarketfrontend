export interface Review {
  id?: number;
  rating: number;
  comment: string;
  productId: string | number;
  userId: string | number;
}
