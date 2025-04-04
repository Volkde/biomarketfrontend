import { fetchGetCategories } from "shared/api/categories/fetchGetCategories";
import {
  fetchGetCategoryById,
  Params as FetchGetCategoryParams
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
    getCategories: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchGetCategories();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: CategoryState) =>
          Object.assign(state, initialState, {
            status: "loading"
          }),
        fulfilled: (state: CategoryState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "success",
            categories: payload?.categories
          }),
        rejected: (state: CategoryState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "error",
            error: payload?.message
          })
      }
    ),

    /**
     * getCategoryById
     */
    getCategoryById: create.asyncThunk(
      async (params: FetchGetCategoryParams, { rejectWithValue }) => {
        try {
          return await fetchGetCategoryById(params);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: CategoryState) =>
          Object.assign(state, initialState, {
            status: "loading"
          }),
        fulfilled: (state: CategoryState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "success",
            category: payload?.category
          }),
        rejected: (state: CategoryState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "error",
            error: payload?.message
          })
      }
    ),

    /**
     * resetCategory
     */
    resetCategory: create.reducer(() => initialState)
  })
});

export const {
  actions: categoryActions,
  reducer: categoryReducer,
  selectors: categorySelectors
} = categorySlice;
