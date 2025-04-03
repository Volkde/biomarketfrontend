import { createAppSlice } from "store/createAppSlice";
import { fetchLogin, Payload as FetchLoginPayload } from "../api/fetchLogin";
import { fetchLogout } from "../api/fetchLogout";
import { fetchProfile } from "../api/fetchProfile";
import { fetchRefresh } from "../api/fetchRefresh";
import {
  fetchRegister,
  Payload as FetchRegisterPayload
} from "../api/fetchRegister";
import {
  fetchResetPassword,
  Payload as FetchResetPasswordPayload
} from "../api/fetchResetPassword";
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
        } catch (error) {
          return rejectWithValue(error);
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
          return await fetchLogout();
        } catch (error) {
          return rejectWithValue(error);
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
        } catch (error) {
          return rejectWithValue(error);
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
        } catch (error) {
          return rejectWithValue(error);
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
        } catch (error) {
          return rejectWithValue(error);
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
            isAuthenticated: false,
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
        } catch (error) {
          return rejectWithValue(error);
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
    )
  })
});

export const {
  actions: authActions,
  reducer: authReducer,
  selectors: authSelectors
} = authSlice;
