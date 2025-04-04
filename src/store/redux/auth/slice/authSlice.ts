import {
  fetchLogin,
  Payload as FetchLoginPayload
} from "shared/api/auth/fetchLogin";
import { fetchLogout } from "shared/api/auth/fetchLogout";
import { fetchProfile } from "shared/api/auth/fetchProfile";
import { fetchRefresh } from "shared/api/auth/fetchRefresh";
import {
  fetchRegister,
  Payload as FetchRegisterPayload
} from "shared/api/auth/fetchRegister";
import {
  fetchResetPassword,
  Payload as FetchResetPasswordPayload
} from "shared/api/auth/fetchResetPassword";
import { createAppSlice } from "store/createAppSlice";
import { LoginState } from "../types/LoginState";

const initialState: LoginState = {
  status: "default",
  error: undefined,
  isAuthenticated: false,
  user: undefined
};

export const authSlice = createAppSlice({
  name: "AUTH",
  initialState,
  reducers: create => ({
    /**
     * login
     */
    login: create.asyncThunk(
      async (payload: FetchLoginPayload, { rejectWithValue }) => {
        try {
          return await fetchLogin(payload);
        } catch (error: any) {
          return rejectWithValue(error?.message);
        }
      },
      {
        pending: (state: LoginState) =>
          Object.assign(state, initialState, {
            status: "loading"
          }),
        fulfilled: (state: LoginState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "success",
            isAuthenticated: true,
            user: payload?.user
          }),
        rejected: (state: LoginState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "error",
            error: payload?.message
          })
      }
    ),

    /**
     * logout
     */
    logout: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          await fetchLogout();
          return;
        } catch (error: any) {
          return rejectWithValue(error?.message);
        }
      },
      {
        pending: (state: LoginState) =>
          Object.assign(state, initialState, {
            status: "loading"
          }),
        fulfilled: (state: LoginState) => {
          Object.assign(state, initialState, {
            status: "success"
          });
        },
        rejected: (state: LoginState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "error",
            error: payload?.message
          })
      }
    ),

    /**
     * profile
     */
    profile: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchProfile();
        } catch (error: any) {
          return rejectWithValue(error?.message);
        }
      },
      {
        pending: (state: LoginState) => {
          state.status = "loading";
          state.error = undefined;
        },
        fulfilled: (state: LoginState, { payload }: any) => {
          state.status = "success";
          state.user = payload.user;
          state.error = undefined;
        },
        rejected: (state: LoginState, { payload }: any) => {
          state.status = "error";
          state.error = payload?.message;
        }
      }
    ),

    /**
     * refresh
     */
    refresh: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          return await fetchRefresh();
        } catch (error: any) {
          return rejectWithValue(error?.message);
        }
      },
      {
        pending: (state: LoginState) =>
          Object.assign(state, initialState, {
            status: "loading"
          }),
        fulfilled: (state: LoginState) =>
          Object.assign(state, initialState, {
            status: "success",
            isAuthenticated: true,
            user: state.user
          }),
        rejected: (state: LoginState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "error",
            error: payload?.message
          })
      }
    ),

    /**
     * register
     */
    register: create.asyncThunk(
      async (payload: FetchRegisterPayload, { rejectWithValue }) => {
        try {
          return await fetchRegister(payload);
        } catch (error: any) {
          return rejectWithValue(error?.message);
        }
      },
      {
        pending: (state: LoginState) =>
          Object.assign(state, initialState, {
            status: "loading"
          }),
        fulfilled: (state: LoginState, { payload }) =>
          Object.assign(state, initialState, {
            status: "success",
            isAuthenticated: true,
            user: payload?.user
          }),
        rejected: (state: LoginState, { payload }: any) =>
          Object.assign(state, initialState, {
            status: "error",
            error: payload?.message
          })
      }
    ),

    /**
     * resetPassword
     */
    resetPassword: create.asyncThunk(
      async (payload: FetchResetPasswordPayload, { rejectWithValue }) => {
        try {
          return await fetchResetPassword(payload);
        } catch (error: any) {
          return rejectWithValue(error?.message);
        }
      },
      {
        pending: (state: LoginState) => {
          state.status = "loading";
          state.error = undefined;
        },
        fulfilled: (state: LoginState) => {
          state.status = "success";
          state.error = undefined;
        },
        rejected: (state: LoginState, { payload }: any) => {
          state.status = "error";
          state.error = payload?.message;
        }
      }
    ),

    /**
     * resetLoginState
     */
    resetLoginState: create.reducer(() => initialState)
  })
});

export const {
  actions: authActions,
  reducer: authReducer,
  selectors: authSelectors
} = authSlice;
