import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchGetCategories,
  Result as FetchGetCategoriesResult
} from "shared/api/categories/fetchGetCategories";
import {
  fetchGetCategoryById,
  Params as FetchGetCategoryParams,
  Result as FetchGetCategoryResult
} from "shared/api/categories/fetchGetCategoryById";
import { createAppSlice } from "store/createAppSlice";
import { CategoryState } from "../types/CategoryState";

const initialState: CategoryState = {
  status: "default",
  categories: [],
  category: undefined,
  error: undefined
};

export const categorySlice = createAppSlice({
  name: "CATEGORY",
  initialState,
  reducers: create => ({
    /**
     * getCategories
     */
    getCategories: create.asyncThunk<FetchGetCategoriesResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchGetCategories();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: CategoryState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: CategoryState,
          { payload }: PayloadAction<FetchGetCategoriesResult>
        ) => {
          state.status = "success";
          state.categories = payload?.categories;
          state.error = initialState.error;
        },
        rejected: (state: CategoryState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * getCategoryById
     */
    getCategoryById: create.asyncThunk<
      FetchGetCategoryResult,
      FetchGetCategoryParams
    >(
      async (params: FetchGetCategoryParams, { rejectWithValue }) => {
        try {
          return await fetchGetCategoryById(params);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: CategoryState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: CategoryState,
          { payload }: PayloadAction<FetchGetCategoryResult>
        ) => {
          state.status = "success";
          state.category = payload?.category;
          state.error = initialState.error;
        },
        rejected: (state: CategoryState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * resetCategorySlice
     */
    resetCategorySlice: create.reducer(() => initialState)
  })
});

export const {
  actions: categoryActions,
  reducer: categoryReducer,
  selectors: categorySelectors
} = categorySlice;
