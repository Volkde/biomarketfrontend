import { ReduxStateStatus } from "types/ReduxStateStatus";

export interface DeliveryState {
  status: ReduxStateStatus;
  error?: string;
}
