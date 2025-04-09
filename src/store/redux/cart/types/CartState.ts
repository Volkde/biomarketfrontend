import { Product } from "types/Product";
import { ReduxStateStatus } from "types/ReduxStateStatus";

export interface CartState {
  status: ReduxStateStatus;
  products: Product[];
  averagePrice?: number;
  totalCost?: number;
  error?: string;
}
