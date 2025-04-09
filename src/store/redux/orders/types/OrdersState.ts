import { Order } from "types/Order";
import { ReduxStateStatus } from "types/ReduxStateStatus";

export interface OrdersState {
  status: ReduxStateStatus;
  orders: Order[];
  order?: Order;
  error?: string;
}
