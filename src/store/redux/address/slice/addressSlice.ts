import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCreateAddress,
  Payload as FetchCreateAddressPayload,
  Result as FetchCreateAddressResult
} from "shared/api/address/fetchCreateAddress";
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
