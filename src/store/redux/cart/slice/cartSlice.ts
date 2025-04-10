import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchAddProductToCart,
  Payload as FetchAddProductToPayload,
  Result as FetchAddProductToResult
} from "shared/api/cart/fetchAddProductToCart";
import {
  fetchClearCart,
  Result as FetchClearCartResult
} from "shared/api/cart/fetchClearCart";
import {
  fetchGetCart,
  Result as FetchGetCartProductsResult
} from "shared/api/cart/fetchGetCart";
import {
  fetchRemoveProductFromCart,
  Payload as FetchRemoveProductFromCartPayload,
  Result as FetchRemoveProductFromCartResult
} from "shared/api/cart/fetchRemoveProductFromCart";
import {
  fetchUpdateProductQuantity,
  Payload as FetchUpdateProductQuantityPayload,
  Result as FetchUpdateProductQuantityResult
} from "shared/api/cart/fetchUpdateProductQuantity";
import { createAppSlice } from "store/createAppSlice";
import { CartState } from "../types/CartState";

const initialState: CartState = {
  status: "default",
  cart: undefined,
  error: undefined
};

export const cartSlice = createAppSlice({
  name: "CART",
  initialState,
  reducers: create => ({
    /**
     * fetchAddProductToCart
     */
    fetchAddProductToCart: create.asyncThunk<
      FetchAddProductToResult,
      FetchAddProductToPayload
    >(
      async (payload: FetchAddProductToPayload, { rejectWithValue }) => {
        try {
          return await fetchAddProductToCart(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: CartState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (state: CartState) => {
          state.status = "success";
          state.error = initialState.error;
        },
        rejected: (state: CartState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchClearCart
     */
    fetchClearCart: create.asyncThunk<FetchClearCartResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchClearCart();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: CartState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: CartState,
          { payload }: PayloadAction<FetchClearCartResult>
        ) => {
          state.status = "success";
          state.cart = payload.cart;
          state.error = initialState.error;
        },
        rejected: (state: CartState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetCart
     */
    fetchGetCart: create.asyncThunk<FetchGetCartProductsResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchGetCart();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: CartState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: CartState,
          { payload }: PayloadAction<FetchGetCartProductsResult>
        ) => {
          state.status = "success";
          state.cart = payload.cart;
          state.error = initialState.error;
        },
        rejected: (state: CartState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchRemoveProductFromCart
     */
    fetchRemoveProductFromCart: create.asyncThunk<
      FetchRemoveProductFromCartResult,
      FetchRemoveProductFromCartPayload
    >(
      async (
        payload: FetchRemoveProductFromCartPayload,
        { rejectWithValue }
      ) => {
        try {
          return await fetchRemoveProductFromCart(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: CartState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: CartState,
          { payload }: PayloadAction<FetchRemoveProductFromCartResult>
        ) => {
          state.status = "success";
          state.cart = payload.cart;
          state.error = initialState.error;
        },
        rejected: (state: CartState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchUpdateProductQuantity
     */
    fetchUpdateProductQuantity: create.asyncThunk<
      FetchUpdateProductQuantityResult,
      FetchUpdateProductQuantityPayload
    >(
      async (
        payload: FetchUpdateProductQuantityPayload,
        { rejectWithValue }
      ) => {
        try {
          return await fetchUpdateProductQuantity(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: CartState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: CartState,
          { payload }: PayloadAction<FetchUpdateProductQuantityResult>
        ) => {
          state.status = "success";
          state.cart = payload.cart;
          state.error = initialState.error;
        },
        rejected: (state: CartState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * resetCartSlice
     */
    resetCartSlice: create.reducer(() => initialState)
  })
});

export const {
  actions: cartActions,
  reducer: cartReducer,
  selectors: cartSelectors
} = cartSlice;
