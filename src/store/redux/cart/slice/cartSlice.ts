import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchAddProductToCart,
  Payload as FetchAddProductToPayload,
  Result as FetchAddProductToResult
} from "shared/api/cart/fetchAddProductToCart";
import {
  fetchClearCart,
  Payload as FetchClearCartPayload,
  Result as FetchClearCartResult
} from "shared/api/cart/fetchClearCart";
import {
  fetchGetCartAveragePrice,
  Params as FetchGetCartAveragePriceParams,
  Result as FetchGetCartAveragePriceResult
} from "shared/api/cart/fetchGetCartAveragePrice";
import {
  fetchGetCartProducts,
  Params as FetchGetCartProductsParams,
  Result as FetchGetCartProductsResult
} from "shared/api/cart/fetchGetCartProducts";
import {
  fetchGetCartTotalCost,
  Params as FetchGetCartTotalCostParams,
  Result as FetchGetCartTotalCostResult
} from "shared/api/cart/fetchGetCartTotalCost";
import {
  fetchRemoveProductFromCart,
  Payload as FetchRemoveProductFromCartPayload,
  Result as FetchRemoveProductFromCartResult
} from "shared/api/cart/fetchRemoveProductFromCart";
import { createAppSlice } from "store/createAppSlice";
import { CartState } from "../types/CartState";

const initialState: CartState = {
  status: "default",
  products: [],
  averagePrice: undefined,
  totalCost: undefined,
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
    fetchClearCart: create.asyncThunk<
      FetchClearCartResult,
      FetchClearCartPayload
    >(
      async (payload: FetchClearCartPayload, { rejectWithValue }) => {
        try {
          return await fetchClearCart(payload);
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
          state.products = initialState.products;
          state.error = initialState.error;
        },
        rejected: (state: CartState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetCartAveragePrice
     */
    fetchGetCartAveragePrice: create.asyncThunk<
      FetchGetCartAveragePriceResult,
      FetchGetCartAveragePriceParams
    >(
      async (payload: FetchGetCartAveragePriceParams, { rejectWithValue }) => {
        try {
          return await fetchGetCartAveragePrice(payload);
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
          { payload }: PayloadAction<FetchGetCartAveragePriceResult>
        ) => {
          state.status = "success";
          state.averagePrice = payload;
          state.error = initialState.error;
        },
        rejected: (state: CartState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetCartProducts
     */
    fetchGetCartProducts: create.asyncThunk<
      FetchGetCartProductsResult,
      FetchGetCartProductsParams
    >(
      async (payload: FetchGetCartProductsParams, { rejectWithValue }) => {
        try {
          return await fetchGetCartProducts(payload);
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
          state.products = payload;
          state.error = initialState.error;
        },
        rejected: (state: CartState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetCartProducts
     */
    fetchGetCartTotalCost: create.asyncThunk<
      FetchGetCartTotalCostResult,
      FetchGetCartTotalCostParams
    >(
      async (payload: FetchGetCartTotalCostParams, { rejectWithValue }) => {
        try {
          return await fetchGetCartTotalCost(payload);
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
          { payload }: PayloadAction<FetchGetCartTotalCostResult>
        ) => {
          state.status = "success";
          state.totalCost = payload;
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
