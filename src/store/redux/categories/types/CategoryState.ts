import { Category } from "types/Category";
import { ReduxStateStatus } from "types/ReduxStateStatus";

export interface CategoryState {
  status: ReduxStateStatus;
  categories?: Category[];
  category?: Category;
  error?: string;
}
