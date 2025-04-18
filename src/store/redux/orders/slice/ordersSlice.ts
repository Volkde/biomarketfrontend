import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCreateOrder,
  Payload as FetchCreateOrderPayload,
  Result as FetchCreateOrderResult
} from "shared/api/orders/fetchCreateOrder";
import {
  fetchDeleteOrder,
  Payload as FetchDeleteOrderPayload,
  Result as FetchDeleteOrderResult
} from "shared/api/orders/fetchDeleteOrder";
import {
  fetchGetOrderById,
  Params as FetchGetOrderByIdParams,
  Result as FetchGetOrderByIdResult
} from "shared/api/orders/fetchGetOrderById";
import {
  fetchGetOrders,
  Result as FetchGetOrdersResult
} from "shared/api/orders/fetchGetOrders";
import {
  fetchGetOrdersBySellerId,
  Props as FetchGetOrdersBySellerIdProps,
  Result as FetchGetOrdersBySellerIdResult
} from "shared/api/orders/fetchGetOrdersBySellerId";
import {
  fetchUpdateOrderDelivery,
  Payload as FetchUpdateOrderDeliveryPayload,
  Result as FetchUpdateOrderDeliveryResult
} from "shared/api/orders/fetchUpdateOrderDelivery";
import {
  fetchUpdateOrderStatus,
  Payload as FetchUpdateOrderStatusPayload,
  Result as FetchUpdateOrderStatusResult
} from "shared/api/orders/fetchUpdateOrderStatus";
import { createAppSlice } from "store/createAppSlice";
import { OrdersState } from "../types/OrdersState";

const initialState: OrdersState = {
  status: "default",
  orders: [],
  order: undefined,
  totalOrders: undefined,
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
     * fetchDeleteOrder
     */
    fetchDeleteOrder: create.asyncThunk<
      FetchDeleteOrderResult,
      FetchDeleteOrderPayload
    >(
      async (payload: FetchDeleteOrderPayload, { rejectWithValue }) => {
        try {
          return await fetchDeleteOrder(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: OrdersState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (state: OrdersState) => {
          state.status = "success";
          state.error = initialState.error;
        },
        rejected: (state: OrdersState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetOrderById
     */
    fetchGetOrderById: create.asyncThunk<
      FetchGetOrderByIdResult,
      FetchGetOrderByIdParams
    >(
      async (payload: FetchGetOrderByIdParams, { rejectWithValue }) => {
        try {
          return await fetchGetOrderById(payload);
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
          { payload }: PayloadAction<FetchGetOrderByIdResult>
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
     * fetchGetOrders
     */
    fetchGetOrders: create.asyncThunk<FetchGetOrdersResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchGetOrders();
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
          { payload }: PayloadAction<FetchGetOrdersResult>
        ) => {
          state.status = "success";
          state.orders = payload.orders ?? [];
          state.totalOrders = payload.totalOrders;
          state.error = initialState.error;
        },
        rejected: (state: OrdersState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetOrdersBySellerId
     */
    fetchGetOrdersBySellerId: create.asyncThunk<
      FetchGetOrdersBySellerIdResult,
      FetchGetOrdersBySellerIdProps
    >(
      async (props: FetchGetOrdersBySellerIdProps, { rejectWithValue }) => {
        try {
          return await fetchGetOrdersBySellerId(props);
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
          { payload }: PayloadAction<FetchGetOrdersBySellerIdResult>
        ) => {
          state.status = "success";
          state.orders = payload.orders ?? [];
          state.totalOrders = payload.totalOrders;
          state.error = initialState.error;
        },
        rejected: (state: OrdersState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchUpdateOrderDelivery
     */
    fetchUpdateOrderDelivery: create.asyncThunk<
      FetchUpdateOrderDeliveryResult,
      FetchUpdateOrderDeliveryPayload
    >(
      async (payload: FetchUpdateOrderDeliveryPayload, { rejectWithValue }) => {
        try {
          return await fetchUpdateOrderDelivery(payload);
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
          { payload }: PayloadAction<FetchUpdateOrderDeliveryResult>
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
     * fetchUpdateOrderStatus
     */
    fetchUpdateOrderStatus: create.asyncThunk<
      FetchUpdateOrderStatusResult,
      FetchUpdateOrderStatusPayload
    >(
      async (payload: FetchUpdateOrderStatusPayload, { rejectWithValue }) => {
        try {
          return await fetchUpdateOrderStatus(payload);
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
          { payload }: PayloadAction<FetchUpdateOrderStatusResult>
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
