import { ReduxStateStatus } from "types/ReduxStateStatus";
import { Seller } from "types/Seller";

export interface SellersState {
  status: ReduxStateStatus;
  sellers: Seller[];
  seller?: Seller;
  error?: string;
}
