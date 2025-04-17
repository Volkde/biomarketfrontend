import { Address } from "./Address";
import { Delivery } from "./Delivery";
import { OrderItem } from "./OrderItem";

export interface Order {
  id?: number;
  status: string;
  items: OrderItem[];
  sellerId: number;
  sellerAddress: Address;
  buyerId: number;
  buyerAddress: Address;
  totalPrice: number;
  dateCreated: string;
  userId?: number;
  delivery?: Delivery;
}
