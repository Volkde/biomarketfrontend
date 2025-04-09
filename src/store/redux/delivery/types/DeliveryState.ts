import { Delivery } from "types/Delivery";
import { ReduxStateStatus } from "types/ReduxStateStatus";

export interface DeliveryState {
  status: ReduxStateStatus;
  delivery?: Delivery;
  error?: string;
}
