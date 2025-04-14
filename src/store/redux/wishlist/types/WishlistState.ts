import { ReduxStateStatus } from "types/ReduxStateStatus";

export interface WishlistState {
  status: ReduxStateStatus;
  items: [];
  error?: string;
}
