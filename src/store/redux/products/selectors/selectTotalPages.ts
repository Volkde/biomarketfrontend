import { createSelector } from "@reduxjs/toolkit";
import { ProductsState } from "../types/ProductsState";
import { selectProductsState } from "./selectProductsState";

export const selectTotalPages = createSelector(
  selectProductsState,
  (state: ProductsState) => state.totalPages
);
