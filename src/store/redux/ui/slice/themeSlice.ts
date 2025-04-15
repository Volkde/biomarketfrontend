import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "store/createAppSlice";
import { ThemeMode, ThemeState } from "../types/ThemeState";

const initialState: ThemeState = {
  mode: (localStorage.getItem("theme") as ThemeMode) || "light"
};

export const themeSlice = createAppSlice({
  name: "THEME",
  initialState,
  reducers: {
    /**
     * setTheme
     */
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
    },

    /**
     * toggleTheme
     */
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    }
  }
});

export const {
  actions: themeActions,
  reducer: themeReducer,
  selectors: themeSelectors
} = themeSlice;
