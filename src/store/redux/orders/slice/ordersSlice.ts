import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCreateOrder,
  Payload as FetchCreateOrderPayload,
  Result as FetchCreateOrderResult
} from "shared/api/orders/fetchCreateOrder";
import { createAppSlice } from "store/createAppSlice";
import { OrdersState } from "../types/OrdersState";

const initialState: OrdersState = {
  status: "default",
  orders: [],
  order: undefined,
  error: undefined
};

export const ordersSlice = createAppSlice({
  name: "ORDERS",
  initialState,
  reducers: create => ({
    /**
     * fetchCreateOrder
     */
    fetchCreateOrder: create.asyncThunk<
      FetchCreateOrderResult,
      FetchCreateOrderPayload
    >(
      async (payload: FetchCreateOrderPayload, { rejectWithValue }) => {
        try {
          return await fetchCreateOrder(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: OrdersState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: OrdersState,
          { payload }: PayloadAction<FetchCreateOrderResult>
        ) => {
          state.status = "success";
          state.order = payload.order;
          state.error = initialState.error;
        },
        rejected: (state: OrdersState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * resetOrdersSlice
     */
    resetOrdersSlice: create.reducer(() => initialState)
  })
});

export const {
  actions: ordersActions,
  reducer: ordersReducer,
  selectors: ordersSelectors
} = ordersSlice;
