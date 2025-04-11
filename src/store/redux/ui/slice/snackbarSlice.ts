import { nanoid, PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "store/createAppSlice";
import { SnackbarItem, SnackbarState } from "../types/SnackbarState";

const initialState: SnackbarState = {
  snackbars: []
};

export const snackbarSlice = createAppSlice({
  name: "SNACKBAR",
  initialState,
  reducers: create => ({
    /**
     * enqueueSnackbar
     */
    enqueueSnackbar: (
      state,
      action: PayloadAction<{
        message: string;
        severity?: SnackbarItem["severity"];
      }>
    ) => {
      state.snackbars.push({
        id: nanoid(),
        message: action.payload.message,
        severity: action.payload.severity || "info"
      });
    },

    /**
     * dequeueSnackbar
     */
    dequeueSnackbar: (state, action: PayloadAction<{ id: string }>) => {
      state.snackbars = state.snackbars.filter(
        snackbar => snackbar.id !== action.payload.id
      );
    },

    /**
     * resetSnackbarState
     */
    resetSnackbarState: create.reducer(() => initialState)
  })
});

export const {
  actions: snackbarActions,
  reducer: snackbarReducer,
  selectors: snackbarSelectors
} = snackbarSlice;
