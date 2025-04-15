import { createAppSlice } from "store/createAppSlice";
import { LoginModalState } from "../types/LoginModalState";

const initialState: LoginModalState = {
  open: false
};

export const loginModalSlice = createAppSlice({
  name: "LOGIN_MODAL",
  initialState,
  reducers: create => ({
    /**
     * openLoginModal
     */
    openLoginModal: state => {
      state.open = true;
    },

    /**
     * closeLoginModal
     */
    closeLoginModal: state => {
      state.open = false;
    },

    /**
     * resetSnackbarState
     */
    resetLoginModalState: create.reducer(() => initialState)
  })
});

export const {
  actions: loginModalActions,
  reducer: loginModalReducer,
  selectors: loginModalSelectors
} = loginModalSlice;
