import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCreateDelivery,
  Payload as FetchCreateDeliveryPayload,
  Result as FetchCreateDeliveryResult
} from "shared/api/delivery/fetchCreateDelivery";
import { createAppSlice } from "store/createAppSlice";
import { DeliveryState } from "../types/DeliveryState";

const initialState: DeliveryState = {
  status: "default",
  delivery: undefined,
  error: undefined
};

export const deliverySlice = createAppSlice({
  name: "DELIVERY",
  initialState,
  reducers: create => ({
    /**
     * fetchCreateDelivery
     */
    fetchCreateDelivery: create.asyncThunk<
      FetchCreateDeliveryResult,
      FetchCreateDeliveryPayload
    >(
      async (payload: FetchCreateDeliveryPayload, { rejectWithValue }) => {
        try {
          return await fetchCreateDelivery(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: DeliveryState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: DeliveryState,
          { payload }: PayloadAction<FetchCreateDeliveryResult>
        ) => {
          state.status = "success";
          state.delivery = payload;
          state.error = initialState.error;
        },
        rejected: (state: DeliveryState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * resetDeliveryState
     */
    resetDeliveryState: create.reducer(() => initialState)
  })
});

export const {
  actions: deliveryActions,
  reducer: deliveryReducer,
  selectors: deliverySelectors
} = deliverySlice;
