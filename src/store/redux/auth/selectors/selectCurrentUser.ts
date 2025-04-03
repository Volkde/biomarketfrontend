import { createSelector } from "@reduxjs/toolkit";
import { LoginState } from "../types/LoginState";
import { selectAuthState } from "./selectAuthState";

export const selectCurrentUser = createSelector(
  selectAuthState,
  (state: LoginState) => state.user
);
