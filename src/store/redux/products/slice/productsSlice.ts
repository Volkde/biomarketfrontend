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
  Params as FetchGetProductByIdParams,
  Result as FetchGetProductByIdResult
} from "shared/api/products/fetchGetProductById";
import {
  fetchGetProducts,
  Params as FetchGetProductsParams,
  Result as FetchGetProductsResult
} from "shared/api/products/fetchGetProducts";
import {
  fetchUpdateProduct,
  Payload as FetchUpdateProductPayload,
  Result as FetchUpdateProductResult
} from "shared/api/products/fetchUpdateProduct";
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
     * fetchGetProductById
     */
    fetchGetProductById: create.asyncThunk<
      FetchGetProductByIdResult,
      FetchGetProductByIdParams
    >(
      async (params: FetchGetProductByIdParams, { rejectWithValue }) => {
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
        fulfilled: (
          state: ProductsState,
          { payload }: PayloadAction<FetchGetProductByIdResult>
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
     * fetchUpdateProduct
     */
    fetchUpdateProduct: create.asyncThunk<
      FetchUpdateProductResult,
      FetchUpdateProductPayload
    >(
      async (payload: FetchUpdateProductPayload, { rejectWithValue }) => {
        try {
          return await fetchUpdateProduct(payload);
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
          { payload }: PayloadAction<FetchUpdateProductResult>
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
