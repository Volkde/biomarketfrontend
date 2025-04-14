import { createSlice } from "@reduxjs/toolkit";
import { WishlistState, Payload } from "@/store/redux/wishlist/types/wishlistTypes";

const initialState: WishlistState = {
  items: []
};

export const wishlistSlice = createSlice({
  name: "WISHLIST",
  initialState,
  reducers: {
    toggleWishlistItem: (state, action) => {
      const index = state.items.indexOf(action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },

    removeWishlistItem: (state, action) => {
      state.items = state.items.filter(id => id !== action.payload);
    },

    clearWishlist: (state) => {
      state.items = [];
    }
  }
});

export const {
  actions: wishlistActions,
  reducer: wishlistReducer
} = wishlistSlice;
