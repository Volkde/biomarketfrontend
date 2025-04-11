import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCreateSeller,
  Payload as FetchCreateSellerPayload,
  Result as FetchCreateSellerResult
} from "shared/api/sellers/fetchCreateSeller";
import {
  fetchDeleteSeller,
  Payload as FetchDeleteSellerPayload,
  Result as FetchDeleteSellerResult
} from "shared/api/sellers/fetchDeleteSeller";
import {
  fetchDeleteSellerByStoreName,
  Payload as FetchDeleteSellerByStoreNamePayload,
  Result as FetchDeleteSellerByStoreNameResult
} from "shared/api/sellers/fetchDeleteSellerByStoreName";
import {
  fetchGetSellerById,
  Params as FetchGetSellerByIdParams,
  Result as FetchGetSellerByIdResult
} from "shared/api/sellers/fetchGetSellerById";
import {
  fetchGetSellers,
  Result as FetchGetSellersResult
} from "shared/api/sellers/fetchGetSellers";
import {
  fetchUpdateSeller,
  Payload as FetchUpdateSellerPayload,
  Result as FetchUpdateSellerResult
} from "shared/api/sellers/fetchUpdateSeller";
import {
  fetchUpdateSellerLogo,
  Payload as FetchUpdateSellerLogoPayload,
  Result as FetchUpdateSellerLogoResult
} from "shared/api/sellers/fetchUpdateSellerLogo";
import { createAppSlice } from "store/createAppSlice";
import { SellersState } from "../types/SellersState";

const initialState: SellersState = {
  status: "default",
  sellers: [],
  seller: undefined,
  logoUrl: undefined,
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
     * fetchDeleteSeller
     */
    fetchDeleteSeller: create.asyncThunk<
      FetchDeleteSellerResult,
      FetchDeleteSellerPayload
    >(
      async (payload: FetchDeleteSellerPayload, { rejectWithValue }) => {
        try {
          return await fetchDeleteSeller(payload);
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
          { payload }: PayloadAction<FetchDeleteSellerResult>
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
     * fetchDeleteSellerByStoreName
     */
    fetchDeleteSellerByStoreName: create.asyncThunk<
      FetchDeleteSellerByStoreNameResult,
      FetchDeleteSellerByStoreNamePayload
    >(
      async (
        payload: FetchDeleteSellerByStoreNamePayload,
        { rejectWithValue }
      ) => {
        try {
          return await fetchDeleteSellerByStoreName(payload);
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
          { payload }: PayloadAction<FetchDeleteSellerByStoreNameResult>
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
     * fetchGetSellerById
     */
    fetchGetSellerById: create.asyncThunk<
      FetchGetSellerByIdResult,
      FetchGetSellerByIdParams
    >(
      async (params: FetchGetSellerByIdParams, { rejectWithValue }) => {
        try {
          return await fetchGetSellerById(params);
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
          { payload }: PayloadAction<FetchGetSellerByIdResult>
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
     * fetchGetSellers
     */
    fetchGetSellers: create.asyncThunk<FetchGetSellersResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchGetSellers();
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
          { payload }: PayloadAction<FetchGetSellersResult>
        ) => {
          state.status = "success";
          state.sellers = payload?.sellers ?? [];
          state.error = initialState.error;
        },
        rejected: (state: SellersState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchUpdateSeller
     */
    fetchUpdateSeller: create.asyncThunk<
      FetchUpdateSellerResult,
      FetchUpdateSellerPayload
    >(
      async (payload: FetchUpdateSellerPayload, { rejectWithValue }) => {
        try {
          return await fetchUpdateSeller(payload);
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
          { payload }: PayloadAction<FetchUpdateSellerResult>
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
     * fetchUpdateSellerLogo
     */
    fetchUpdateSellerLogo: create.asyncThunk<
      FetchUpdateSellerLogoResult,
      FetchUpdateSellerLogoPayload
    >(
      async (payload: FetchUpdateSellerLogoPayload, { rejectWithValue }) => {
        try {
          return await fetchUpdateSellerLogo(payload);
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
          { payload }: PayloadAction<FetchUpdateSellerLogoResult>
        ) => {
          state.status = "success";
          state.logoUrl = payload.logoUrl;
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
