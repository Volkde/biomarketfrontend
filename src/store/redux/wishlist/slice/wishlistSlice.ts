import { createAppSlice } from "store/createAppSlice";
import { WishlistState } from "../types/WishlistState";

const initialState: WishlistState = {
  status: "default",
  items: [],
  error: undefined
};

export const wishlistSlice = createAppSlice({
  name: "WISHLIST",
  initialState,
  reducers: create => ({
    /**
     * resetUsersState
     */
    resetWishlistState: create.reducer(() => initialState)
  })
});

export const {
  actions: wishlistActions,
  reducer: wishlistReducer,
  selectors: wishlistSelectors
} = wishlistSlice;
