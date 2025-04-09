import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCreateSeller,
  Payload as FetchCreateSellerPayload,
  Result as FetchCreateSellerResult
} from "shared/api/sellers/fetchCreateSeller";
import { createAppSlice } from "store/createAppSlice";
import { SellersState } from "../types/SellersState";

const initialState: SellersState = {
  status: "default",
  sellers: [],
  seller: undefined,
  error: undefined
};

export const sellersSlice = createAppSlice({
  name: "SELLERS",
  initialState,
  reducers: create => ({
    /**
     * fetchCreateSeller
     */
    fetchCreateSeller: create.asyncThunk<
      FetchCreateSellerResult,
      FetchCreateSellerPayload
    >(
      async (payload: FetchCreateSellerPayload, { rejectWithValue }) => {
        try {
          return await fetchCreateSeller(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: SellersState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: SellersState,
          { payload }: PayloadAction<FetchCreateSellerResult>
        ) => {
          state.status = "success";
          state.seller = payload.seller;
          state.error = initialState.error;
        },
        rejected: (state: SellersState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * resetSellersState
     */
    resetSellersState: create.reducer(() => initialState)
  })
});

export const {
  actions: sellersActions,
  reducer: sellersReducer,
  selectors: sellersSelectors
} = sellersSlice;
