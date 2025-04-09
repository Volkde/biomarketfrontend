import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCreateDelivery,
  Payload as FetchCreateDeliveryPayload,
  Result as FetchCreateDeliveryResult
} from "shared/api/delivery/fetchCreateDelivery";
import {
  fetchDeleteDelivery,
  Payload as FetchDeleteDeliveryPayload,
  Result as FetchDeleteDeliveryResult
} from "shared/api/delivery/fetchDeleteDelivery";
import {
  fetchGetDeliveries,
  Result as FetchGetDeliveriesResult
} from "shared/api/delivery/fetchGetDeliveries";
import {
  fetchUpdateDelivery,
  Payload as FetchUpdateDeliveryPayload,
  Result as FetchUpdateDeliveryResult
} from "shared/api/delivery/fetchUpdateDelivery";
import { createAppSlice } from "store/createAppSlice";
import { DeliveryState } from "../types/DeliveryState";

const initialState: DeliveryState = {
  status: "default",
  deliveries: [],
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
     * fetchDeleteDelivery
     */
    fetchDeleteDelivery: create.asyncThunk<
      FetchDeleteDeliveryResult,
      FetchDeleteDeliveryPayload
    >(
      async (payload: FetchDeleteDeliveryPayload, { rejectWithValue }) => {
        try {
          return await fetchDeleteDelivery(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: DeliveryState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (state: DeliveryState) => {
          state.status = "success";
          state.delivery = initialState.delivery;
          state.error = initialState.error;
        },
        rejected: (state: DeliveryState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetDeliveries
     */
    fetchGetDeliveries: create.asyncThunk<
      FetchGetDeliveriesResult
    >(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchGetDeliveries();
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
          { payload }: PayloadAction<FetchGetDeliveriesResult>
        ) => {
          state.status = "success";
          state.deliveries = payload;
          state.error = initialState.error;
        },
        rejected: (state: DeliveryState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchUpdateDelivery
     */
    fetchUpdateDelivery: create.asyncThunk<
      FetchUpdateDeliveryResult,
      FetchUpdateDeliveryPayload
    >(
      async (payload: FetchUpdateDeliveryPayload, { rejectWithValue }) => {
        try {
          return await fetchUpdateDelivery(payload);
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
          { payload }: PayloadAction<FetchUpdateDeliveryResult>
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
