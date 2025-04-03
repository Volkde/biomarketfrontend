import { OrderItem } from "./OrderItem";

export interface Order {
  id?: number | string;
  buyerId: number;
  totalPrice: number;
  items: OrderItem[];
  paymentMethod: string;
  deliveryAddress: string;
  isSubscription: boolean;
  subscriptionFrequency: string;
}
