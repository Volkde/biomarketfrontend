import { ReduxStateStatus } from "types/ReduxStateStatus";
import { Wishlist } from "types/Wishlist";

export interface WishlistState {
  status: ReduxStateStatus;
  wishlist?: Wishlist;
  error?: string;
}
