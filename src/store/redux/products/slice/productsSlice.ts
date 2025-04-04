import {
  fetchGetProductById,
  Params as FetchGetProductParams
} from "shared/api/products/fetchGetProductById";
import {
  fetchGetProducts,
  Params as FetchGetProductsParams
} from "shared/api/products/fetchGetProducts";
import { createAppSlice } from "store/createAppSlice";
import { ProductsState } from "../types/ProductsState";

const initialState: ProductsState = {
  status: "default",
  products: [],
  product: undefined,
  totalPages: 1,
  page: 1,
  error: undefined
};

export const productsSlice = createAppSlice({
  name: "PRODUCTS",
  initialState,
  reducers: create => ({
    /**
     * fetchGetProducts
     */
    fetchGetProducts: create.asyncThunk(
      async (params: FetchGetProductsParams, { rejectWithValue }) => {
        try {
          return await fetchGetProducts(params);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: ProductsState) =>
          Object.assign(state, initialState, {
            status: "loading"
          }),
        fulfilled: (state: ProductsState, { payload }: any) => {
          Object.assign(state, initialState, {
            status: "success",
            products: payload?.products || [],
            page: payload?.page,
            totalPages: payload?.totalPages
          });
        },
        rejected: (state: ProductsState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "error",
            error: payload?.message
          })
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
        pending: (state: ProductsState) =>
          Object.assign(state, initialState, {
            status: "loading"
          }),
        fulfilled: (state: ProductsState, { payload }: any) => {
          console.log("payload", payload);
          Object.assign(state, initialState, {
            status: "success",
            product: payload?.product
          });
        },
        rejected: (state: ProductsState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "error",
            error: payload?.message
          })
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
