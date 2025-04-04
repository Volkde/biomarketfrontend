import { createSelector } from "@reduxjs/toolkit";
import { CategoryState } from "../types/CategoryState";
import { selectCategoryState } from "./selectCategoryState";

export const selectCategory = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.category
);
