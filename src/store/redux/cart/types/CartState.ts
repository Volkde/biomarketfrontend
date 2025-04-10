import { Cart } from "types/Cart";
import { ReduxStateStatus } from "types/ReduxStateStatus";

export interface CartState {
  status: ReduxStateStatus;
  cart?: Cart;
  error?: string;
}
