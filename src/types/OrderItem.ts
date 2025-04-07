import { Order } from "./Order";

export interface OrderItem {
  id?: number;
  productId: number;
  quantity: number;
  price: number;
  order: Order;
}
