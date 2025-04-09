import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCreateProduct,
  Payload as FetchCreateProductPayload,
  Result as FetchCreateProductResult
} from "shared/api/products/fetchCreateProduct";
import {
  fetchCreateProductReview,
  Payload as FetchCreateProductReviewPayload,
  Result as FetchCreateProductReviewResult
} from "shared/api/products/fetchCreateProductReview";
import {
  fetchDeleteProduct,
  Payload as FetchDeleteProductPayload,
  Result as FetchDeleteProductResult
} from "shared/api/products/fetchDeleteProduct";
import {
  fetchGetProductById,
  Params as FetchGetProductParams
} from "shared/api/products/fetchGetProductById";
import {
  fetchGetProducts,
  Params as FetchGetProductsParams,
  Result as FetchGetProductsResult
} from "shared/api/products/fetchGetProducts";
import { createAppSlice } from "store/createAppSlice";
import { ProductsState } from "../types/ProductsState";

const initialState: ProductsState = {
  status: "default",
  products: [],
  product: undefined,
  review: undefined,
  totalPages: 1,
  page: 1,
  error: undefined
};

export const productsSlice = createAppSlice({
  name: "PRODUCTS",
  initialState,
  reducers: create => ({
    /**
     * fetchCreateProduct
     */
    fetchCreateProduct: create.asyncThunk<
      FetchCreateProductResult,
      FetchCreateProductPayload
    >(
      async (payload: FetchCreateProductPayload, { rejectWithValue }) => {
        try {
          return await fetchCreateProduct(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: ProductsState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: ProductsState,
          { payload }: PayloadAction<FetchCreateProductResult>
        ) => {
          state.status = "success";
          state.product = payload?.product;
          state.error = initialState.error;
        },
        rejected: (state: ProductsState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchCreateProductReview
     */
    fetchCreateProductReview: create.asyncThunk<
      FetchCreateProductReviewResult,
      FetchCreateProductReviewPayload
    >(
      async (payload: FetchCreateProductReviewPayload, { rejectWithValue }) => {
        try {
          return await fetchCreateProductReview(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: ProductsState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: ProductsState,
          { payload }: PayloadAction<FetchCreateProductReviewResult>
        ) => {
          state.status = "success";
          state.product = payload?.product;
          state.review = payload?.review;
          state.error = initialState.error;
        },
        rejected: (state: ProductsState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchDeleteProduct
     */
    fetchDeleteProduct: create.asyncThunk<
      FetchDeleteProductResult,
      FetchDeleteProductPayload
    >(
      async (payload: FetchDeleteProductPayload, { rejectWithValue }) => {
        try {
          return await fetchDeleteProduct(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: ProductsState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: ProductsState,
          { payload }: PayloadAction<FetchDeleteProductResult>
        ) => {
          state.status = "success";
          state.product = payload?.product;
          state.error = initialState.error;
        },
        rejected: (state: ProductsState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetProducts
     */
    fetchGetProducts: create.asyncThunk<
      FetchGetProductsResult,
      FetchGetProductsParams
    >(
      async (params: FetchGetProductsParams, { rejectWithValue }) => {
        try {
          return await fetchGetProducts(params);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: ProductsState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: ProductsState,
          { payload }: PayloadAction<FetchGetProductsResult>
        ) => {
          state.status = "success";
          state.products = payload?.products || [];
          state.page = payload?.page;
          state.totalPages = payload?.totalPages;
          state.error = initialState.error;
        },
        rejected: (state: ProductsState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetProductById
     */
    fetchGetProductById: create.asyncThunk(
      async (params: FetchGetProductParams, { rejectWithValue }) => {
        try {
          return await fetchGetProductById(params);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: ProductsState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (state: ProductsState, { payload }: any) => {
          state.status = "success";
          state.product = payload?.product;
          state.error = initialState.error;
        },
        rejected: (state: ProductsState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * resetProductsState
     */
    resetProductsState: create.reducer(() => initialState)
  })
});

export const {
  actions: productsActions,
  reducer: productsReducer,
  selectors: productsSelectors
} = productsSlice;
