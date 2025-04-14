import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "store/createAppSlice";
import { Language, LanguageState } from "../types/LanguageState";

const initialState: LanguageState = {
  language: (localStorage.getItem("language") as Language) || "en"
};

export const languageSlice = createAppSlice({
  name: "LANGUAGE",
  initialState,
  reducers: {
    /**
     * setLanguage
     */
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    }
  }
});

export const {
  actions: languageActions,
  reducer: languageReducer,
  selectors: languageSelectors
} = languageSlice;
