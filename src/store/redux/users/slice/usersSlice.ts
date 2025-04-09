import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchActivateUserById,
  Payload as FetchActivateUserByIdPayload,
  Result as FetchActivateUserByIdResult
} from "shared/api/users/fetchActivateUserById";
import {
  fetchCreateUser,
  Payload as FetchCreateUserPayload,
  Result as FetchCreateUserResult
} from "shared/api/users/fetchCreateUser";
import { createAppSlice } from "store/createAppSlice";
import { UsersState } from "../types/UsersState";

const initialState: UsersState = {
  status: "default",
  users: [],
  user: undefined,
  error: undefined
};

export const usersSlice = createAppSlice({
  name: "USERS",
  initialState,
  reducers: create => ({
    /**
     * fetchActivateUserById
     */
    fetchActivateUserById: create.asyncThunk<
      FetchActivateUserByIdResult,
      FetchActivateUserByIdPayload
    >(
      async (payload: FetchActivateUserByIdPayload, { rejectWithValue }) => {
        try {
          return await fetchActivateUserById(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: UsersState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: UsersState,
          { payload }: PayloadAction<FetchActivateUserByIdResult>
        ) => {
          state.status = "success";
          state.user = payload.user;
          state.error = initialState.error;
        },
        rejected: (state: UsersState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * fetchCreateUser
     */
    fetchCreateUser: create.asyncThunk<
      FetchCreateUserResult,
      FetchCreateUserPayload
    >(
      async (payload: FetchCreateUserPayload, { rejectWithValue }) => {
        try {
          return await fetchCreateUser(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: UsersState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: UsersState,
          { payload }: PayloadAction<FetchCreateUserResult>
        ) => {
          state.status = "success";
          state.user = payload.user;
          state.error = initialState.error;
        },
        rejected: (state: UsersState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * resetUsersState
     */
    resetUsersState: create.reducer(() => initialState)
  })
});

export const {
  actions: usersActions,
  reducer: usersReducer,
  selectors: usersSelectors
} = usersSlice;
