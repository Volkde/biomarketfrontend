import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchLogin,
  Payload as FetchLoginPayload,
  Result as FetchLoginResult
} from "shared/api/auth/fetchLogin";
import {
  fetchLogout,
  Result as FetchLogoutResult
} from "shared/api/auth/fetchLogout";
import {
  fetchProfile,
  Result as FetchProfileResult
} from "shared/api/auth/fetchProfile";
import {
  fetchRefresh,
  Result as FetchRefreshResult
} from "shared/api/auth/fetchRefresh";
import {
  fetchRegister,
  Payload as FetchRegisterPayload,
  Result as FetchRegisterResult
} from "shared/api/auth/fetchRegister";
import {
  fetchResetPassword,
  Payload as FetchResetPasswordPayload,
  Result as FetchResetPasswordResult
} from "shared/api/auth/fetchResetPassword";
import { createAppSlice } from "store/createAppSlice";
import { LoginState } from "../types/LoginState";

const keyIsLogin = "is_login";
const isLogin = localStorage.getItem(keyIsLogin) == "false";
const initialState: LoginState = {
  status: "default",
  error: undefined,
  isLogin,
  isAdmin: false,
  isSeller: false,
  user: undefined
};

export const authSlice = createAppSlice({
  name: "AUTH",
  initialState,
  reducers: create => ({
    /**
     * login
     */
    login: create.asyncThunk<FetchLoginResult, FetchLoginPayload>(
      async (payload: FetchLoginPayload, { rejectWithValue }) => {
        try {
          return await fetchLogin(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: LoginState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: LoginState,
          { payload }: PayloadAction<FetchLoginResult>
        ) => {
          state.status = "success";
          state.isLogin = true;
          state.user = payload?.user;
          state.isAdmin = (payload?.user?.roles ?? []).includes("ROLE_ADMIN");
          state.isSeller = (payload?.user?.roles ?? []).includes("ROLE_SELLER");
          state.error = initialState.error;

          localStorage.setItem(keyIsLogin, "true");
        },
        rejected: (state: LoginState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";

          localStorage.setItem(keyIsLogin, "false");
        }
      }
    ),

    /**
     * logout
     */
    logout: create.asyncThunk<FetchLogoutResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchLogout();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: LoginState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (state: LoginState) => {
          state.status = "success";
          state.isLogin = false;
          state.isAdmin = initialState.isAdmin;
          state.isSeller = initialState.isSeller;
          state.user = initialState.user;
          state.error = initialState.error;

          localStorage.setItem(keyIsLogin, "false");
        },
        rejected: (state: LoginState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";

          localStorage.setItem(keyIsLogin, "false");
        }
      }
    ),

    /**
     * profile
     */
    profile: create.asyncThunk<FetchProfileResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchProfile();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: LoginState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: LoginState,
          { payload }: PayloadAction<FetchProfileResult>
        ) => {
          state.status = "success";
          state.user = payload;
          state.isLogin = true;
          state.isAdmin = (payload?.roles ?? []).includes("ROLE_ADMIN");
          state.isSeller = (payload?.roles ?? []).includes("ROLE_SELLER");
          state.error = initialState.error;

          localStorage.setItem(keyIsLogin, "true");
        },
        rejected: (state: LoginState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * refresh
     */
    refresh: create.asyncThunk<FetchRefreshResult>(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchRefresh();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: LoginState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (state: LoginState) => {
          state.status = "success";
          state.error = initialState.error;
        },
        rejected: (state: LoginState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * register
     */
    register: create.asyncThunk<FetchRegisterResult, FetchRegisterPayload>(
      async (payload: FetchRegisterPayload, { rejectWithValue }) => {
        try {
          return await fetchRegister(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: LoginState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (
          state: LoginState,
          { payload }: PayloadAction<FetchRegisterResult>
        ) => {
          state.status = "success";
          state.isLogin = true;
          state.user = payload?.user;
          state.isAdmin = (payload?.user?.roles ?? []).includes("ROLE_ADMIN");
          state.isSeller = (payload?.user?.roles ?? []).includes("ROLE_SELLER");
          state.error = initialState.error;

          localStorage.setItem(keyIsLogin, "true");
        },
        rejected: (state: LoginState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * resetPassword
     */
    resetPassword: create.asyncThunk<
      FetchResetPasswordResult,
      FetchResetPasswordPayload
    >(
      async (payload: FetchResetPasswordPayload, { rejectWithValue }) => {
        try {
          return await fetchResetPassword(payload);
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: LoginState) => {
          state.status = "loading";
          state.error = initialState.error;
        },
        fulfilled: (state: LoginState) => {
          state.status = "success";
          state.error = initialState.error;
        },
        rejected: (state: LoginState, { payload }: PayloadAction<any>) => {
          state.status = "error";
          state.error = payload?.message ?? "Unknown error";
        }
      }
    ),

    /**
     * resetAuthState
     */
    resetAuthState: create.reducer(() => initialState)
  })
});

export const {
  actions: authActions,
  reducer: authReducer,
  selectors: authSelectors
} = authSlice;
