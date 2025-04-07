import { Delivery } from "./Delivery";
import { OrderItem } from "./OrderItem";

export interface Order {
  id?: number;
  status: boolean;
  totalPrice: number;
  dateCreated: string;
  userId: number;
  items: OrderItem[];
  delivery: Delivery;
}
