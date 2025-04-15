import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchDeleteWishlist,
  Result as FetchDeleteWishlistResult
} from "shared/api/wishlist/fetchDeleteWishlist";
import {
  fetchGetWishlist,
  Result as FetchGetWishlistResult
} from "shared/api/wishlist/fetchGetWishlist";
import {
  fetchToggleProductInWishlist,
  Payload as FetchToggleProductInWishlistPayload,
  Result as FetchToggleProductInWishlistResult
} from "shared/api/wishlist/fetchToggleProductInWishlist";
import { createAppSlice } from "store/createAppSlice";
import { WishlistState } from "../types/WishlistState";

const initialState: WishlistState = {
  status: "default",
  wishlist: undefined,
  error: undefined
};

export const wishlistSlice = createAppSlice({
  name: "WISHLIST",
  initialState,
  reducers: create => ({
    /**
     * fetchToggleProductInWishlist
     */
    fetchToggleProductInWishlist: create.asyncThunk<
      FetchToggleProductInWishlistResult,
      FetchToggleProductInWishlistPayload
    >(
      async (
        payload: FetchToggleProductInWishlistPayload,
        { rejectWithValue }
      ) => {
        try {
          return await fetchToggleProductInWishlist(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: WishlistState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: WishlistState,
          { payload }: PayloadAction<FetchToggleProductInWishlistResult>
        ) => {
          state.status = "success";
          state.wishlist = payload;
          state.error = initialState.error;
        },
        rejected: (state: WishlistState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetWishlist
     */
    fetchGetWishlist: create.asyncThunk<FetchGetWishlistResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchGetWishlist();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: WishlistState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: WishlistState,
          { payload }: PayloadAction<FetchGetWishlistResult>
        ) => {
          state.status = "success";
          state.wishlist = payload;
          state.error = initialState.error;
        },
        rejected: (state: WishlistState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchDeleteWishlist
     */
    fetchDeleteWishlist: create.asyncThunk<FetchDeleteWishlistResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchDeleteWishlist();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: WishlistState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: WishlistState,
          { payload }: PayloadAction<FetchDeleteWishlistResult>
        ) => {
          state.status = "success";
          state.wishlist = payload;
          state.error = initialState.error;
        },
        rejected: (state: WishlistState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

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
