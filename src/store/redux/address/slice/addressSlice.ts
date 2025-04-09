import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCreateAddress,
  Payload as FetchCreateAddressPayload,
  Result as FetchCreateAddressResult
} from "shared/api/address/fetchCreateAddress";
import {
  fetchDeleteAddress,
  Payload as FetchDeleteAddressPayload,
  Result as FetchDeleteAddressResult
} from "shared/api/address/fetchDeleteAddress";
import {
  fetchDeleteAllAddresses,
  Result as FetchDeleteAllAddressesResult
} from "shared/api/address/fetchDeleteAllAddresses";
import {
  fetchGetAddressById,
  Params as FetchGetAddressByIdParams,
  Result as FetchGetAddressByIdResult
} from "shared/api/address/fetchGetAddressById";
import {
  fetchGetAddresses,
  Result as FetchGetAddressesResult
} from "shared/api/address/fetchGetAddresses";
import {
  fetchGetAddressesBySellerId,
  Params as FetchGetAddressesBySellerIdParams,
  Result as FetchGetAddressesBySellerIdResult
} from "shared/api/address/fetchGetAddressesBySellerId";
import {
  fetchGetAddressesByUserId,
  Params as FetchGetAddressesByUserIdParams,
  Result as FetchGetAddressesByUserIdResult
} from "shared/api/address/fetchGetAddressesByUserId";
import {
  fetchUpdateAddress,
  Payload as FetchUpdateAddressPayload,
  Result as FetchUpdateAddressResult
} from "shared/api/address/fetchUpdateAddress";
import { createAppSlice } from "store/createAppSlice";
import { AddressState } from "../types/AddressState";

const initialState: AddressState = {
  status: "default",
  addresses: [],
  address: undefined,
  error: undefined
};

export const addressSlice = createAppSlice({
  name: "ADDRESS",
  initialState,
  reducers: create => ({
    /**
     * fetchCreateAddress
     */
    fetchCreateAddress: create.asyncThunk<
      FetchCreateAddressResult,
      FetchCreateAddressPayload
    >(
      async (payload: FetchCreateAddressPayload, { rejectWithValue }) => {
        try {
          return await fetchCreateAddress(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: AddressState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: AddressState,
          { payload }: PayloadAction<FetchCreateAddressResult>
        ) => {
          state.status = "success";
          state.address = payload;
          state.error = initialState.error;
        },
        rejected: (state: AddressState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchDeleteAddress
     */
    fetchDeleteAddress: create.asyncThunk<
      FetchDeleteAddressResult,
      FetchDeleteAddressPayload
    >(
      async (payload: FetchDeleteAddressPayload, { rejectWithValue }) => {
        try {
          return await fetchDeleteAddress(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: AddressState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: AddressState,
          { payload }: PayloadAction<FetchDeleteAddressResult>
        ) => {
          state.status = "success";
          state.address = payload?.address;
          state.error = initialState.error;
        },
        rejected: (state: AddressState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchDeleteAllAddresses
     */
    fetchDeleteAllAddresses: create.asyncThunk<FetchDeleteAllAddressesResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchDeleteAllAddresses();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: AddressState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (state: AddressState) => {
          state.status = "success";
          state.addresses = initialState.addresses;
          state.error = initialState.error;
        },
        rejected: (state: AddressState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetAddressById
     */
    fetchGetAddressById: create.asyncThunk<
      FetchGetAddressByIdResult,
      FetchGetAddressByIdParams
    >(
      async (params: FetchGetAddressByIdParams, { rejectWithValue }) => {
        try {
          return await fetchGetAddressById(params);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: AddressState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: AddressState,
          { payload }: PayloadAction<FetchGetAddressByIdResult>
        ) => {
          state.status = "success";
          state.address = payload?.address;
          state.error = initialState.error;
        },
        rejected: (state: AddressState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetAddresses
     */
    fetchGetAddresses: create.asyncThunk<FetchGetAddressesResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchGetAddresses();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: AddressState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: AddressState,
          { payload }: PayloadAction<FetchGetAddressesResult>
        ) => {
          state.status = "success";
          state.addresses = payload ?? [];
          state.error = initialState.error;
        },
        rejected: (state: AddressState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetAddressesBySellerId
     */
    fetchGetAddressesBySellerId: create.asyncThunk<
      FetchGetAddressesBySellerIdResult,
      FetchGetAddressesBySellerIdParams
    >(
      async (
        params: FetchGetAddressesBySellerIdParams,
        { rejectWithValue }
      ) => {
        try {
          return await fetchGetAddressesBySellerId(params);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: AddressState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: AddressState,
          { payload }: PayloadAction<FetchGetAddressesBySellerIdResult>
        ) => {
          state.status = "success";
          state.addresses = payload ?? [];
          state.error = initialState.error;
        },
        rejected: (state: AddressState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchUpdateAddress
     */
    fetchUpdateAddress: create.asyncThunk<
      FetchUpdateAddressResult,
      FetchUpdateAddressPayload
    >(
      async (payload: FetchUpdateAddressPayload, { rejectWithValue }) => {
        try {
          return await fetchUpdateAddress(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: AddressState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: AddressState,
          { payload }: PayloadAction<FetchUpdateAddressResult>
        ) => {
          state.status = "success";
          state.address = payload?.address;
          state.error = initialState.error;
        },
        rejected: (state: AddressState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchGetAddressesByUserId
     */
    fetchGetAddressesByUserId: create.asyncThunk<
      FetchGetAddressesByUserIdResult,
      FetchGetAddressesByUserIdParams
    >(
      async (params: FetchGetAddressesByUserIdParams, { rejectWithValue }) => {
        try {
          return await fetchGetAddressesByUserId(params);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: AddressState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: AddressState,
          { payload }: PayloadAction<FetchGetAddressesByUserIdResult>
        ) => {
          state.status = "success";
          state.addresses = payload ?? [];
          state.error = initialState.error;
        },
        rejected: (state: AddressState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * resetAddressSlice
     */
    resetAddressSlice: create.reducer(() => initialState)
  })
});

export const {
  actions: addressActions,
  reducer: addressReducer,
  selectors: addressSelectors
} = addressSlice;
